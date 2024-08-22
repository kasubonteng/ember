export type Product = {
  id: number;
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
  category: "featured" | "living-room" | "dining-room" | "bedroom" | "office";
  // popularity: "Most Popular" | "New Arrival" | "Best Seller";
};
