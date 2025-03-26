import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/Ssc.png";
import { t } from "i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
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
    setIsDropdownOpen(false); // Close dropdown after selecting language
    localStorage.setItem('i18nextLng', lang); // Store selected language in localStorage
    window.location.reload(); // Refresh the page to apply language change
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-20 w-20" alt="Website Logo" />
        </a>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-900 dark:text-white hover:text-blue-500 ">
          <div className="homeBtn rtl:ml-4">
          {t("Home")}
          </div>
           
          </a>
          <a href="#team" className="text-gray-900 dark:text-white hover:text-blue-500">
            {t("Team")}
          </a>
          
          <a href="#aboutUs" className="text-gray-900 dark:text-white hover:text-blue-500">
          {t("AboutUs")}
          </a>

          <a href="/OurRules" className="text-gray-900 dark:text-white hover:text-blue-500">
            {t("Rules")}
          </a>
          <a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-500">
          {t("Contact")}
          </a>
        </div>

        {/* Language Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            🌍 {i18n.language === "en" ? "English (US)" : "العربية"}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border rounded-lg shadow-lg">
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

        {/* Mobile Button (Hamburger) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-900 dark:text-white"
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-700 shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <a href="/" className="text-gray-900 dark:text-white hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-gray-900 dark:text-white hover:text-blue-500">
              About Us
            </a>
            <a href="/services" className="text-gray-900 dark:text-white hover:text-blue-500">
              Services
            </a>
            <a href="/contact" className="text-gray-900 dark:text-white hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
