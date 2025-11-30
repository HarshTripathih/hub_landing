"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700 backdrop-blur-lg bg-opacity-70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl dark:text-white">
          Aliens Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#contact" className="nav-link">Contact</Link>

          {/* 🌙 Dark Mode Button (DESKTOP) */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl dark:text-white hover:scale-110 transition"
          >
            🌙
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-3 space-y-4 bg-white dark:bg-black">

          <Link href="#about" className="block nav-link">About</Link>
          <Link href="#services" className="block nav-link">Services</Link>
          <Link href="#projects" className="block nav-link">Projects</Link>
          <Link href="#contact" className="block nav-link">Contact</Link>

          {/* 🌙 Dark Mode Button (MOBILE) */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl mt-2 dark:text-white"
          >
            🌙 Toggle Dark Mode
          </button>

        </div>
      )}
    </nav>
  );
}
