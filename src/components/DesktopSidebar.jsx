"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function DesktopSidebar() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  const colors = [
    "#ff0000",
    "#ffa800",
    "#85f9c8",
    "#80ff00",
    "#0029ff",
    "#ff00c7",
    "#ff97dc",
    "#85f9c8",
    "#ff0066",
    "#1e1e1e",
    "#ffffff",
  ];

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="hidden md:block w-64 bg-white p-4 rounded-lg h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <ChevronDown className="w-4 h-4" />
          Filters
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">
          clear all
        </button>
      </div>

      {/* Applied Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Applied Filters</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded text-xs filter-tag">
            All ✕
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded text-xs filter-tag">
            Running Shoes ✕
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded text-xs filter-tag">
            Red ✕
          </span>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 flex items-center justify-between">
          Category
          <ChevronDown className="w-4 h-4" />
        </h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">All</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Running Shoes</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Category 3</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Category 4</span>
          </label>
        </div>
      </div>

      {/* Stock Status */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 flex items-center justify-between">
          Stock Status
          <ChevronDown className="w-4 h-4" />
        </h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">In Stock</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Out of Stock</span>
          </label>
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 flex items-center justify-between">
          Size
          <ChevronDown className="w-4 h-4" />
        </h4>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
        >
          <option value="">Select size</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>

      {/* Color */}
      <div>
        <h4 className="font-medium mb-3 flex items-center justify-between">
          Color
          <ChevronDown className="w-4 h-4" />
        </h4>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => toggleColor(color)}
              className={`w-6 h-6 rounded-full border-2 hover:border-gray-400 color-picker-button ${
                selectedColors.includes(color)
                  ? "border-gray-600"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
