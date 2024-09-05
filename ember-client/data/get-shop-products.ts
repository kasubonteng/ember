export async function getShopProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/product/shop`,
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
