import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/Ssc.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const closeMobMenu = () =>{


setIsMobileMenuOpen(false);

  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsDropdownOpen(false);
    window.location.reload();
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between ">
    {/* Logo */}
    <a href="/">
      <img src={logo} className="h-16 w-16" alt="Website Logo" />
    </a>
  
    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6  ">
      <HashLink to="/#home" className="nav-link">{i18n.t("Home")}</HashLink>
      <HashLink to="/#team" className="nav-link  ">{i18n.t("Team")}</HashLink>
     
      <Link to="/announcements" className="nav-link">{i18n.t("Announcements")}</Link>
      <HashLink to="/#rules" className="nav-link">{i18n.t("Rules")}</HashLink>
      <HashLink to="/#aboutUs" className="nav-link">{i18n.t("AboutUs")}</HashLink>
    </div>

  
    {/* Language Selector & Mobile Menu Button */}
    <div className="flex items-center space-x-4">
      {/* Language Selector (Visible on all screens) */}
      <div className="relative  md:block" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="p-2 text-gray-900 dark:text-white"
        >
          🌍
        </button>
        {isDropdownOpen && (
          <div
            className={`absolute ${i18n.language === "ar" ? "left-0" : "right-0"} mt-2 w-32 bg-white dark:bg-gray-700 border rounded-lg shadow-lg animate-fadeIn`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200   ">
              
              <div className="lang-btns flex-col justify-center ml-2 rtl:mr-2">
              <li>
                <button onClick={() => changeLanguage("en")} className="dropdown-item">
                   English
                </button>
              </li>
              <li>
                <button onClick={() => changeLanguage("ar")} className="dropdown-item ">
                   العربية
                </button>
              </li>

              </div>
              
            </ul>
          </div>
        )}
      </div>
  
      {/* Mobile Menu Button (Only on Small Screens) */}
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden text-gray-900 dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  
    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div ref={mobileMenuRef} className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-gray-700 shadow-lg animate-fadeIn">
        <div className="flex flex-col space-y-2 p-4 text-center">
          <HashLink to="/#home" className="nav-link" onClick={closeMobMenu}>{i18n.t("Home")}</HashLink>
          <HashLink to="/#team" className="nav-link"onClick={closeMobMenu}>{i18n.t("Team")}</HashLink>
          <HashLink to="/#aboutUs" className="nav-link"onClick={closeMobMenu}>{i18n.t("AboutUs")}</HashLink>
          <Link to="/announcements" className="nav-link"onClick={closeMobMenu}>{i18n.t("Announcements")}</Link>
          <HashLink to="/#rules" className="nav-link"onClick={closeMobMenu}>{i18n.t("Rules")}</HashLink>
        </div>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
