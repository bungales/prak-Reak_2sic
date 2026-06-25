/**
 * CRM Utility — aturan bisnis tier dan poin
 * Tier   : Bronze (0–499), Silver (500–999), Gold (1000–1999), Platinum (≥2000)
 * Diskon : Bronze 0%, Silver 5%, Gold 10%, Platinum 15%
 * Poin   : Rp 1.000 transaksi (Completed) = 1 poin
 */

export const TIER_CONFIG = [
  { tier: "Platinum", minPoints: 2000, discount: 15, color: "bg-purple-100 text-purple-700", badge: "💎" },
  { tier: "Gold",     minPoints: 1000, discount: 10, color: "bg-yellow-100 text-yellow-700", badge: "🥇" },
  { tier: "Silver",   minPoints: 500,  discount: 5,  color: "bg-gray-100 text-gray-600",     badge: "🥈" },
  { tier: "Bronze",   minPoints: 0,    discount: 0,  color: "bg-orange-100 text-orange-600", badge: "🥉" },
];

/** Hitung poin dari total transaksi (Rp) */
export function calcPoints(totalSpend) {
  return Math.floor(totalSpend / 1000);
}

/** Dapatkan config tier berdasarkan poin */
export function getTierConfig(points) {
  return TIER_CONFIG.find((t) => points >= t.minPoints) ?? TIER_CONFIG[TIER_CONFIG.length - 1];
}

/** Hitung berapa poin lagi untuk naik tier */
export function pointsToNextTier(points) {
  const sorted = [...TIER_CONFIG].sort((a, b) => a.minPoints - b.minPoints);
  const next = sorted.find((t) => t.minPoints > points);
  return next ? next.minPoints - points : 0;
}
