import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="px-4 md:px-0 py-6">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex justify-center mb-4">
          <button className="text-sm border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-50">
            Next Page →
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">
              01
            </span>
            <span className="text-sm text-gray-600">of 55</span>
          </div>
          <div className="flex gap-1">
            <button className="w-8 h-8 p-0 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 p-0 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <button className="bg-white text-black border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
          Next Page →
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">01 of 55</span>
          <div className="flex gap-1">
            <button className="border border-gray-300 px-3 py-2 rounded-md bg-white hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="border border-gray-300 px-3 py-2 rounded-md bg-white hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
