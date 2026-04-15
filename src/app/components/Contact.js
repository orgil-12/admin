"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "И-мэйл",
      value: "hello@nova.mn",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Утас",
      value: "+976 9999-0000",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Хаяг",
      value: "Улаанбаатар, Монгол",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            <span className="text-orange-400 text-sm font-medium">Холбоо барих</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Хамтран{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              ажиллацгаая
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Таны төсөл, санааг биелүүлэхэд тусламж хэрэгтэй бол бидэнтэй холбогдоорой.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Холбоо барих мэдээлэл</h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1">{item.label}</div>
                      <div className="text-white font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs mb-4">Нийгмийн сүлжээ</p>
                <div className="flex gap-3">
                  {["FB", "IG", "LI", "TW"].map((s, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-xl flex items-center justify-center text-white/50 hover:text-white text-xs font-bold cursor-pointer transition-all"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg mb-2">Үнэгүй зөвлөгөө авах</h3>
              <p className="text-white/70 text-sm mb-4">
                30 минутын үнэгүй зөвлөгөөний уулзалт захиалж, таны брэндийн чиглэлийг тодорхойлцооно.
              </p>
              <button className="w-full bg-white text-blue-700 font-bold text-sm py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Захиалах
              </button>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/3 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/50 text-xs mb-2 block">Нэр *</label>
                  <input
                    required
                    type="text"
                    placeholder="Таны нэр"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs mb-2 block">И-мэйл *</label>
                  <input
                    required
                    type="email"
                    placeholder="tainy@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/50 text-xs mb-2 block">Сэдэв</label>
                <input
                  type="text"
                  placeholder="Хамтран ажиллах хүсэлт..."
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs mb-2 block">Мэдэгдэл *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Таны төсөл, хүсэлтийн тухай дэлгэрэнгүй бичнэ үү..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Амжилттай илгээгдлээ!
                  </>
                ) : (
                  <>
                    Мэдэгдэл илгээх
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
