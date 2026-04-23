import { useState } from "react";
import { FaPlus, FaTimes, FaSearch, FaShoppingBag, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

const statusStyle = {
  Completed: "bg-green-100 text-green-600",
  Pending:   "bg-yellow-100 text-yellow-600",
  Cancelled: "bg-red-100 text-red-600",
};

const emptyForm = { orderId: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" };

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

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered = orders.filter(o => {
    const matchSearch = o.customerName.toLowerCase().includes(search.toLowerCase()) || o.orderId.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  function handleSubmit(e) {
    e.preventDefault();
    setOrders([{ ...form, totalPrice: Number(form.totalPrice) }, ...orders]);
    setForm(emptyForm);
    setShowForm(false);
  }

  const total     = orders.length;
  const completed = orders.filter(o => o.status === "Completed").length;
  const pending   = orders.filter(o => o.status === "Pending").length;
  const cancelled = orders.filter(o => o.status === "Cancelled").length;

  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]}>
        <button onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
          <FaPlus /> Add Orders
        </button>
      </PageHeader>

      {/* Stat Cards */}
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard icon={<FaShoppingBag />}  label="Total Orders"     value={total}     bg="bg-blue-50"   iconColor="text-blue-500" />
        <StatCard icon={<FaCheckCircle />}  label="Completed"        value={completed} bg="bg-green-50"  iconColor="text-green-500" />
        <StatCard icon={<FaClock />}        label="Pending"          value={pending}   bg="bg-yellow-50" iconColor="text-yellow-500" />
        <StatCard icon={<FaTimesCircle />}  label="Cancelled"        value={cancelled} bg="bg-red-50"    iconColor="text-red-500" />
      </div>

      {/* Search & Filter */}
      <div className="px-5 mb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by order ID or customer..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-hijau bg-white text-sm" />
        </div>
        <div className="flex gap-2">
          {["All", "Completed", "Pending", "Cancelled"].map(s => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${filterStatus === s ? "bg-hijau text-white" : "bg-white text-gray-500 border border-gray-200 hover:border-hijau"}`}>
              {s}
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
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Total Price</th>
                <th className="px-5 py-4">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center py-10 text-gray-300">No orders found</td></tr>
              )}
              {filtered.map((o, i) => (
                <tr key={o.orderId} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-5 py-3 text-gray-300">{i + 1}</td>
                  <td className="px-5 py-3 font-semibold text-gray-700">{o.orderId}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-hijau text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {o.customerName.charAt(0)}
                      </div>
                      {o.customerName}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-semibold">Rp {o.totalPrice.toLocaleString("id-ID")}</td>
                  <td className="px-5 py-3 text-gray-400">{o.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-3 text-xs text-gray-400 border-t border-gray-50">
            Showing {filtered.length} of {orders.length} orders
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
            <h2 className="text-xl font-bold mb-1">Add New Order</h2>
            <p className="text-gray-400 text-sm mb-6">Fill in the details below</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Order ID</label>
                <input required placeholder="e.g. ORD-031" value={form.orderId} onChange={e => setForm({ ...form, orderId: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Customer Name</label>
                <input required placeholder="Customer name" value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Status</label>
                <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm">
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Total Price (Rp)</label>
                <input required type="number" placeholder="e.g. 150000" value={form.totalPrice} onChange={e => setForm({ ...form, totalPrice: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Order Date</label>
                <input required type="date" value={form.orderDate} onChange={e => setForm({ ...form, orderDate: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-hijau text-sm" />
              </div>
              <button type="submit" className="bg-hijau text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-2">
                Save Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
