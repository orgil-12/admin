export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Инноваци",
      desc: "Шинэ технологи, трендийг хянан дагаж тасралтгүй хөгжиж буй дижитал ертөнцөд таны брэндийг тэргүүлэгч байлгана.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Хамтын ажиллагаа",
      desc: "Таны байгууллагын хэрэгцээ, зорилгод нийцсэн хувийн арга барилаар ажиллаж хамтдаа амжилтад хүрнэ.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Чанарын баталгаа",
      desc: "Хүргэж буй бүх бүтээгдэхүүн, үйлчилгээний чанарыг дээд зэргээр хангахыг эрхэм зорилго болгодог.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-blue-400 text-sm font-medium">Бидний тухай</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Брэндийг{" "}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                амилуулдаг
              </span>{" "}
              агентлаг
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              2016 оноос хойш бид зуу гаруй байгууллагын дижитал дүр төрхийг
              бүрдүүлж, тэдний брэндийг зах зээлд тодотгоход туслаж ирсэн.
              Бидний баг нь дизайн, маркетинг, технологийн мэргэжлийн чиглэлээр
              нэгдсэн туршлагатай мэргэжилтнүүдээс бүрдэнэ.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Үйлчлүүлэгчдийн сэтгэл ханамж", value: "98%" },
                { label: "Дахин хамтарсан үйлчлүүлэгч", value: "85%" },
                { label: "Дундаж хэмнэлтийн хугацаа", value: "40%" },
                { label: "Хамтрагч компани", value: "50+" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-white/50 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
            >
              Бидэнтэй холбогдох
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right: value cards */}
          <div className="flex flex-col gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-orange-400/20 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
