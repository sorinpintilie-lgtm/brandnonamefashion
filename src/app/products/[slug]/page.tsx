import Image from "next/image";
import Link from "next/link";
import { formatLei, getDiscountPercent, getProductBySlug, products } from "@/lib/store";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return <div className="container-brand px-4 py-10">Produs inexistent.</div>;

  const discount = getDiscountPercent(product);

  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Livrare gratuita</span>
        <span className="border border-zinc-300 px-2 py-1">Retur 14 zile</span>
        <span className="border border-zinc-300 px-2 py-1">Asistenta marimi</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-[3/4] bg-zinc-100">
            <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img) => (
              <div key={img} className="relative aspect-square bg-zinc-100">
                <Image src={img} alt={product.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-[20px] md:text-[24px]">{product.title}</h1>
          {discount ? (
            <p className="mb-4">Pret redus {formatLei(product.price)} Pret normal {formatLei(product.compareAtPrice!)}</p>
          ) : (
            <p className="mb-4">{formatLei(product.price)}</p>
          )}
          <p className="mb-2 text-sm">Marime</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button key={v.id} className="border border-zinc-300 px-3 py-1 text-sm">
                {v.size}
              </button>
            ))}
          </div>
          <button className="w-full border border-black bg-black px-4 py-3 text-white">Adauga in cos</button>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <button className="border border-zinc-300 px-3 py-2">Adauga la favorite</button>
            <button className="border border-zinc-300 px-3 py-2">Ghid marimi</button>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="font-medium">{product.availability}</p>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div>
              <p>{product.care}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-[22px] md:text-[30px]">#BRAND Muses</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {product.muses.map((muse) => (
            <div key={muse.handle}>
              <div className="relative aspect-[3/4] bg-zinc-100">
                <Image src={muse.image} alt={muse.name} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm">{muse.name}</p>
              <p className="text-xs text-zinc-500">{muse.handle}</p>
            </div>
          ))}
        </div>
        <Link href="/pages/muses" className="mt-4 inline-block underline">
          Vezi mai multe
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-[22px]">Alte recomandari</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.slice(0, 4).map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`}>
              <div className="relative aspect-[3/4] bg-zinc-100">
                <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-700">
        <p className="mb-2">Plata securizata. Fara checkout real in acest demo.</p>
        <p>Pentru comenzi pe comanda, termenul estimativ este de pana la 14 zile lucratoare.</p>
      </section>
    </div>
  );
}

