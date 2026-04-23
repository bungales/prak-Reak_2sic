import { MdDashboard, MdFoodBank, MdFoodBank as MdFoodDetail } from "react-icons/md";
import { FaListAlt, FaFileAlt, FaUser, FaChartBar, FaStar, FaUserCircle, FaPlus } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";


export default function Sidebar() {
        const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
          Sedap<b id="logo-dot" className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink to="/" id="menu-1" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" id="menu-2" className={menuClass}>
              <FaListAlt className="mr-4 text-xl" />
              <span>Orders </span>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/customers" id="menu-4" className={menuClass}>
              <FaUser className="mr-4 text-xl" />
              <span>Customer</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" id="menu-5" className={menuClass}>
              <FaChartBar className="mr-4 text-xl" />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" id="menu-6" className={menuClass}>
              <FaStar className="mr-4 text-xl" />
              <span>Reviews</span>
            </NavLink>
          </li>
          <li>
            <Link id="menu-7" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200">
              <MdFoodBank className="mr-4 text-xl" />
              <span>Foods</span>
            </Link>
          </li>
          <li>
            <Link id="menu-8" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200">
              <MdFoodDetail className="mr-4 text-xl" />
              <span>Food Detail</span>
            </Link>
          </li>
          <li>
            <Link id="menu-9" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200">
              <FaUserCircle className="mr-4 text-xl" />
              <span>Customer Detail</span>
            </Link>
          </li>
          <li>
            <Link id="menu-10" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200">
              <BiCalendar className="mr-4 text-xl" />
              <span>Calendar</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <FaPlus className="text-gray-600" />
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" src="/bunga.jpg" className="w-20 rounded-full object-cover" />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
