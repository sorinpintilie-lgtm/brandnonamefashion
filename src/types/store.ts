export type Availability = "Livrare rapida" | "Pe comanda";

export type ProductVariant = {
  id: string;
  size: string;
  stock: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  care: string;
  collectionHandles: string[];
  color: string;
  availability: Availability;
  badge?: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  muses: { name: string; handle: string; image: string }[];
  variants: ProductVariant[];
};

export type Collection = {
  handle: string;
  title: string;
  heroImage: string;
  description?: string;
};

export type MenuGroup = {
  title: string;
  links: { label: string; href: string }[];
};

