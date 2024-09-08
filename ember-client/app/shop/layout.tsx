import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchShopData } from "./prefetch";

export default async function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const queryClient = await prefetchShopData(params.category);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
