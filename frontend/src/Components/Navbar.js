import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../asset/logo5.png";
import { useNavigate } from "react-router-dom";

function Navbar({ section1, introduction, images, social_media, faqRef }) {
  const navigate = useNavigate();
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-900 px-4 py-3 border-b-2 border-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-14 w-14 object-cover" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium text-sm">
          <li
            onClick={() => scrollToSection(section1)}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Home
          </li>

          <li
            onClick={() => navigate("/events")}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Events
          </li>

          <li
            onClick={() => scrollToSection(images)}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Images
          </li>

          <li
            onClick={() => navigate("/books")}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Books
          </li>

          <li
            onClick={() => navigate("/courses")}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Courses
          </li>

          <li
            onClick={() => navigate("/blog")}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Blog
          </li>

          <li
            onClick={() => navigate("/unshakable-team")}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Unshakable Team
          </li>
          <li
            onClick={() => scrollToSection(introduction)}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            About Us
          </li>
          <li
            onClick={() => scrollToSection(social_media)}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            Connect
          </li>

          <li
            onClick={() => scrollToSection(faqRef)}
            className="cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-600 hover:scale-110 transition-all duration-300"
          >
            FAQ's
          </li>
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
        <ul className="md:hidden fixed top-20 left-0 w-full bg-gray-800 z-50 rounded-b-xl py-4 text-white font-medium shadow-lg">
          <li
            onClick={() => {
              scrollToSection(section1);
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Home
          </li>

          <li
            onClick={() => {
              scrollToSection(introduction);
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            About Us
          </li>

          <li
            onClick={() => {
              scrollToSection(images);
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Images
          </li>

          <li
            onClick={() => {
              scrollToSection(social_media);
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Connect
          </li>
          
          <li
            onClick={() => {
              navigate("/events");
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Events
          </li>

          <li
            onClick={() => {
              navigate("/books");
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Books
          </li>

          <li
            onClick={() => {
              navigate("/courses");
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Courses
          </li>

          <li
            onClick={() => {
              navigate("/blog");
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Blog
          </li>

          <li
            onClick={() => {
              navigate("/unshakable-team");
              setOpen(false);
            }}
            className="px-6 py-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition"
          >
            Unshakable Team
          </li>

          <li
            onClick={() => {
              scrollToSection(faqRef);
              setOpen(false);
            }}
            className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition"
          >
            FAQ's
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
