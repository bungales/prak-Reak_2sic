const dotPositions = [
  "top-10 left-16 w-3 h-3", "top-24 right-24 w-2 h-2",
  "bottom-16 left-32 w-4 h-4", "bottom-10 right-40 w-2 h-2",
  "top-1/3 left-8 w-2 h-2", "top-2/3 right-12 w-3 h-3",
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 overflow-hidden rounded-2xl">

      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "#dcfce7" }} />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "#bbf7d0" }} />
      {dotPositions.map((pos, i) => (
        <div key={i} className={`absolute rounded-full opacity-50 pointer-events-none ${pos}`} style={{ background: "#4ade80" }} />
      ))}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">

        {/* Ilustrasi SVG */}
        <div className="flex-shrink-0 drop-shadow-2xl">
          <svg viewBox="0 0 400 300" className="w-80 h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="150" r="120" fill="#f0fdf4" />
            {/* Magnifier */}
            <circle cx="185" cy="135" r="55" fill="white" stroke="#e2e8f0" strokeWidth="3"/>
            <circle cx="185" cy="135" r="40" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            {/* Sad face */}
            <circle cx="172" cy="126" r="5" fill="#94a3b8"/>
            <circle cx="198" cy="126" r="5" fill="#94a3b8"/>
            <path d="M172 148 Q185 140 198 148" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Handle */}
            <line x1="228" y1="170" x2="268" y2="215" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round"/>
            {/* Question mark */}
            <circle cx="290" cy="80" r="28" fill="#dcfce7" stroke="#4ade80" strokeWidth="2"/>
            <text x="290" y="89" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#16a34a">?</text>
            {/* Decorations */}
            <circle cx="100" cy="90"  r="6" fill="#bbf7d0"/>
            <circle cx="308" cy="200" r="5" fill="#fde68a"/>
            <circle cx="95"  cy="215" r="8" fill="#fde68a"/>
            <circle cx="310" cy="95"  r="4" fill="#bbf7d0"/>
          </svg>
        </div>

        {/* Teks */}
        <div className="text-center md:text-left max-w-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-green-100 text-hijau">
            Error 404
          </span>
          <h1 className="text-9xl font-black mb-4 leading-none text-hijau">404</h1>
          <p className="text-gray-500 text-base mb-2 leading-relaxed font-semibold">Halaman tidak ditemukan</p>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </p>
          <a href="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg bg-hijau hover:bg-green-700">
            ← Back to Dashboard
          </a>
        </div>

      </div>
    </div>
  );
}
