"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Тухай", "Үйлчилгээ", "Баг", "Холбоо барих"];
  const hrefs = ["#about", "#services", "#team", "#contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-sm">N</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">
            NOVA<span className="text-orange-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={hrefs[i]}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          Холбогдох
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={hrefs[i]}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium py-2"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
