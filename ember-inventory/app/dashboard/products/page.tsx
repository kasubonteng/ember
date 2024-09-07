import { Product } from "./_components/columns";
import { ClientProductsWrapper } from "./ProductsWrapper";

async function fetchProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      image: "/innovation.webp",
      name: "Product 1",
      price: 100,
      stock: 10,
      status: "active",
      totalOrders: 10,
    },
    {
      id: "2",
      image: "/innovation.webp",
      name: "Product 2",
      price: 200,
      stock: 20,
      status: "draft",
      totalOrders: 20,
    },
    {
      id: "3",
      image: "/innovation.webp",
      name: "Product 3",
      price: 300,
      stock: 30,
      status: "archived",
      totalOrders: 30,
    },
  ];
}

export default async function ProductsPage() {
  let data = await fetchProducts();
  data = Array.from({ length: 20 }, (_, i) => ({
    ...data[i % data.length],
    id: String(i + 1),
    name: `Product ${i + 1}`,
  }));

  return <ClientProductsWrapper initialData={data} />;
}
