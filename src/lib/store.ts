import collectionsJson from "../../data/collections.json";
import productsJson from "../../data/products.json";
import musesJson from "../../data/muses.json";
import storesJson from "../../data/stores.json";
import type { Collection, Product } from "@/types/store";

export const products = productsJson as Product[];
export const collections = collectionsJson as Collection[];
export const muses = musesJson as {
  name: string;
  handle: string;
  image: string;
  productSlug: string;
}[];
export const stores = storesJson as {
  storeName: string;
  address: string;
  hours: string[];
  phone: string;
  mapUrl: string;
}[];

export function formatLei(value: number): string {
  return `${new Intl.NumberFormat("ro-RO").format(value)} lei`;
}

export function getDiscountPercent(product: Product): number | null {
  if (!product.compareAtPrice || product.compareAtPrice <= product.price) return null;
  return Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);
}

export function getCollection(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function getCollectionProducts(handle: string): Product[] {
  if (handle === "tot") return products;
  return products.filter((p) => p.collectionHandles.includes(handle));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

