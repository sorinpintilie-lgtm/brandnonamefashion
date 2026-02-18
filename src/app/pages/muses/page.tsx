import Image from "next/image";
import Link from "next/link";
import { muses, products } from "@/lib/store";

export default function MusesPage() {
  const heroImage = "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1800&q=80";

  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Iconic looks</span>
        <span className="border border-zinc-300 px-2 py-1">Global celebrities</span>
        <span className="border border-zinc-300 px-2 py-1">Shop inspired</span>
      </div>
      <div className="relative mb-6 h-[280px] md:h-[460px]">
        <Image src={heroImage} alt="Muses" fill className="object-cover" />
      </div>
      <h1 className="mb-2 text-[22px] md:text-[30px]">Purtat de celebritati. Creat pentru tine.</h1>
      <p className="mb-8 max-w-3xl">BRAND celebreaza feminitatea contemporana prin piese purtate de artiste internationale.</p>
      <div className="grid gap-5 md:grid-cols-2">
        {muses.map((m) => {
          const product = products.find((p) => p.slug === m.productSlug);
          return (
            <div key={m.handle} className="grid grid-cols-2 gap-3 border-b border-zinc-200 pb-5">
              <div className="relative aspect-[3/4]">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-lg">{m.name}</p>
                <p className="mb-3 text-xs text-zinc-500">{m.handle}</p>
                {product ? <Link href={`/products/${product.slug}`}>{product.title}</Link> : null}
              </div>
            </div>
          );
        })}
      </div>
      <section className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Selectie editoriala curata zilnic de echipa BRAND.</div>
        <div className="border border-zinc-200 p-4 text-sm">Inspiratie de styling pentru evenimente si aparitii speciale.</div>
        <div className="border border-zinc-200 p-4 text-sm">Piese iconice disponibile in colectiile curente.</div>
      </section>
      <button className="mt-8 border border-zinc-300 px-4 py-2">Vezi mai multe</button>
    </div>
  );
}

