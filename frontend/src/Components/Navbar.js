import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../asset/logo5.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-900 px-4 py-3 border-b-2 border-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-14 w-14 object-cover" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium text-sm">
          {[
            "Home",
            "Events",
            "Images",
            "Books",
            "Courses",
            "Blog",
            "Unshakable Team",
            "About Us",
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300 active:scale-100"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Search className="text-white cursor-pointer" size={20} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden fixed top-20 left-0 w-full bg-gray-800 z-50 rounded-b-xl py-4 text-white font-medium animate-slide-down shadow-lg">
          {[
            "Home",
            "Events",
            "Images",
            "Books",
            "Courses",
            "Blog",
            "Unshakable Team",
            "About Us",
          ].map((item) => (
            <li
              key={item}
              className="px-6 py-3 border-b border-gray-700 last:border-none hover:bg-gray-700 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
