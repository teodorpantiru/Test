"use client"; // only if you're using App Router and this is in /app

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBuildingUser } from "react-icons/fa6";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaToolbox, FaTools } from "react-icons/fa";

export default function NavBar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(section) {
    onNavigate(section);
    setMenuOpen(false);
  }

  return (
    <header className="bg-[#f1f5f9] text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logodark.png"
            width={60}
            height={60}
            alt="Cremil logo"
          />
          <span className="text-xl font-bold tracking-wide">
            Cremil T.S.P.I
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          <button
            onClick={() => handleClick("acasa")}
            className="hover:text-gray-500 transition"
          >
            Acasa
          </button>

          <button
            onClick={() => handleClick("despre")}
            className="hover:text-gray-500 transition"
          >
            Despre
          </button>

          <button
            onClick={() => handleClick("servicii")}
            className="hover:text-gray-500 transition"
          >
            Servicii
          </button>

          <button
            onClick={() => handleClick("preturi")}
            className="hover:text-gray-500 transition"
          >
            Preturi
          </button>

          <button
            onClick={() => handleClick("contact")}
            className="hover:text-gray-500 transition"
          >
            Contact
          </button>
        </nav>

        {/* Contact Icons - Desktop */}
        <div className="hidden md:flex gap-5 text-gray-800 text-lg">
          <FaBuildingUser />
          <FaTools />
          <FaToolbox />
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="h-6 w-6 text-gray-800"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#f1f5f9] flex flex-col gap-7 text-sm font-medium uppercase text-gray-800">
          <button
            onClick={() => handleClick("acasa")}
            className="hover:text-gray-500 transition"
          >
            Acasa
          </button>

          <button
            onClick={() => handleClick("despre")}
            className="hover:text-gray-500 transition"
          >
            Despre
          </button>

          <button
            onClick={() => handleClick("servicii")}
            className="hover:text-gray-500 transition"
          >
            Servicii
          </button>

          <button
            onClick={() => handleClick("preturi")}
            className="hover:text-gray-500 transition"
          >
            Preturi
          </button>

          <button
            onClick={() => handleClick("contact")}
            className="hover:text-gray-500 transition"
          >
            Contact
          </button>

          <div className="flex gap-4 pt-2 justify-center ">
            <FaBuildingUser />
            <FaTools />
            <FaToolbox />
          </div>
        </div>
      )}
    </header>
  );
}
