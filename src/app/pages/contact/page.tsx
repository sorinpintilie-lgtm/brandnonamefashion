export default function ContactPage() {
  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Suport clienti</span>
        <span className="border border-zinc-300 px-2 py-1">B2B</span>
        <span className="border border-zinc-300 px-2 py-1">PR</span>
      </div>
      <h1 className="mb-6 text-[20px] md:text-[24px]">Contact</h1>
      <div className="space-y-4">
        <p>Tel/Whatsapp: +40 741 222 229</p>
        <p>Clienti: support@brand.ro</p>
        <p>Luni - Vineri: 10:00 - 18:00</p>
        <p>B2B: sales@brand.ro</p>
        <p>PR: pr@brand.ro</p>
        <p>BRAND Promenada, Calea Floreasca 246B, Bucuresti</p>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Raspuns in maximum 24h in zile lucratoare.</div>
        <div className="border border-zinc-200 p-4 text-sm">Asistenta pentru alegerea marimii potrivite.</div>
        <div className="border border-zinc-200 p-4 text-sm">Programari in magazin pentru consultanta privata.</div>
      </div>
      <p className="mt-8 text-sm text-zinc-600">Pentru retururi, consulta pagina Livrare si Returnare.</p>
    </div>
  );
}

