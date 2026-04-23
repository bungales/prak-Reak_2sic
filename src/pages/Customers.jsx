import { useState } from "react";
import { FaPlus, FaTimes, FaSearch, FaUsers, FaMedal } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

const loyaltyStyle = {
  Gold:   "bg-yellow-100 text-yellow-600",
  Silver: "bg-gray-100 text-gray-500",
  Bronze: "bg-orange-100 text-orange-500",
};

const avatarColor = [
  "bg-blue-400", "bg-green-400", "bg-purple-400", "bg-pink-400",
  "bg-indigo-400", "bg-teal-400", "bg-orange-400", "bg-red-400",
];

const emptyForm = { customerId: "", customerName: "", email: "", phone: "", loyalty: "Bronze" };

function StatCard({ icon, label, value, bg, iconColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
      <div className={`${bg} p-3 rounded-xl`}>
        <span className={`text-xl ${iconColor}`}>{icon}</span>
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </div>
  );
}

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [filterLoyalty, setFilterLoyalty] = useState("All");

  const filtered = customers.filter(c => {
    const matchSearch = c.customerName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchLoyalty = filterLoyalty === "All" || c.loyalty === filterLoyalty;
    return matchSearch && matchLoyalty;
  });

  function handleSubmit(e) {
    e.preventDefault();
    setCustomers([{ ...form }, ...customers]);
    setForm(emptyForm);
    setShowForm(false);
  }

  const gold   = customers.filter(c => c.loyalty === "Gold").length;
  const silver = customers.filter(c => c.loyalty === "Silver").length;
  const bronze = customers.filter(c => c.loyalty === "Bronze").length;

  return (
    <div>
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]}>
        <button onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
          <FaPlus /> Add Customer
        </button>
      </PageHeader>

      {/* Stat Cards */}
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard icon={<FaUsers />}  label="Total Customers" value={customers.length} bg="bg-blue-50"   iconColor="text-blue-500" />
        <StatCard icon={<FaMedal />}  label="Gold"            value={gold}             bg="bg-yellow-50" iconColor="text-yellow-500" />
        <StatCard icon={<FaMedal />}  label="Silver"          value={silver}           bg="bg-gray-100"  iconColor="text-gray-400" />
        <StatCard icon={<FaMedal />}  label="Bronze"          value={bronze}           bg="bg-orange-50" iconColor="text-orange-400" />
      </div>

      {/* Search & Filter */}
      <div className="px-5 mb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-hijau bg-white text-sm" />
        </div>
        <div className="flex gap-2">
          {["All", "Gold", "Silver", "Bronze"].map(l => (
            <button key={l} onClick={() => setFilterLoyalty(l)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${filterLoyalty === l ? "bg-hijau text-white" : "bg-white text-gray-500 border border-gray-200 hover:border-hijau"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="px-5">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-4">#</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="text-center py-10 text-gray-300">No customers found</td></tr>
              )}
              {filtered.map((c, i) => (
                <tr key={c.customerId} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-5 py-3 text-gray-300">{i + 1}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${avatarColor[i % avatarColor.length]} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                        {c.customerName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">{c.customerName}</p>
                        <p className="text-xs text-gray-400">{c.customerId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-400">{c.email}</td>
                  <td className="px-5 py-3">{c.phone}</td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${loyaltyStyle[c.loyalty]}`}>
                      {c.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-3 text-xs text-gray-400 border-t border-gray-50">
            Showing {filtered.length} of {customers.length} customers
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-1">Add New Customer</h2>
            <p className="text-gray-400 text-sm mb-6">Fill in the details below</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Customer ID</label>
                <input required placeholder="e.g. CUS-031" value={form.customerId} onChange={e => setForm({ ...form, customerId: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Customer Name</label>
                <input required placeholder="Full name" value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Email</label>
                <input required type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone</label>
                <input required placeholder="08xxxxxxxxxx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Loyalty</label>
                <select value={form.loyalty} onChange={e => setForm({ ...form, loyalty: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm">
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
              </div>
              <button type="submit" className="bg-hijau text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-2">
                Save Customer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
