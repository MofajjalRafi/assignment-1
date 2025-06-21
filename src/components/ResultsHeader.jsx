import { Filter, ArrowUpDown } from "lucide-react";

export function ResultsHeader() {
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-6 bg-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold italic text-gray-800 mb-2">
            "Running Shoes"
          </h1>
          <p className="text-gray-600 font-medium">288 Results</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <div className="w-px bg-gray-300"></div>
          <button className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-50">
            <ArrowUpDown className="w-4 h-4" />
            Sort By
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home / Search / Running Shoes
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold italic">"Running Shoes"</h1>
            <p className="text-gray-600">288 Results</p>
          </div>
          <select className="w-40 bg-white px-3 py-2 border border-gray-300 rounded-md">
            <option value="featured">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </>
  );
}
