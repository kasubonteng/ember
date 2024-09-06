export async function getShopProducts() {
  const response = await fetch(`/api/product/shop`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
