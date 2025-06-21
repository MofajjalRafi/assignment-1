"use client";

import { Menu, ShoppingCart, X } from "lucide-react";

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[#323232] text-white px-4 py-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile hamburger menu */}
          <button
            onClick={toggleMobileMenu}
            className="w-6 h-6 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            SP<span className="text-[#ffa800]">O</span>RTS
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="hover:text-[#ffa800] border-b-2 border-[#ffa800] pb-1"
            >
              Products
            </a>
            <a href="#" className="hover:text-[#ffa800]">
              Track Order
            </a>
            <a href="#" className="hover:text-[#ffa800]">
              Contact
            </a>
            <a href="#" className="hover:text-[#ffa800]">
              About Us
            </a>
          </nav>

          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`
        fixed top-[72px] left-0 w-full bg-[#323232] text-white z-40 md:hidden transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <nav className="flex flex-col">
          <a
            href="#"
            className="px-4 py-4 border-b border-gray-600 hover:bg-[#2c2c2c] active:bg-[#ffa800] active:text-black"
            onClick={toggleMobileMenu}
          >
            Products
          </a>
          <a
            href="#"
            className="px-4 py-4 border-b border-gray-600 hover:bg-[#2c2c2c] active:bg-[#ffa800] active:text-black"
            onClick={toggleMobileMenu}
          >
            Track Order
          </a>
          <a
            href="#"
            className="px-4 py-4 border-b border-gray-600 hover:bg-[#2c2c2c] active:bg-[#ffa800] active:text-black"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-4 hover:bg-[#2c2c2c] active:bg-[#ffa800] active:text-black"
            onClick={toggleMobileMenu}
          >
            About Us
          </a>
        </nav>
      </div>
    </>
  );
}
