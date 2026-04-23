import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function Customers() {
  const [customerName] = useState("Customers");

  return (
    <div id="dashboard-container">
      <PageHeader title="Customers" breadcrumb="/ Customers" />
      <p>Ini Halaman {customerName}</p>
    </div>
  );
}