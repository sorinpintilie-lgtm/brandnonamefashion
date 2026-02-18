const content: Record<string, string> = {
  "shipping-policy": "Livrare prin Fan Courier. Livrare Rapida: 2-5 zile lucratoare. Livrare urgenta in 2h in Bucuresti pentru 50 lei. Produsele pe comanda se livreaza in maximum 14 zile lucratoare.",
  "refund-policy": "Retur in termenii legali, conform politicii BRAND.",
  "terms-of-service": "Termeni si conditii de utilizare a site-ului.",
  "privacy-policy": "Politica de confidentialitate si prelucrare a datelor.",
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container-brand px-4 py-8 md:px-8">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Informatii legale</span>
        <span className="border border-zinc-300 px-2 py-1">Politici oficiale</span>
        <span className="border border-zinc-300 px-2 py-1">Actualizat 2026</span>
      </div>
      <h1 className="mb-3 text-[20px] capitalize">{slug.replaceAll("-", " ")}</h1>
      <p>{content[slug] ?? "Politica indisponibila."}</p>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="border border-zinc-200 p-4 text-sm">Livrare prin Fan Courier in toata tara.</div>
        <div className="border border-zinc-200 p-4 text-sm">Retur in termen legal conform politicii de returnare.</div>
        <div className="border border-zinc-200 p-4 text-sm">Suport client prin email si WhatsApp.</div>
      </div>
      <p className="mt-8 text-sm text-zinc-600">Pentru intrebari suplimentare, contacteaza echipa BRAND.</p>
    </div>
  );
}

