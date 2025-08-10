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

      {/* CATEGORIES */}
      <section id="categories" className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">პროდუქტის კატეგორიები</h2>
        <p className="text-[#cfe9df] mt-2">შოურუმში ხელმისაწვდომი და ონლაინ შეკვეთით მისაღები.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            {title: 'Hydrosol მასალები', img: ''},
            {title: 'თბოიზოლაცია', img: ''},
            {title: 'რემონტის მასალები', img: ''},
            {title: 'სინთეთიკური მემბრანები', img: ''},
            {title: 'ღობეები', img: ''},
            {title: 'ფასადის პანელები', img: ''},
          ].map((c,i)=> (
            <div key={i} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:translate-y-[-2px] transition">
              <div className="h-40 bg-[#12382d] grid place-items-center text-[#9fd3be]">სურათი</div>
              <div className="p-4">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-[#b8e0d0] mt-1">საწყობში • მიწოდება სრულიან საქართველოს მასშტაბით</p>
                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="px-3 py-2 text-sm rounded-lg bg-[#e2b714] text-[#0f3a2f] font-semibold">ვკითხო ფასი</a>
                  <a href="https://www.facebook.com/BuildingZoneGeorgia" target="_blank" className="px-3 py-2 text-sm rounded-lg bg.white/10">მოგვწერე</a>
                </div>
              </div>
            </div>
          ))}
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
        
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-[#9fd3be] flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} სამშენებლო ზონა • ყველა უფლება დაცულია</p>
          <p>ლოკაცია: თბილისი, ხოშარაულის ქ. 29 • @BuildingZoneGeorgia</p> • 📞 592 773 772 
        </div>
      </footer>
    </div>
  );
}
