import React, { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import { useFormContext } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ProductImages() {
  const { control, watch, setValue } = useFormContext();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const images = watch("images");

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now().toString(),
          alt: file.name,
          src: e.target?.result as string,
        };
        setValue("images", [...images, newImage], { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: string) => {
    const newImages = images.filter((img) => img.id !== id);
    setValue("images", newImages, { shouldValidate: true });
    if (activeImageIndex >= newImages.length) {
      setActiveImageIndex(Math.max(0, newImages.length - 1));
    }
  };

  return (
    <FormField
      control={control}
      name="images"
      render={({ field }) => (
        <FormItem>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>Edit and Upload</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {images.length > 0 && (
                  <div className="relative aspect-square w-full">
                    <Image
                      alt={images[activeImageIndex].alt}
                      className="size-[300px] rounded-md object-cover"
                      src={images[activeImageIndex].src}
                      height={300}
                      width={300}
                    />
                  </div>
                )}
                <div className="grid grid-cols-3 gap-2">
                  {images.map((image, index) => (
                    <div key={image.id} className="relative">
                      <button
                        type="button"
                        onClick={() => handleImageClick(index)}
                        className={`w-full ${
                          index === activeImageIndex
                            ? "rounded-md ring-2 ring-primary"
                            : ""
                        }`}
                      >
                        <Image
                          alt={image.alt}
                          className="aspect-square size-[84px] w-full rounded-md object-cover"
                          height={84}
                          src={image.src}
                          width={84}
                        />
                      </button>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                        onClick={() => handleDelete(image.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {images.length < 3 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="flex aspect-square h-[75px] w-full items-center justify-center rounded-md border border-dashed"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4" />
                      <span className="sr-only">Upload</span>
                    </Button>
                  )}
                </div>
                <Input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleUpload}
                />
              </div>
            </CardContent>
          </Card>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
