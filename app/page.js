export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f3a2f] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0f3a2fa6]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* left: logo + name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Building Zone Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="font-semibold leading-none">სამშენებლო ზონა</p>
              <p className="text-xs text-[#b8e0d0]">ყველაფერი მშენებლობისთვის</p>
            </div>
          </div>

          {/* center: nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#cfe9df]">
            <a href="#categories" className="hover:text-white">პროდუქტები</a>
            <a href="#services" className="hover:text-white">სერვისები</a>
            <a href="#about" className="hover:text-white">ჩვენ შესახებ</a>
            <a href="#contact" className="hover:text-white">კონტაქტი</a>
          </nav>

          {/* right: CTA */}
          <a
            href="https://www.facebook.com/BuildingZoneGeorgia"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold shadow hover:scale-[1.02] transition"
          >
            მოგვწერე
          </a>
        </div>
      </header>

      {/* BIG CENTERED LOGO (hero top) */}
      <section className="pt-8">
        <img
          src="/logo.png"
          alt="Building Zone"
          className="mx-auto w-[320px] md:w-[420px] lg:w-[560px] h-auto object-contain"
        />
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              სრული სამშენებლო ეკოსისტემა: მასალები, მიწოდება, პროფესიონალი ხელოსნები
            </h1>
            <p className="mt-4 text-[#cfe9df] text-lg">
              სამშენებლო ზონა გთავაზობთ მრავალფეროვან სამშენებლო მასალების არჩევანს, ადგილზე მიტანის სერვისს
              და სერთიფიცირებული ხელოსნების მომსახურებას — შენი პროექტის სრულყოფილებისთვის.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#categories" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
                დაათვალიერე კატეგორიები
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold">
                მიიღე შეთავაზება
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-[#b8e0d0]">
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-2xl font-bold text-white">50+</p>
                <p>პარტნიორი ხელოსნები</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-2xl font-bold text-white">6</p>
                <p>პროდუქტის კატეგორია</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p>კონსულტაცია</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#154c3a] to-[#0b2a21] shadow-xl ring-1 ring-white/10 grid place-items-center p-6">
              <div className="w-full h-full rounded-2xl border-2 border-[#1a523f] grid place-items-center text-center px-6">
                <p className="text-lg text-[#cfe9df]">
                  აქ შეიტანე თქვენი ბანერი/სლაიდერი ან პროდუქტის ფოტოები (ხელოვნური ბალახი, იზოლაცია და ა.შ.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">პროდუქტის კატეგორიები</h2>
        <p className="text-[#cfe9df] mt-2">შოურუმში ხელმისაწვდომი და ონლაინ შეკვეთით მისაღები.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            {title: 'Hydrosol მასალები'},
            {title: 'თბოიზოლაცია'},
            {title: 'რემონტის მასალები'},
            {title: 'სინთეთიკური მემბრანები'},
            {title: 'ღობეები'},
            {title: 'ფასადის პანელები'},
          ].map((c, i) => (
            <div key={i} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:-translate-y-0.5 transition">
              <div className="h-40 bg-[#12382d] grid place-items-center text-[#9fd3be]">სურათი</div>
              <div className="p-4">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-[#b8e0d0] mt-1">საწყობში • მიწოდება მთელი საქართველოს მასშტაბით</p>
                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="px-3 py-2 text-sm rounded-lg bg-[#e2b714] text-[#0f3a2f] font-semibold">ვკითხო ფასი</a>
                  <a href="https://www.facebook.com/BuildingZoneGeorgia" target="_blank" className="px-3 py-2 text-sm rounded-lg bg-white/10">
                    მოგვწერე
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#0b2e24]">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">სერვისები</h2>
          <div className="grid md:grid-cols-4 gap-5 mt-8">
            {[
              {t:'მიტანა და ლოჯისტიკა', d:'სწრაფი მიწოდება თბილისსა და რეგიონებში.'},
              {t:'სამონტაჟო სამუშაოები', d:'კვალიფიციური ხელოსნები.'},
              {t:'ტექნიკურ საკითხებზე კონსულტაცია', d:'სწორი შერჩევა, მოცულობის დათვლა, ბიუჯეტი.'},
              {t:'კორპორატიული პროექტები', d:'B2B შეთავაზებები დეველოპერებსა და კომპანიებს.'},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10">
                <p className="font-semibold">{s.t}</p>
                <p className="text-[#cfe9df] text-sm mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">რატომ სამშენებლო ზონა?</h2>
        <ul className="grid md:grid-cols-2 gap-4 mt-6 text-[#cfe9df]">
          <li className="bg-white/5 p-4 rounded-2xl">ფასისა და ხარისხის ყველაზე ოპტიმალური ბალანსი</li>
          <li className="bg-white/5 p-4 rounded-2xl">სერტიფიცირებული მომწოდებლები და ბრენდები</li>
          <li className="bg-white/5 p-4 rounded-2xl">შოურუმი ადგილზე კონსულტაციით</li>
          <li className="bg-white/5 p-4 rounded-2xl">ერთი სივრცე – მასალები + მიწოდება + ხელოსნები</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0b2e24]">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">კონტაქტი</h2>
            <p className="text-[#cfe9df] mt-2">
              მოგვწერეთ Facebook-ზე ან დაგვიკავშირდით ნომერზე: 592 773-772.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/BuildingZoneGeorgia" target="_blank" className="px-5 py-3 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold">
                Facebook მესიჯი
              </a>
              <a href="mailto:info@buildingzone.ge" className="px-5 py-3 rounded-xl bg-white/10">
                წერილი
              </a>
            </div>
          </div>

          <form className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 grid gap-4">
            <input placeholder="სახელი" className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none" />
            <input placeholder="ტელეფონი ან ელფოსტა" className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none" />
            <textarea placeholder="შეკვეთის აღწერა / რა გჭირდებათ" rows={4} className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none" />
            <button type="button" className="px-5 py-3 rounded-xl bg-[#e2b714] text-[#0f3a2f] font-semibold">
              გაგზავნა
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-[#9fd3be] flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} სამშენებლო ზონა • ყველა უფლება დაცულია</p>
          <p>ლოკაცია: თბილისი, ხოშარაულის ქ. 29 • @BuildingZoneGeorgia • 📞 592 773 772</p>
        </div>
      </footer>
    </div>
  );
}
