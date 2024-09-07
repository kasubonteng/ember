import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../page";

export default function ProductImages({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: Product["images"][0] = {
          id: Date.now().toString(),
          alt: file.name,
          src: e.target?.result as string,
        };
        setProduct((prev) => ({
          ...prev,
          images: [...prev.images, newImage],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: string) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== id),
    }));
    if (activeImageIndex >= product.images.length - 1) {
      setActiveImageIndex(Math.max(0, product.images.length - 2));
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>Edit and Upload</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {product.images.length > 0 && (
            <div className="relative aspect-square w-full">
              <Image
                alt={product.images[activeImageIndex].alt}
                className="size-[300px] rounded-md object-cover"
                src={product.images[activeImageIndex].src}
                height={300}
                width={300}
              />
            </div>
          )}
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div key={image.id} className="relative">
                <button
                  onClick={() => handleImageClick(index)}
                  className={`w-full ${index === activeImageIndex ? "rounded-md ring-2 ring-primary" : ""}`}
                >
                  <Image
                    alt={image.alt}
                    className="aspect-square w-full rounded-md object-cover"
                    height={84}
                    src={image.src}
                    width={84}
                  />
                </button>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                  onClick={() => handleDelete(image.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {product.images.length < 3 && (
              <Button
                variant="outline"
                className="flex aspect-square h-[75px] w-full items-center justify-center rounded-md border border-dashed"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload</span>
              </Button>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>
      </CardContent>
    </Card>
  );
}
