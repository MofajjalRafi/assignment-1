"use client";

import { useState } from "react";
import { X, Search, ChevronDown } from "lucide-react";

export function SearchBar({ isMobileMenuOpen }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="bg-[#323232] px-4 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className={`md:hidden ${isMobileMenuOpen ? "hidden" : ""}`}>
          <div className="flex items-center bg-white rounded-lg px-4 py-3">
            <div className="flex items-center gap-2 border-r border-gray-300 pr-3">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="text-gray-700 font-medium bg-transparent border-0 outline-none appearance-none pr-2"
              >
                <option value="all">All</option>
                <option value="shoes">Shoes</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </select>
              {/* <ChevronDown className="w-4 h-4 text-gray-500 pointer-events-none" /> */}
            </div>
            <div className="flex-1 px-3">
              <input
                type="text"
                placeholder="Running Shoes"
                value={searchValue}
                onChange={handleSearchChange}
                className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-0 outline-none"
              />
            </div>
            {searchValue && (
              <button onClick={clearSearch} className="p-1">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-32 bg-white px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="shoes">Shoes</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
          </select>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="running shoes"
              value={searchValue}
              onChange={handleSearchChange}
              className="w-full bg-white px-3 py-2 pr-10 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchValue && (
              <button
                onClick={clearSearch}
                className="absolute right-10 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
          <button className="bg-[#ffa800] hover:bg-[#e69500] text-black font-medium px-4 py-2 rounded-md">
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
}
