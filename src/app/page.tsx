import Link from "next/link";
import { formatLei, getDiscountPercent, products } from "@/lib/store";
import { BrandMedia } from "@/components/media/murmur-media";

export default function Home() {
  const featured = products.slice(0, 4);
  const heroVideo =
    "https://murmur.ro/cdn/shop/videos/c/vp/bceccaf92fd245eb9abc21b9bf1a49d2/bceccaf92fd245eb9abc21b9bf1a49d2.HD-1080p-7.2Mbps-68297924.mp4?v=0";
  const heroPoster =
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=80";
  const categoryA =
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80";
  const categoryB =
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80";
  const productShots = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  ];
  const editorialImage =
    "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1800&q=80";

  return (
    <div className="w-full bg-white">
      <section className="relative h-[100svh] min-h-screen w-full overflow-hidden">
        <BrandMedia
          kind="video"
          src={heroVideo}
          poster={heroPoster}
          fallbackSrc={heroPoster}
          alt="Hero"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 text-white md:px-8 md:pb-10">
          <div className="mx-auto w-full max-w-[1440px]">
            <p className="mb-2 text-[11px] uppercase tracking-[0.24em] md:text-xs">Noua colectie</p>
            <p className="text-[34px] leading-none md:text-[62px]">PANA LA -50%</p>
            <p className="mt-2 max-w-[560px] text-sm text-zinc-100 md:text-base">Rochii, corsete si piese statement cu croieli feminine pentru seara.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/collections/rochii" className="bg-white px-5 py-2 text-xs uppercase tracking-[0.16em] text-black transition hover:bg-zinc-100">
                Cumpara acum
              </Link>
              <Link href="/collections/reduceri-de-iarna" className="bg-white/15 px-5 py-2 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/25">
                Vezi sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full grid-cols-2">
        <Link href="/collections/rochii" className="group relative block min-h-[200px] overflow-hidden md:min-h-[320px]">
          <BrandMedia
            kind="image"
            src={categoryA}
            fallbackSrc={categoryA}
            alt="Rochii"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[0.15em] text-white md:text-sm">ROCHII</p>
        </Link>
        <Link href="/collections/fall-winter-25" className="group relative block min-h-[200px] overflow-hidden md:min-h-[320px]">
          <BrandMedia
            kind="image"
            src={categoryB}
            fallbackSrc={categoryB}
            alt="Corsete"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[0.15em] text-white md:text-sm">CORSETE & BODYURI</p>
        </Link>
      </section>

      <section className="w-full px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Selectie curenta</p>
              <h2 className="mt-1 text-[24px] md:text-[34px]">Cele mai apreciate</h2>
            </div>
            <Link href="/collections/fall-winter-25" className="rounded-full bg-black px-5 py-2 text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-zinc-800">
              Vezi tot
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {featured.map((product) => {
            const discount = getDiscountPercent(product);
            return (
              <article key={product.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <BrandMedia kind="image" src={productShots[Number(product.id.replace("p", "")) - 1] ?? productShots[0]} fallbackSrc={productShots[0]} alt={product.title} className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  {discount ? <span className="absolute left-2 top-2 rounded-full bg-black/90 px-2.5 py-1 text-[11px] text-white">-{discount}%</span> : null}
                </div>
                <div className="mt-3">
                  <p className="line-clamp-2 min-h-[40px] text-sm leading-snug">{product.title}</p>
                  {product.compareAtPrice ? (
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-medium text-black">{formatLei(product.price)}</span>
                      <span className="text-zinc-500 line-through">{formatLei(product.compareAtPrice)}</span>
                    </div>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-black">{formatLei(product.price)}</p>
                  )}
                  <div className="mt-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex rounded-full bg-zinc-100 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-zinc-800 transition hover:bg-zinc-200"
                    >
                      Vezi produsul
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </section>

      <section className="mt-4 grid w-full items-stretch md:grid-cols-5">
        <div className="relative min-h-[520px] overflow-hidden md:col-span-5 md:min-h-[760px]">
          <BrandMedia
            kind="image"
            src={editorialImage}
            fallbackSrc={editorialImage}
            alt="Promenada"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
          <div className="absolute bottom-6 left-4 max-w-md text-white md:bottom-10 md:left-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-200">Editorial drop</p>
            <h2 className="mt-1 text-[26px] leading-[1.05] md:text-[42px]">Evening silhouettes,
              made to be seen.</h2>
            <p className="mt-3 text-sm text-zinc-100 md:text-base">Selectii premium pentru aparitii de seara, evenimente si shootinguri.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/pages/muses" className="bg-white px-4 py-2 text-xs uppercase tracking-[0.16em] text-black transition hover:bg-zinc-100">
                Descopera muzele
              </Link>
              <Link href="/pages/contact" className="bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/25">
                Contacteaza stilistul
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
