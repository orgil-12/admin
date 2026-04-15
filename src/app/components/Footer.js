export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xs">N</span>
            </div>
            <span className="text-white font-black text-lg tracking-tight">
              NOVA<span className="text-orange-400">.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {[
              ["Тухай", "#about"],
              ["Үйлчилгээ", "#services"],
              ["Баг", "#team"],
              ["Холбоо барих", "#contact"],
            ].map(([label, href], i) => (
              <a
                key={i}
                href={href}
                className="text-white/40 hover:text-white/80 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © {year} NOVA. Бүх эрх хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
