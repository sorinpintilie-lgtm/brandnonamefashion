import Image from "next/image";

const shots = ["home", "collections__reduceri-de-iarna", "products__rochie-maro-din-satin-elastic-haze", "pages__muses"];

export default function ComparePage() {
  return (
    <div className="container-brand px-4 py-8 md:px-8">
      <h1 className="mb-6 text-2xl">Reference compare</h1>
      <div className="space-y-10">
        {shots.map((s) => (
          <div key={s} className="grid gap-4 md:grid-cols-3">
            <div><p className="mb-2">Mobile</p><Image src={`/assets/murmur/reference/mobile-375/${s}.png`} alt={s} width={375} height={1200} /></div>
            <div><p className="mb-2">Tablet</p><Image src={`/assets/murmur/reference/tablet-768/${s}.png`} alt={s} width={768} height={1200} /></div>
            <div><p className="mb-2">Desktop</p><Image src={`/assets/murmur/reference/desktop-1440/${s}.png`} alt={s} width={720} height={1200} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

