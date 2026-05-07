import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const navLinkCls = ({ isActive }) =>
  isActive
    ? "text-orange-500 font-semibold drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition"
    : "text-gray-300 hover:text-white transition";

function Navbar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isLoggedIn = user && user.email;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] border-b border-gray-800 px-6 py-3 flex items-center justify-between h-18 z-50">
      <Link to="/" className="flex items-center gap-2 box-border">
        <img
          src="/assets/face-removebg-preview 1.png"
          alt="logo image"
          className="w-auto h-15"
        />
        <h2 className="text-white font-black text-3xl">
          Kom<span className="text-orange-500">pile</span>
        </h2>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm">
        <NavLink to="/" end className={navLinkCls}>
          Home
        </NavLink>
        <NavLink to="/company" className={navLinkCls}>
          Company Wise Kit
        </NavLink>
        <NavLink to="/events" className={navLinkCls}>
          Event Tracker
        </NavLink>
        <NavLink to="/profile" className={navLinkCls}>
          Profile Tracker
        </NavLink>
        {/* <button className="bg-[#ffffff] rounded-full hover:bg-[#2a2a2a] transition">
          <img
            src="/assets/Dark mode toggle.svg"
            alt="dark mode toggle button"
            className="h-10"
          />
        </button> */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-orange-500/30 cursor-pointer"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-orange-500/30"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
