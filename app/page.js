export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f3a2f] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0f3a2fa6]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* left: logo + name */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Building Zone Logo" className="w-12 h-12 object-contain rounded" />
            <div>
              <p className="font-semibold leading-none">სამშენებლო ზონა</p>
              <p className="text-xs text-[#b8e0d0]">ყველაფერი მშენებლობისთვის ერთ სივრცეში!</p>
            </div>
          </div>

          {/* nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#cfe9df]">
            <a href="#categories" className="hover:text-white">პროდუქტები</a>
            <a href="#services" className="hover:text-white">სერვისები</a>
            <a href="#about" className="hover:text-white">ჩვენ შესახებ</a>
            <a href="#contact" className="hover:text-white">კონტაქტი</a>
          </nav>

          {/* CTA */}
          <a
            href="https://www.facebook.com/BuildingZoneGeorgia"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold shadow hover:scale-[1.02] transition"
          >
            მოგვწერე
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          შენი სამშენებლო ზონა: მასალები • მიტანის სერვისი • პროფესიონალი ხელოსნები
        </h1>
        <p className="mt-4 text-[#cfe9df] text-lg max-w-3xl">
          სამშენებლო ზონა გთავაზობთ მაღალი ხარისხის მასალებს, ადგილზე მიტანის სერვისს და სერტიფიცირებული
          ხელოსნების მომსახურებას სრულიად საქართველოს მასშტაბით.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="px-5 py-3 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold">მიიღე შეთავაზება</a>
          <a href="https://www.facebook.com/BuildingZoneGeorgia" target="_blank" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10">მოგვწერე Facebook-ზე</a>
        </div>
      </section>
    </div>
  );
}
