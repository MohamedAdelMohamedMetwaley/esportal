import { useState } from "react";
import { Search, Menu, Twitter, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-600 text-white">
      {/* Top header with logo and branding */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and branding */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                Esportal
              </h1>
              <p className="text-sm text-gray-100">
                Your Gateway to Sports & Esports
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>

          {/* Social media icons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-orange-400" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-orange-400" />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className={`bg-teal-700 ${isOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
            {/* Navigation links */}
            <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Football
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Esports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Photos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  About
                </a>
              </li>
            </ul>

            {/* Search bar */}
            <div className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-64 px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
