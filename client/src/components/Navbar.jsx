import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full bg-[#0f0f0f] border-b border-gray-800 px-6 py-3 flex items-center justify-between h-18">
            <Link to="/" className="flex items-center gap-2 box-border">
                <img src="././Assets/face-removebg-preview 1.png" alt="logo image" className="w-auto h-15" />
                <h2 className="text-white font-black text-3xl">Kom<span className="text-orange-500">pile</span></h2>
            </Link>


            <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                <Link to="/" className="hover:text-white transition">Question Tracker</Link>
                <Link to="/company" className="hover:text-white transition">Company Wise Kit</Link>
                <Link to="/events" className="hover:text-white transition">Event Tracker</Link>
                <Link to="/profile" className="hover:text-white transition">Profile Tracker</Link>
                <button className="bg-[#ffffff]  rounded-full hover:bg-[#2a2a2a] transition">
                    <img src="././Assets/Dark mode toggle.svg" alt="dark mode toggle button" className="h-10" />
                </button>
                <img src="././Assets/user-img.png" alt="user" className="w-auto h-11 rounded-full object-cover"/>
            </div>
        </nav>
    );
}

export default Navbar;