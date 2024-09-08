import { getAllProducts } from "@/hooks/useAllProductsData";
import { getShopProducts } from "@/hooks/useShopProductsData";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

export async function prefetchShopData(category?: string) {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["allProducts", "page=1&pageSize=10"],
      queryFn: async () => await getAllProducts("page=1&pageSize=10"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["allProducts", "page=2&pageSize=10"],
      queryFn: async () => await getAllProducts("page=2&pageSize=10"),
    }),
  ]);

  if (category) {
    await queryClient.prefetchQuery({
      queryKey: ["shopProducts"],
      queryFn: async () => await getAllProducts(`category=${category}`),
    });
  }

  return queryClient;
}
