import type { Category } from "../types/product";

export interface NavLink {
  label: string;
  to: string;
}

export const APP_NAME = "ShopEase";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Add Product", to: "/products/new" },
];

export const CATEGORIES: readonly Category[] = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
];

// import type { Category } from "../types/product";

// export interface NavLink {
//   label: string;
//   to: string;
// }

// export const NAV_LINKS: readonly NavLink[] = [
//   {
//     label: "Home",
//     to: "/",
//   },
//   {
//     label: "Products",
//     to: "/products",
//   },
//   {
//     label: "Add Product",
//     to: "/products/new",
//   },
// ];

// export const CATEGORIES: readonly Category[] = [
//   "Electronics",
//   "Fashion",
//   "Home",
//   "Beauty",
// ];

// export const APP_NAME = "ShopEase";
