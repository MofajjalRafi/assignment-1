"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { ResultsHeader } from "./components/ResultsHeader";
import { AppliedFilters } from "./components/AppliedFilters";
import { ProductGrid } from "./components/ProductGrid";
import { Pagination } from "./components/Pagination";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { Footer } from "./components/Footer";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: true,
      image: "/src/assets/products.png",
    },
    {
      id: 2,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: "/src/assets/products.png",
    },
    {
      id: 3,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: 400,
      rating: 5,
      reviews: 10,
      inStock: false,
      onSale: false,
      image: "/src/assets/products.png",
    },
    {
      id: 4,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: true,
      image: "/src/assets/products.png",
    },
    {
      id: 5,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: "/src/assets/products.png",
    },
    {
      id: 6,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: "/src/assets/products.png",
    },
    {
      id: 7,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: true,
      image: "/src/assets/products.png",
    },
    {
      id: 8,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: 400,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: "/src/assets/products.png",
    },
    {
      id: 9,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      inStock: false,
      onSale: false,
      image: "/src/assets/products.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eceff1]">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <SearchBar isMobileMenuOpen={isMobileMenuOpen} />

      <div className="max-w-7xl mx-auto">
        <div className="md:flex gap-6 md:px-4 md:py-6">
          {/* Desktop Sidebar */}
          <DesktopSidebar />

          {/* Main Content */}
          <div className="flex-1">
            <ResultsHeader />

            {/* Mobile Applied Filters */}
            <div className="md:hidden">
              <AppliedFilters />
            </div>

            <ProductGrid products={products} />
            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
