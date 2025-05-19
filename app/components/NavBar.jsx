"use client"; // only if you're using App Router and this is in /app

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBuildingUser } from "react-icons/fa6";
import {
  faLocationDot,
  faMessage,
  faPhoneVolume,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FaToolbox, FaTools } from "react-icons/fa";

export default function NavBar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(section) {
    onNavigate(section);
    setMenuOpen(false);
  }

  return (
    <header className="bg-neutral-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image src={logo} width={60} height={60} alt="Cremil logo" />
          <span className="text-xl font-bold tracking-wide">
            Cremil T.S.P.I
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          <button
            onClick={() => handleClick("acasa")}
            className="hover:text-gray-300 transition"
          >
            Acasa
          </button>

          <button
            onClick={() => handleClick("despre")}
            className="hover:text-gray-300 transition"
          >
            Despre
          </button>

          <button
            onClick={() => handleClick("servicii")}
            className="hover:text-gray-300 transition"
          >
            Servicii
          </button>

          <button
            onClick={() => handleClick("preturi")}
            className="hover:text-gray-300 transition"
          >
            Preturi
          </button>

          <button
            onClick={() => handleClick("contact")}
            className="hover:text-gray-300 transition"
          >
            Contact
          </button>

          {/* <a
            href="#acasa"
            className="hover:text-gray-300 transition scroll-mt-28"
            ref={detailsRef}
          >
            Acasă
          </a>
          <a
            href="#despre"
            className="hover:text-gray-300 transition scroll-mt-28"
            ref={detailsRef}
          >
            Despre
          </a>
          <a href="#servicii" className="hover:text-gray-300 transition">
            Servicii
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a> */}
        </nav>

        {/* Contact Icons - Desktop */}
        <div className="hidden md:flex gap-5 text-white text-lg">
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
            className="h-6 w-6 text-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-neutral-900 flex flex-col gap-4 text-sm font-medium uppercase text-white">
          <button
            onClick={() => handleClick("acasa")}
            className="hover:text-gray-300 transition"
          >
            Acasa
          </button>

          <button
            onClick={() => handleClick("despre")}
            className="hover:text-gray-300 transition"
          >
            Despre
          </button>

          <button
            onClick={() => handleClick("servicii")}
            className="hover:text-gray-300 transition"
          >
            Servicii
          </button>

          <button
            onClick={() => handleClick("preturi")}
            className="hover:text-gray-300 transition"
          >
            Preturi
          </button>

          <button
            onClick={() => handleClick("contact")}
            className="hover:text-gray-300 transition"
          >
            Contact
          </button>
          {/* <a
            href="#acasa"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition"
          >
            Acasă
          </a>
          <a
            href="#despre"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition"
          >
            Despre
          </a>
          <a
            href="#servicii"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition"
          >
            Servicii
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition"
          >
            Contact
          </a> */}

          <div className="flex gap-4 pt-2">
            <FaBuildingUser />
            <FaTools />
            <FaToolbox />
          </div>
        </div>
      )}
    </header>
  );
}
