export default function DiscoverPage() {
  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Editorial</span>
        <span className="border border-zinc-300 px-2 py-1">Style guide</span>
        <span className="border border-zinc-300 px-2 py-1">Shop the look</span>
      </div>
      <h1 className="mb-4 text-[18px] md:text-[20px]">Descopera</h1>
      <h2 className="mb-3 text-[22px] md:text-[30px]">Shop the look</h2>
      <div className="mb-6 flex gap-3 text-sm underline">
        <button>Mergi la articolul 1</button><button>Mergi la articolul 2</button><button>Mergi la articolul 3</button>
      </div>
      <div className="mb-10 flex gap-3"><button className="border px-3 py-2">Vezi produsele</button><button className="border px-3 py-2">Vezi produsul</button><button className="border px-3 py-2">Cumpara colectia</button></div>
      <h2 className="mb-3 text-[22px] md:text-[30px]">ESSENTIALS</h2>
      <a className="underline">View all</a>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Articole curate de echipa BRAND pentru inspiratie completa.</div>
        <div className="border border-zinc-200 p-4 text-sm">Selectii de produse grupate pe look-uri sezoniere.</div>
        <div className="border border-zinc-200 p-4 text-sm">Acces rapid catre produse din fiecare articol.</div>
      </div>
    </div>
  );
}

