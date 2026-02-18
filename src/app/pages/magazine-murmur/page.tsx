export default function MagazinePage() {
  return (
    <div className="container-brand px-4 py-6 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Boutique experience</span>
        <span className="border border-zinc-300 px-2 py-1">By appointment</span>
        <span className="border border-zinc-300 px-2 py-1">Personal styling</span>
      </div>
      <h1 className="mb-4 text-[24px] md:text-[30px]">BRAND PROMENADA</h1>
      <p className="mb-3 underline">Calea Floreasca 246B, Bucuresti</p>
      <p className="mb-6 max-w-3xl">Un spatiu cu atmosfera boudoir anii &apos;50, unde descoperi colectiile BRAND intr-un cadru editorial.</p>
      <div className="mb-8">
        <p>Luni - Duminica: 10:00 - 22:00</p>
        <p>+40 741 222 229</p>
      </div>
      <div className="mb-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Probe private in spatiu dedicat.</div>
        <div className="border border-zinc-200 p-4 text-sm">Consultanta de styling pentru evenimente.</div>
        <div className="border border-zinc-200 p-4 text-sm">Colectii capsule disponibile in editie limitata.</div>
      </div>
      <h3 className="mb-4 text-[20px] md:text-[24px]">BRAND in magazine partenere</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-2">AMERICA</h4>
          <ul className="space-y-1 underline">
            <li>FWRD</li><li>Revolve</li><li>The Webster</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2">EUROPA</h4>
          <ul className="space-y-1 underline">
            <li>LuisaViaRoma</li><li>Farfetch</li><li>Browns</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-sm text-zinc-600">Pentru colaborari retail, scrie-ne la sales@brand.ro.</p>
    </div>
  );
}

