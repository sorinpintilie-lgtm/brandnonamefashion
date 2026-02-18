import Image from "next/image";
import Link from "next/link";
import { formatLei, getCollection, getCollectionProducts, getDiscountPercent } from "@/lib/store";

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = getCollection(handle);
  const products = getCollectionProducts(handle);

  if (!collection) return <div className="container-brand px-4 py-10">Colectia nu exista.</div>;

  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="relative mb-6 h-[240px] overflow-hidden md:h-[420px]">
        <Image src={collection.heroImage} alt={collection.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 text-white md:bottom-8 md:left-8">
          <p className="text-[10px] uppercase tracking-[0.2em] md:text-xs">Colectie</p>
          <h1 className="mt-1 text-[24px] md:text-[38px]">{collection.title}</h1>
        </div>
      </div>

      {collection.description ? <p className="mb-5 max-w-3xl text-zinc-700">{collection.description}</p> : null}

      <div className="mb-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <input
          type="text"
          placeholder="Cauta in categorie..."
          className="h-11 w-full bg-zinc-100 px-4 text-sm outline-none placeholder:text-zinc-500"
        />
        <button className="h-11 bg-zinc-100 px-4 text-xs uppercase tracking-[0.14em] text-zinc-700 transition hover:bg-zinc-200">Filtre</button>
        <button className="h-11 bg-zinc-100 px-4 text-xs uppercase tracking-[0.14em] text-zinc-700 transition hover:bg-zinc-200">Sorteaza</button>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em]">
        <span className="bg-zinc-100 px-3 py-2">XXS - XL</span>
        <span className="bg-zinc-100 px-3 py-2">Alb</span>
        <span className="bg-zinc-100 px-3 py-2">Maro</span>
        <span className="bg-zinc-100 px-3 py-2">Negru</span>
        <span className="bg-zinc-100 px-3 py-2">Rosu burgund</span>
        <span className="bg-zinc-100 px-3 py-2">Livrare rapida</span>
        <span className="bg-zinc-100 px-3 py-2">Pe comanda</span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          const discount = getDiscountPercent(product);
          return (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image src={product.images[0]} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                {discount ? <span className="absolute left-2 top-2 bg-black/85 px-2 py-1 text-[11px] text-white">-{discount}%</span> : null}
                {product.badge ? <span className="absolute right-2 top-2 bg-white/85 px-2 py-1 text-[10px] uppercase tracking-[0.12em]">{product.badge}</span> : null}
              </div>
              <div className="mt-3 space-y-1">
                <p className="line-clamp-2 text-sm leading-snug">{product.title}</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">{product.color}</p>
              {product.compareAtPrice ? (
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-medium">{formatLei(product.price)}</span>
                    <span className="text-zinc-500 line-through">{formatLei(product.compareAtPrice)}</span>
                  </div>
              ) : (
                  <p className="text-sm font-medium">{formatLei(product.price)}</p>
              )}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        <p>Ai nevoie de ajutor pentru marime? Consulta ghidul de marimi sau contacteaza echipa noastra.</p>
      </div>
    </div>
  );
}

