export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-blue-500/30 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-32 left-16 w-12 h-12 border border-orange-400/40 rounded-xl -rotate-12 animate-float-delayed" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-400/60 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-400/60 rounded-full animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/70 text-sm font-medium">
            Дижитал шийдэлд мэргэшсэн
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          Дижитал{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent">
              Ирээдүйг
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M1 9C50 3 150 3 299 9"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          Бүтээнэ
        </h1>

        <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          Таны брэндийг дэлхийн тавцанд гаргах орчин үеийн дизайн,
          стратеги, технологийн нэгдсэн шийдэл.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Үйлчилгээ үзэх
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#about"
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            Бидний тухай
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { num: "200+", label: "Амжилттай төсөл" },
            { num: "50+", label: "Хамтрагч брэнд" },
            { num: "8+", label: "Жилийн туршлага" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs">Доош гүйлгэх</span>
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
