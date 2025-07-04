import { ProductCard } from "./ProductCard";
import ProductsImage from "../assets/products.png";
export function ProductGrid({ products }) {
  const defaultProducts = [
    {
      id: 1,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: undefined,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: true,
      image: ProductsImage,
    },
    {
      id: 2,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: undefined,
      rating: 5,
      reviews: 10,
      inStock: false,
      onSale: false,
      image: ProductsImage,
    },
    {
      id: 3,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: 400,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: ProductsImage,
    },
    {
      id: 4,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: 400,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: true,
      image: ProductsImage,
    },
    {
      id: 5,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: undefined,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: ProductsImage,
    },
    {
      id: 6,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      price: 200,
      originalPrice: undefined,
      rating: 5,
      reviews: 10,
      inStock: true,
      onSale: false,
      image: ProductsImage,
    },
  ];

  const productsToShow = products || defaultProducts;

  return (
    <div className="px-4 md:px-0 py-4">
      {/* 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {productsToShow.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
