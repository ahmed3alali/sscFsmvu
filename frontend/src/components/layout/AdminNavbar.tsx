import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/Ssc.png";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
    localStorage.setItem("i18nextLng", lang);
    window.location.reload();
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-20 w-20" alt="Website Logo" />
        </a>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
          <a href="/" className="text-gray-900 dark:text-white hover:text-blue-500">
            {i18n.t("Home")}
          </a>
        
          
          <Link to="/announcements" className="text-gray-900 dark:text-white hover:text-blue-500">
            {i18n.t("Announcements")}
          </Link>

        
        </div>

        {/* Desktop Language Selector (Right) */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            🌍 {i18n.language === "en" ? "English (US)" : "العربية"}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className={`absolute ${i18n.language === "ar" ? "left-0" : "right-0"} mt-2 w-48 bg-white dark:bg-gray-700 border rounded-lg shadow-lg`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                  >
                    🇺🇸 English (US)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                  >
                    🇸🇦 العربية
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu + Language Button in ONE ROW */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden">
          
          {/* Mobile Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌍
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className={`absolute ${i18n.language === "ar" ? "left-0" : "right-0"} mt-2 w-32 bg-white dark:bg-gray-700 border rounded-lg shadow-lg`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <button
                      onClick={() => changeLanguage("en")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                    >
                      🇺🇸 EN
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage("ar")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                    >
                      🇸🇦 AR
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-700 shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <a href="/" className="text-gray-900 dark:text-white hover:text-blue-500">
              {i18n.t("Home")}
            </a>
           
           
            <Link to="/announcements" className="text-gray-900 dark:text-white hover:text-blue-500">
              {i18n.t("Announcements")}
            </Link>


            
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
