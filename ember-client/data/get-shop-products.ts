export async function getShopProducts() {
  const response = await fetch(`${process.env.BASE_API_URL}/product/shop`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
