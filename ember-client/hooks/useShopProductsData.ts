import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface ShopProducts {
  category: string;
  description: string;
  products: Product[];
}

export async function getShopProducts() {
  const response = await fetch(`/api/product/shop`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export function useShopProductsData() {
  return useQuery<ShopProducts[], Error>({
    queryKey: ["shopProducts"],
    queryFn: async () => await getShopProducts(),
  });
}
