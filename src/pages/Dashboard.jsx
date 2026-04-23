import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

// ============================================================
// IMPROVISASI 2: MiniChart - Bar chart kecil di dalam card
// Menampilkan visualisasi data 7 hari terakhir per card
// ============================================================
function MiniChart({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end space-x-0.5 h-8 mt-2">
      {data.map((val, i) => (
        <div
          key={i}
          className={`w-2 rounded-sm ${color}`}
          style={{ height: `${(val / max) * 100}%`, opacity: i === data.length - 1 ? 1 : 0.4 }}
        />
      ))}
    </div>
  );
}

// ============================================================
// IMPROVISASI 1: StatCard - Komponen Reusable
// Di modul, 4 card ditulis manual satu-satu.
// Di sini dibuat jadi 1 komponen yang menerima props,
// lalu di-render pakai .map() → lebih clean dan scalable.
// ============================================================
function StatCard({ id, icon, count, label, iconBg, chartData, chartColor }) {
  return (
    <div id={id} className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
      <div className={`${iconBg} rounded-full p-4`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-gray-400">{label}</span>
        {/* IMPROVISASI 2: Mini Chart Bar di dalam card */}
        <MiniChart data={chartData} color={chartColor} />
      </div>
    </div>
  );
}

export default function Dashboard() {

  // === DARI MODUL: Data 4 stat card (Total Orders, Delivered, Canceled, Revenue) ===
  const stats = [
    {
      id: "dashboard-orders",
      icon: <FaShoppingCart className="text-3xl text-white" />,
      count: 75,
      label: "Total Orders",
      iconBg: "bg-hijau",
      chartData: [30, 45, 28, 60, 50, 70, 75],
      chartColor: "bg-hijau",
    },
    {
      id: "dashboard-delivered",
      icon: <FaTruck className="text-3xl text-white" />,
      count: 357,
      label: "Total Delivered",
      iconBg: "bg-biru",
      chartData: [200, 280, 310, 290, 320, 340, 357],
      chartColor: "bg-biru",
    },
    {
      id: "dashboard-canceled",
      icon: <FaBan className="text-3xl text-white" />,
      count: 65,
      label: "Total Canceled",
      iconBg: "bg-merah",
      chartData: [80, 70, 65, 72, 68, 60, 65],
      chartColor: "bg-merah",
    },
    {
      id: "dashboard-revenue",
      icon: <FaDollarSign className="text-3xl text-white" />,
      count: "$128",
      label: "Total Revenue",
      iconBg: "bg-kuning",
      chartData: [80, 95, 100, 110, 105, 120, 128],
      chartColor: "bg-kuning",
    },
  ];

  return (
    <div id="dashboard-container">
      <PageHeader />

      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      {/* ============================================================
          IMPROVISASI 3: Tabel Recent Orders
          Komponen baru yang tidak ada di modul sama sekali.
          Menampilkan daftar pesanan terbaru dengan kolom:
          Order ID, Customer, Menu, Total, Status (dengan badge warna)
          ============================================================ */}
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="bg-hijau text-white px-3 py-1 rounded-lg text-sm">View All</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-garis">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Menu</th>
                <th className="pb-3">Total</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#ORD-001", customer: "Alice", menu: "Nasi Goreng", total: "$12.00", status: "Delivered", statusColor: "text-hijau bg-green-100" },
                { id: "#ORD-002", customer: "Bob", menu: "Mie Ayam", total: "$8.50", status: "Processing", statusColor: "text-biru bg-blue-100" },
                { id: "#ORD-003", customer: "Charlie", menu: "Soto Ayam", total: "$10.00", status: "Canceled", statusColor: "text-merah bg-red-100" },
                { id: "#ORD-004", customer: "Diana", menu: "Rendang", total: "$15.00", status: "Delivered", statusColor: "text-hijau bg-green-100" },
                { id: "#ORD-005", customer: "Eve", menu: "Gado-Gado", total: "$9.00", status: "Processing", statusColor: "text-biru bg-blue-100" },
              ].map((order) => (
                <tr key={order.id} className="border-b border-garis hover:bg-gray-50">
                  <td className="py-3 font-medium">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.menu}</td>
                  <td className="py-3 font-semibold">{order.total}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
