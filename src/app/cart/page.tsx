import Link from "next/link";

export default function CartPage() {
  return (
    <div className="container-brand px-4 py-8 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Checkout rapid</span>
        <span className="border border-zinc-300 px-2 py-1">Fara plati reale</span>
        <span className="border border-zinc-300 px-2 py-1">Rezumat comanda</span>
      </div>
      <h1 className="mb-4 text-[18px] md:text-[20px]">Cos</h1>
      <p className="mb-3">Cosul tau este gol</p>
      <Link className="underline" href="/collections/fall-winter-25">Continua cumparaturile</Link>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Transport gratuit pentru comenzile eligibile.</div>
        <div className="border border-zinc-200 p-4 text-sm">Retur simplu in 14 zile calendaristice.</div>
        <div className="border border-zinc-200 p-4 text-sm">Suport dedicat pe WhatsApp pentru intrebari.</div>
      </div>
      <button className="mt-6 border border-black bg-black px-4 py-2 text-sm text-white">Mergi la checkout (stub)</button>
    </div>
  );
}

