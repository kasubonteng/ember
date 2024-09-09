"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface EditHeaderProps {
  productId: string;
  name: string;
  stock: number;
}

export default function EditHeader({
  name,
  productId,
  stock,
}: EditHeaderProps) {
  const router = useRouter();
  return (
   
  );
}
