import { useState, useMemo } from "react";
import { FaSearch, FaUsers, FaStar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";
import ordersData from "../data/orders.json";
import { calcPoints, getTierConfig, pointsToNextTier, TIER_CONFIG } from "../lib/crmUtils";

// ── Hitung akumulasi poin tiap customer dari orders (Completed saja) ──
function buildMemberData() {
  const spendMap = {};
  ordersData.forEach((o) => {
    if (o.status === "Completed") {
      spendMap[o.customerName] = (spendMap[o.customerName] ?? 0) + o.totalPrice;
    }
  });

  return customersData.map((c) => {
    const totalSpend = spendMap[c.customerName] ?? 0;
    const points = calcPoints(totalSpend) + (c.points ?? 0);
    const tierCfg = getTierConfig(points);
    const toNext = pointsToNextTier(points);
    return { ...c, points, totalSpend, tier: tierCfg.tier, discount: tierCfg.discount, tierCfg, toNext };
  });
}

const avatarColors = [
  "bg-blue-400","bg-green-400","bg-purple-400","bg-pink-400",
  "bg-indigo-400","bg-teal-400","bg-orange-400","bg-red-400",
];

// ── Stat summary card ──
function SummaryCard({ label, value, sub, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm font-semibold ${color}`}>{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

export default function CRM() {
  const members = useMemo(() => buildMemberData(), []);
  const [search, setSearch] = useState("");
  const [filterTier, setFilterTier] = useState("All");

  const filtered = members.filter((m) => {
    const matchSearch =
      m.customerName.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchTier = filterTier === "All" || m.tier === filterTier;
    return matchSearch && matchTier;
  });

  // Summary per tier
  const summary = TIER_CONFIG.map((t) => ({
    ...t,
    count: members.filter((m) => m.tier === t.tier).length,
  }));

  const totalPoints = members.reduce((s, m) => s + m.points, 0);

  return (
    <div>
      <PageHeader title="CRM Members" breadcrumb={["Home", "CRM"]}>
        <div className="flex items-center gap-2 bg-green-50 border border-hijau px-4 py-2 rounded-lg">
          <FaStar className="text-hijau" />
          <span className="text-sm font-semibold text-hijau">{totalPoints.toLocaleString()} Total Poin</span>
        </div>
      </PageHeader>

      {/* Summary Tier Cards */}
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        {summary.map((s) => (
          <SummaryCard
            key={s.tier}
            label={`${s.badge} ${s.tier}`}
            value={s.count}
            sub={`Diskon ${s.discount}%`}
            color={s.color.split(" ")[1]}
          />
        ))}
      </div>

      {/* Search & Filter */}
      <div className="px-5 mb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari member..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-hijau bg-white text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", ...TIER_CONFIG.map((t) => t.tier)].map((t) => (
            <button
              key={t}
              onClick={() => setFilterTier(t)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                filterTier === t
                  ? "bg-hijau text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-hijau"
              }`}
            >
              {t}
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
                <th className="px-5 py-4">Member</th>
                <th className="px-5 py-4">Tier</th>
                <th className="px-5 py-4">Poin</th>
                <th className="px-5 py-4">Total Transaksi</th>
                <th className="px-5 py-4">Diskon</th>
                <th className="px-5 py-4">Naik Tier</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-300">
                    Tidak ada member ditemukan
                  </td>
                </tr>
              )}
              {filtered.map((m, i) => (
                <tr key={m.customerId} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-5 py-3 text-gray-300">{i + 1}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}
                      >
                        {m.customerName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">{m.customerName}</p>
                        <p className="text-xs text-gray-400">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${m.tierCfg.color}`}>
                      {m.tierCfg.badge} {m.tier}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-bold text-gray-700">{m.points.toLocaleString()}</td>
                  <td className="px-5 py-3 text-gray-500">
                    Rp {m.totalSpend.toLocaleString("id-ID")}
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-hijau font-semibold">{m.discount}%</span>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-400">
                    {m.toNext > 0 ? (
                      <span>{m.toNext.toLocaleString()} poin lagi</span>
                    ) : (
                      <span className="text-purple-600 font-semibold">✨ Tertinggi</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-3 text-xs text-gray-400 border-t border-gray-50">
            Menampilkan {filtered.length} dari {members.length} member
          </div>
        </div>
      </div>
    </div>
  );
}
