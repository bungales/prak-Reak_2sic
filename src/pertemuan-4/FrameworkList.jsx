import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
                    📚 Popular Frameworks
                </h1>
                <p className="text-center text-gray-500 mb-10">
                    Discover amazing frontend & backend frameworks
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frameworkData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="p-6">
                                {/* Nama Framework dengan ikon kecil */}
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                    <span className="text-blue-500 text-3xl">⚡</span>
                                    {item.name}
                                </h2>

                                {/* Deskripsi */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Developer & Tahun Rilis */}
                                <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                                    <span className="font-semibold">👨‍💻 Developer:</span> {item.details.developer}
                                    <span className="mx-1">•</span>
                                    <span className="font-semibold">📅</span> {item.details.releaseYear}
                                </div>

                                {/* Link Website */}
                                <a
                                    href={item.details.officialWebsite}
                                    className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 group-hover:gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Official Website
                                    <span className="text-lg">→</span>
                                </a>
                            </div>

                            {/* Decorative bottom border on hover */}
                            <div className="h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}