export default function LoginPage() {
  return (
    <div className="container-brand max-w-xl px-4 py-10">
      <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
        <span className="border border-zinc-300 px-2 py-1">Cont client</span>
        <span className="border border-zinc-300 px-2 py-1">Recuperare rapida</span>
        <span className="border border-zinc-300 px-2 py-1">Checkout simplificat</span>
      </div>
      <h1 className="mb-4 text-[20px] md:text-[24px]">Conecteaza-te</h1>
      <div className="space-y-3">
        <input className="w-full border border-zinc-300 p-3" placeholder="Email" />
        <input className="w-full border border-zinc-300 p-3" placeholder="Parola" type="password" />
      </div>
      <button className="mt-4 w-full border border-black bg-black p-3 text-white">Conecteaza-te</button>
      <div className="mt-3 flex gap-4 text-sm underline">
        <a href="#">Ai uitat parola?</a>
        <a href="#">Inregistreaza-te</a>
      </div>
      <h2 className="mt-8 text-[20px] md:text-[24px]">Recupereaza parola</h2>
      <p className="mt-2 text-sm text-zinc-600">Introdu adresa de email si vei primi un link de resetare.</p>
    </div>
  );
}

