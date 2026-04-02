export default function TailwindCSS() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
            <div className="max-w-3xl mx-auto">
                {/* Header Hero */}
                <div className="text-center mb-8">
                    <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
                        <h1 className="relative border-4 border-white px-6 py-3 text-2xl font-bold bg-white/90 backdrop-blur rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                            🎨 Belajar Tailwind CSS 4 🚀
                        </h1>
                    </div>
                    <p className="text-purple-700 font-semibold text-sm mt-3">✨ Buat UI modern dengan mudah dan cepat ✨</p>
                </div>
                
                {/* Button Premium */}
                <div className="flex justify-center mb-8">
                    <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-2.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2 overflow-hidden">
                        <span className="relative z-10">🌟 Click Me</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
                
                <div className="space-y-4">
                    <Spacing />
                    <Typography />
                    <BorderRadius />
                    <BackgroundColors />
                    <FlexboxGrid />
                    <ShadowEffects />
                </div>
            </div>
        </div>
    )
}

function Spacing() {
    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50">
            <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
            <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white text-sm">📦</span>
                    </div>
                    <h2 className="text-lg font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Card Title
                    </h2>
                </div>
                <p className="text-gray-600 text-sm ml-10">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
            </div>
        </div>
    )
}

function Typography() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center shadow-inner">
                    <span className="text-white text-xl">📝</span>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white drop-shadow-lg">
                        Tailwind Typography
                    </h1>
                    <p className="text-blue-100 text-sm">Belajar Tailwind sangat menyenangkan dan cepat! ⚡</p>
                </div>
            </div>
        </div>
    )
}

function BorderRadius() {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-2xl">🎯</span>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-medium">
                ✨ Klik Saya ✨
            </button>
            <p className="text-xs text-gray-400 mt-2">Tombol dengan efek border-radius penuh</p>
        </div>
    )
}

function BackgroundColors() {
    return (
        <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-12 -mr-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white drop-shadow">Tailwind Colors</h3>
                        <p className="text-sm text-white/90">Belajar Tailwind itu seru dan fleksibel!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FlexboxGrid() {
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            <div className="flex justify-between items-center p-3.5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs">🚀</span>
                    </div>
                    <h1 className="text-white font-bold text-base tracking-wide">MyWebsite</h1>
                </div>
                <ul className="flex space-x-5">
                    <li><a href="#" className="text-gray-300 hover:text-white text-sm hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1">🏠 Home</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white text-sm hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1">👤 About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white text-sm hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1">📞 Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

function ShadowEffects() {
    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 text-center hover:-translate-y-1">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                    <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
                </div>
            </div>
            <h3 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                Hover me!
            </h3>
            <p className="text-gray-500 text-xs">Lihat efek bayangan dan animasi saat hover.</p>
        </div>
    )
}