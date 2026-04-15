export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Брэнд Дизайн",
      desc: "Лого, өнгөний палитр, типографиас эхлээд бүрэн брэндийн identity хүртэл орчин үеийн, цогц шийдэл.",
      tags: ["Лого", "Identity", "Гарын авлага"],
      gradient: "from-blue-500/20 to-blue-600/10",
      border: "border-blue-500/20",
      glow: "group-hover:shadow-blue-500/20",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
        </svg>
      ),
      title: "Вэб Хөгжүүлэлт",
      desc: "React, Next.js дээр суурилсан хурдан, найдвартай, мобайл-ойлгомжтой вэбсайт, веб апп хөгжүүлэлт.",
      tags: ["Next.js", "React", "UI/UX"],
      gradient: "from-orange-500/20 to-orange-600/10",
      border: "border-orange-500/20",
      glow: "group-hover:shadow-orange-500/20",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Дижитал Маркетинг",
      desc: "SEO, нийгмийн сүлжээний удирдлага, агуулга маркетинг, PPC сурталчилгаагаар таны брэндийн мэдрэмжийг нэмэгдүүл.",
      tags: ["SEO", "SMM", "Контент"],
      gradient: "from-purple-500/20 to-purple-600/10",
      border: "border-purple-500/20",
      glow: "group-hover:shadow-purple-500/20",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Мобайл Апп",
      desc: "iOS болон Android платформд зориулсан хэрэглэгчдэд ойлгомжтой, гоё интерфэйстэй мобайл аппликейшн.",
      tags: ["iOS", "Android", "React Native"],
      gradient: "from-green-500/20 to-green-600/10",
      border: "border-green-500/20",
      glow: "group-hover:shadow-green-500/20",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Видео Контент",
      desc: "Байгууллагын танилцуулга, сурталчилгааны видео, motion graphics болон анимэйшн контент бүтээх.",
      tags: ["Motion", "Анимэйшн", "Видео"],
      gradient: "from-pink-500/20 to-pink-600/10",
      border: "border-pink-500/20",
      glow: "group-hover:shadow-pink-500/20",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Стратегийн Зөвлөгөө",
      desc: "Брэндийн байрлал, өрсөлдөөний шинжилгээ, зах зээлийн стратеги боловсруулалтын цогц зөвлөмж.",
      tags: ["Стратеги", "Шинжилгээ", "Зөвлөгөө"],
      gradient: "from-cyan-500/20 to-cyan-600/10",
      border: "border-cyan-500/20",
      glow: "group-hover:shadow-cyan-500/20",
    },
  ];

  return (
    <section id="services" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            <span className="text-orange-400 text-sm font-medium">Үйлчилгээнүүд</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Бидний{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              үйлчилгээ
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Таны брэндийг бүтээх, хөгжүүлэхэд шаардлагатай бүх шийдлийг нэг дор.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${s.gradient} border ${s.border} rounded-2xl p-7 hover:shadow-2xl ${s.glow} transition-all duration-400 hover:-translate-y-1 cursor-default`}
            >
              <div className="text-white/70 group-hover:text-white mb-5 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs bg-white/5 border border-white/10 text-white/60 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
