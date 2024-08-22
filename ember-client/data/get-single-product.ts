import { Product } from "@/types";

interface APIResponse extends Product {
  description: string;
  imageUrls: {
    imageUrl: string;
    id: string;
    altText: string;
  }[];
}
export async function getSingleProduct(id: number): Promise<APIResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product/${id}`,
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return await response.json();
}
