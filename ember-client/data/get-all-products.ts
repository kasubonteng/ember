import { Product } from "@/types";

interface APIResponse {
  products: Product[];
  page: number;
  pageSize: number;
  totalPages: number;
}

export default async function getAllProducts(
  queryString: string,
): Promise<APIResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product?${queryString}`,
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return await response.json();
}
