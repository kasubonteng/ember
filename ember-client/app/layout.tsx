import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { gilroy } from "@/fonts";
import { cn } from "@/lib/utils";
import ReactQueryClientProvider from "@/providers/query-client-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ember | Luxury, Handcrafted, Sustainable Furniture",
  description:
    "Discover Ember's collection of minimalist, elegant furniture designed to transform your space with timeless beauty. Shop our sustainable, handcrafted pieces.",
  keywords:
    "luxury furniture, sustainable furniture, minimalist design, handcrafted furniture, modern home decor",
  openGraph: {
    title: "Ember | Luxury, Handcrafted, Sustainable Furniture",
    description:
      "Transform your space with Ember's elegant, sustainable furniture. Shop our handcrafted, minimalist designs for timeless beauty.",
    images: [
      {
        url: "https://ember-jade.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ember Furniture Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember | Luxury, Handcrafted, Sustainable Furniture",
    description:
      "Transform your space with Ember's elegant, sustainable furniture. Shop our handcrafted, minimalist designs for timeless beauty.",
    images: ["https://ember-jade.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `relative min-h-screen bg-background font-sans antialiased`,
          gilroy.variable,
        )}
      >
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
