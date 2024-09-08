import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface AllProducts {
  products: Product[];
  page: number;
  pageSize: number;
  totalPages: number;
}

export async function getAllProducts(
  queryString: string,
): Promise<AllProducts> {
  const response = await fetch(`/api/product?${queryString}`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return await response.json();
}

export function useAllProductsData(queryString: string) {
  return useQuery({
    queryKey: ["allProducts", queryString],
    queryFn: async () => await getAllProducts(queryString),
  });
}
