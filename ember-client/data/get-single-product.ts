import { Product } from "@/types";

export async function getSingleProduct(id: number): Promise<Product> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product/${id}`,
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return await response.json();
}
