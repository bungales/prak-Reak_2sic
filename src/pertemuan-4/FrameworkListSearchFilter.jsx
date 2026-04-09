import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkSearchFilter() {
  /** Deklrasai state **/
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");
	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};


  /** Deklrasai Logic Search & Filter **/
  const _searchTerm =dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

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
          <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={handleChange}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {filteredFrameworks.map((item, index) => (
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
                  <span className="font-semibold">👨‍💻 Developer:</span>{" "}
                  {item.details.developer}
                  <span className="mx-1">•</span>
                  <span className="font-semibold">📅</span>{" "}
                  {item.details.releaseYear}
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
