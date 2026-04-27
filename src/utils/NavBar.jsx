import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemLinks = [
    { title: "Home", href: "/" },
    { title: "Search", href: "/search" },
    { title: "Upload", href: "/upload" },
    { title: "About", href: "/about" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-300 px-4 md:px-6 py-4 overflow-x-hidden">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-base md:text-lg whitespace-nowrap">
          <FontAwesomeIcon icon={faCodeBranch} />
          RepoSpec
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-600">
          {itemLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 border-t border-gray-200 pt-4 flex flex-col gap-3">

          {itemLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default NavBar;