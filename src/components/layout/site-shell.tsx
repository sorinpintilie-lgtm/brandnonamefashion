"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const menuGroups = [
  {
    title: "Produse",
    links: [
      ["Rochii", "/collections/rochii"],
      ["Corsete & Bodyuri", "/collections/fall-winter-25"],
      ["Topuri", "/collections/fall-winter-25"],
      ["Fuste", "/collections/fall-winter-25"],
      ["Pantaloni & Colanti", "/collections/fall-winter-25"],
      ["Accesorii", "/collections/fall-winter-25"],
      ["Lenjerie", "/collections/lenjerie"],
      ["Card cadou", "/collections/fall-winter-25"],
      ["Tot", "/collections/fall-winter-25"],
    ],
  },
  {
    title: "Colectii",
    links: [
      ["Fall-Winter", "/collections/fall-winter-25"],
      ["Semnatura", "/collections/fall-winter-25"],
      ["Esentiale", "/collections/fall-winter-25"],
      ["Lenjerie", "/collections/lenjerie"],
    ],
  },
  {
    title: "Despre",
    links: [
      ["Despre BRAND", "/pages/magazine-murmur"],
      ["Arhiva FW24", "/pages/magazine-murmur"],
      ["Arhiva SS24", "/pages/magazine-murmur"],
      ["Arhiva FW23", "/pages/magazine-murmur"],
      ["Arhiva SS23", "/pages/magazine-murmur"],
    ],
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const announcement = useMemo(
    () =>
      "REDUCERI DE PANA LA -50% LA O SELECTIE DE PRODUSE | LIVRARE SI RETUR GRATUIT",
    []
  );

  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <div className="bg-[#fafafa] px-4 py-2 text-center text-[11px] tracking-wide text-zinc-700 md:text-xs">
        {announcement}
      </div>

      <header className="sticky top-0 z-30 bg-white/88 backdrop-blur-md">
        <div className="mx-auto grid h-[70px] w-full max-w-[1440px] grid-cols-3 items-center px-4 md:px-8">
          <div className="justify-self-start">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-zinc-800 transition hover:bg-zinc-200"
              onClick={() => setOpen(true)}
              aria-label="Deschide meniul"
            >
              <span aria-hidden>☰</span>
              <span>Meniu</span>
            </button>
          </div>
          <Link href="/" className="justify-self-center text-[24px] leading-none tracking-[0.18em] md:text-[28px]">
            BRAND
          </Link>
          <div className="flex items-center justify-self-end gap-4 text-sm md:gap-6">
            <Link href="/account/login">Conecteaza-te</Link>
            <Link href="/search">Cauta</Link>
            <Link href="/cart">Cos</Link>
            <span>0</span>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)}>
          <aside className="h-full w-[90%] max-w-[420px] overflow-auto bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[28px]">BRAND</p>
              <button onClick={() => setOpen(false)}>Inchide</button>
            </div>
            <p className="mb-6 text-sm">0 Favorite</p>
            <div className="space-y-6">
              {menuGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2 text-base">{group.title}</h3>
                  <ul className="space-y-1 text-sm">
                    {group.links.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-1 text-sm">
              <Link href="/pages/magazine-murmur" className="block">
                Magazine
              </Link>
              <Link href="/pages/muses" className="block">
                Celebritati
              </Link>
              <Link href="/collections/reduceri-de-iarna" className="block">
                Reduceri
              </Link>
            </div>
          </aside>
        </div>
      ) : null}

      <main>{children}</main>

      <footer className="mt-16 border-t border-zinc-200 px-4 py-10 text-sm md:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-base">Showroom demonstrativ</h4>
            <p>Adresa exemplu 123, Bucuresti</p>
            <p>Luni - Duminica: 10:00 - 22:00</p>
            <p>+40 700 000 000</p>
            <a href="#" className="underline">
              Vezi pe harta
            </a>
          </div>
          <div className="space-y-1">
            <Link href="/pages/contact" className="block">
              Contact
            </Link>
            <Link href="/policies/shipping-policy" className="block">
              Livrare
            </Link>
            <Link href="/policies/refund-policy" className="block">
              Returnare
            </Link>
            <Link href="/policies/terms-of-service" className="block">
              Termeni si conditii
            </Link>
            <Link href="/policies/privacy-policy" className="block">
              Politica de confidentialitate
            </Link>
          </div>
          <div>
            <p className="text-base">-10% la prima comanda</p>
            <p>prin abonarea la newsletter.</p>
            <div className="mt-3 flex gap-2 border-b border-zinc-300 pb-2">
              <input className="w-full outline-none" placeholder="Email" />
              <button>Aboneaza-te</button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-[1440px] gap-3 md:grid-cols-3">
          <div className="border border-zinc-200 p-4 text-xs uppercase tracking-[0.1em]">Livrare rapida 2-5 zile</div>
          <div className="border border-zinc-200 p-4 text-xs uppercase tracking-[0.1em]">Retur gratuit</div>
          <div className="border border-zinc-200 p-4 text-xs uppercase tracking-[0.1em]">Suport client dedicat</div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1440px] items-center justify-between text-xs">
          <div className="flex gap-3">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">ANPC</a>
            <a href="#">EU ODR</a>
          </div>
          <p>© 2026 - BRAND</p>
        </div>
      </footer>

      <div className="fixed bottom-3 right-3 z-30">
        <Link href="/pages/contact" className="border border-black bg-white px-3 py-2 text-xs uppercase tracking-[0.1em]">Asistenta</Link>
      </div>
    </div>
  );
}

