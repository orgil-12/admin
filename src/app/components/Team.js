import USERSDATA from "../usersData.json";

const ROLES = [
  "Ахлах Дизайнер",
  "Хөгжүүлэгч",
  "Маркетинг Менежер",
  "UX Дизайнер",
  "Контент Стратегич",
  "Брэнд Зөвлөх",
  "Бүтээлч Захирал",
  "Хөгжүүлэгч",
  "Проект Менежер",
  "Дата Аналист",
];

const AVATAR_COLORS = [
  "from-blue-500 to-blue-700",
  "from-orange-400 to-orange-600",
  "from-purple-500 to-purple-700",
  "from-green-500 to-green-700",
  "from-pink-500 to-pink-700",
  "from-cyan-500 to-cyan-700",
  "from-red-500 to-red-700",
  "from-indigo-500 to-indigo-700",
  "from-yellow-500 to-yellow-700",
  "from-teal-500 to-teal-700",
];

export default function Team() {
  const displayedUsers = USERSDATA.slice(0, 8);

  return (
    <section id="team" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-sm font-medium">Манай баг</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Амжилтын{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              цаана
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Төрөл бүрийн мэргэжлийн чиглэлийн туршлагатай мэргэжилтнүүдээс бүрдсэн баг.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedUsers.map((user, i) => (
            <div
              key={user.id}
              className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-blue-500/25 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-16 h-16">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-black text-xl">
                    {user.firstName[0]}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-gray-950 rounded-full" />
              </div>

              {/* Name */}
              <h3 className="font-bold text-white text-base">
                <span className="text-blue-400">{user.firstName}</span>{" "}
                <span className="text-orange-400">{user.lastName}</span>
              </h3>

              {/* Role */}
              <p className="text-white/50 text-xs mt-1 mb-4">
                {ROLES[i % ROLES.length]}
              </p>

              {/* Contact info */}
              <div className="space-y-2 text-left border-t border-white/8 pt-4">
                <div className="flex items-center gap-2 text-white/45 hover:text-white/70 transition-colors">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-white/45 hover:text-white/70 transition-colors">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs">{user.phoneNumber}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
