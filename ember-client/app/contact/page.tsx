"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="border-black" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="border-black" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className="border-black" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

const ContactInfo = ({
  title,
  content,
  icon: Icon,
}: {
  title: string;
  content: string;
  icon: LucideIcon;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-2"
  >
    <div className="flex items-center gap-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Icon size={18} />
    </div>
    <div className="flex items-center gap-3">
      <div className="size-2 rounded-full bg-primary"></div>
      <div className="text-lg font-medium">{content}</div>
    </div>
  </motion.div>
);

const ContactPage = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center p-4 pt-8 sm:pt-0 md:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-center md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 border-black px-2 pt-8 lg:px-8"
        >
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <div className="space-y-6">
            <ContactInfo title="Email" content="info@ember.com" icon={Mail} />
            <ContactInfo
              title="Location"
              content="12, Labone Street"
              icon={MapPin}
            />
            <ContactInfo
              title="Phone"
              content="+233 (0) 20 000 0000"
              icon={Phone}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-4 border-t-4 border-black p-2 px-2 py-8 md:w-1/2 md:border-l-4 md:border-t-0 lg:px-8"
        >
          <h2 className="text-3xl font-bold">Send us a message</h2>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
