export type Category = "Electronics" | "Fashion" | "Home" | "Beauty";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  rating: number;
  stock: number;
}

export type CreateProductInput = Omit<Product, "id">;
