export default function SearchPage() {
  return (
    <div className="container-brand px-4 py-8 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Cautare instant</span>
        <span className="border border-zinc-300 px-2 py-1">Produse + colectii</span>
        <span className="border border-zinc-300 px-2 py-1">Sugestii populare</span>
      </div>
      <h1 className="mb-4 text-[18px] md:text-[20px]">Cauta</h1>
      <input className="w-full border-b border-zinc-300 p-2 outline-none" placeholder="Cauta..." />
      <div className="mt-6 grid gap-2 text-sm md:grid-cols-3">
        <button className="border border-zinc-300 px-3 py-2 text-left">Rochii</button>
        <button className="border border-zinc-300 px-3 py-2 text-left">Corsete</button>
        <button className="border border-zinc-300 px-3 py-2 text-left">Lenjerie</button>
      </div>
      <p className="mt-6 text-sm text-zinc-600">Incepe sa tastezi pentru a vedea rezultate din catalogul local.</p>
    </div>
  );
}

