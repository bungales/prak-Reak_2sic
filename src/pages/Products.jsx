import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import PageHeader from "../components/PageHeader"

export default function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=30")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err))
  }, [])

  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader title="Products" breadcrumb={["Dashboard", "Product List"]} />

      <div className="px-5 mb-4">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Cari produk..."
          className="w-full max-w-sm border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm"
        />
      </div>

      <div className="px-5">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-white bg-hijau">
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Category</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={3} className="text-center py-10 text-gray-300">No products found</td></tr>
              )}
              {filtered.map((item, i) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                  <td className="px-6 py-4">
                    <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
