function ErrorIllustration({ errorCode }) {
  if (errorCode === 400) return (
    <svg viewBox="0 0 400 300" className="w-80 h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill="#f0fdf4" />
      <rect x="130" y="70" width="140" height="170" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
      <rect x="150" y="100" width="100" height="8" rx="4" fill="#cbd5e1"/>
      <rect x="150" y="120" width="80" height="8" rx="4" fill="#cbd5e1"/>
      <rect x="150" y="140" width="90" height="8" rx="4" fill="#cbd5e1"/>
      <circle cx="270" cy="90" r="28" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2"/>
      <text x="270" y="97" textAnchor="middle" fontSize="22" fill="#f59e0b">!</text>
      <circle cx="200" cy="185" r="22" fill="#fee2e2"/>
      <line x1="190" y1="175" x2="210" y2="195" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
      <line x1="210" y1="175" x2="190" y2="195" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="6" fill="#bbf7d0"/>
      <circle cx="310" cy="200" r="8" fill="#bbf7d0"/>
      <circle cx="90" cy="210" r="4" fill="#fde68a"/>
    </svg>
  );

  if (errorCode === 401) return (
    <svg viewBox="0 0 400 300" className="w-80 h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill="#f0fdf4" />
      <rect x="145" y="145" width="110" height="90" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
      <path d="M165 145 V115 Q165 85 200 85 Q235 85 235 115 V145" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <circle cx="200" cy="182" r="14" fill="#fde68a" stroke="#fbbf24" strokeWidth="2"/>
      <rect x="196" y="188" width="8" height="18" rx="4" fill="#fbbf24"/>
      <circle cx="110" cy="110" r="5" fill="#bbf7d0"/>
      <circle cx="300" cy="100" r="7" fill="#fde68a"/>
      <circle cx="305" cy="220" r="5" fill="#bbf7d0"/>
      <circle cx="95" cy="200" r="8" fill="#fde68a"/>
      <path d="M310 130 L330 138 L330 158 Q330 172 310 180 Q290 172 290 158 L290 138 Z" fill="#dcfce7" stroke="#4ade80" strokeWidth="2"/>
      <path d="M303 155 L308 161 L318 149" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (errorCode === 403) return (
    <svg viewBox="0 0 400 300" className="w-80 h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill="#f0fdf4" />
      <polygon points="200,60 240,75 265,110 265,190 240,225 200,240 160,225 135,190 135,110 160,75" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
      <circle cx="200" cy="150" r="50" fill="#fee2e2" stroke="#fca5a5" strokeWidth="2"/>
      <line x1="165" y1="150" x2="235" y2="150" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="200" cy="125" r="14" fill="#fca5a5"/>
      <path d="M175 165 Q175 148 200 148 Q225 148 225 165" fill="#fca5a5"/>
      <line x1="165" y1="110" x2="235" y2="190" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="100" cy="90" r="6" fill="#bbf7d0"/>
      <circle cx="308" cy="95" r="5" fill="#fde68a"/>
      <circle cx="95" cy="215" r="8" fill="#fde68a"/>
      <circle cx="310" cy="210" r="5" fill="#bbf7d0"/>
    </svg>
  );

  return (
    <svg viewBox="0 0 400 300" className="w-80 h-64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill="#f0fdf4" />
      <circle cx="200" cy="130" r="55" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
      <circle cx="185" cy="118" r="7" fill="#94a3b8"/>
      <circle cx="215" cy="118" r="7" fill="#94a3b8"/>
      <path d="M182 148 Q200 138 218 148" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M230 158 L245 175" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round"/>
      <line x1="245" y1="175" x2="290" y2="220" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="100" cy="90" r="6" fill="#bbf7d0"/>
      <circle cx="308" cy="95" r="5" fill="#fde68a"/>
    </svg>
  );
}

const colorMap = {
  400: { badge: "bg-yellow-100 text-yellow-600", btn: "bg-yellow-500 hover:bg-yellow-600", num: "text-yellow-500", blob1: "#fef9c3", blob2: "#fde68a", dot: "#fbbf24" },
  401: { badge: "bg-blue-100 text-blue-600",     btn: "bg-blue-500 hover:bg-blue-600",     num: "text-blue-500",   blob1: "#dbeafe", blob2: "#bfdbfe", dot: "#60a5fa" },
  403: { badge: "bg-red-100 text-red-600",       btn: "bg-red-500 hover:bg-red-600",       num: "text-red-500",    blob1: "#fee2e2", blob2: "#fecaca", dot: "#f87171" },
  404: { badge: "bg-green-100 text-hijau",       btn: "bg-hijau hover:bg-green-700",       num: "text-hijau",      blob1: "#dcfce7", blob2: "#bbf7d0", dot: "#4ade80" },
};

const dotPositions = [
  "top-10 left-16 w-3 h-3", "top-24 right-24 w-2 h-2",
  "bottom-16 left-32 w-4 h-4", "bottom-10 right-40 w-2 h-2",
  "top-1/3 left-8 w-2 h-2", "top-2/3 right-12 w-3 h-3",
];

export default function ErrorPage({ errorCode, errorDescription }) {
  const c = colorMap[errorCode] ?? colorMap[404];

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 overflow-hidden rounded-2xl">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: c.blob1 }} />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: c.blob2 }} />
      {dotPositions.map((pos, i) => (
        <div key={i} className={`absolute rounded-full opacity-60 pointer-events-none ${pos}`} style={{ background: c.dot }} />
      ))}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-shrink-0 drop-shadow-2xl">
          <ErrorIllustration errorCode={errorCode} />
        </div>
        <div className="text-center md:text-left max-w-sm">
        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${c.badge}`}>
          Error {errorCode}
        </span>
        <h1 className={`text-9xl font-black mb-4 leading-none ${c.num}`}>{errorCode}</h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">{errorDescription}</p>
        <a href="/" className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg ${c.btn}`}>
          ← Back to Dashboard
        </a>
        </div>
      </div>
    </div>
  );
}
