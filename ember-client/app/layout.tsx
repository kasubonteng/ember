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
  title: "Ember",
  description: "Luxury, handcrafted, sustainable furniture",
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
