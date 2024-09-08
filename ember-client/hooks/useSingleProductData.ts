import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface SingleProduct extends Product {
  description: string;
  imageUrls: {
    imageUrl: string;
    id: string;
    altText: string;
  }[];
}
export async function getSingleProduct(id: number): Promise<SingleProduct> {
  const response = await fetch(`/api/product/${id}`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return await response.json();
}

export function useSingleProductData(id: number) {
  return useQuery({
    queryKey: ["singleProduct", id],
    queryFn: async () => await getSingleProduct(id),
  });
}
