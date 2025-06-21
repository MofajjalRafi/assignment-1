"use client";
import { X } from "lucide-react";

export function AppliedFilters() {
  const filters = [
    { label: "All", removable: true },
    { label: "Running Shoes", removable: true },
    { label: "Red", removable: true },
    { label: "In Stock", removable: true },
    { label: "Black", removable: true },
  ];

  const removeFilter = (index) => {
    console.log(`Removing filter: ${filters[index].label}`);
    // Add filter removal logic here
  };

  return (
    <div className="px-4 py-4 bg-white">
      <div className="flex gap-3 overflow-x-auto pb-1">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium"
          >
            <span className="text-gray-700">{filter.label}</span>
            {filter.removable && (
              <button onClick={() => removeFilter(index)}>
                <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
