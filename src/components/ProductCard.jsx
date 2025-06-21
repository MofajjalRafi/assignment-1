import { Star, Heart, Plus } from "lucide-react";

export function ProductCard({
  name,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  inStock,
  onSale,
  image,
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative shadow-sm product-card">
      {onSale && (
        <div className="absolute top-2 left-2 bg-[#ffa800] text-black text-xs z-10 rounded-full px-2 py-1 font-medium">
          SALE
        </div>
      )}

      <div className="aspect-square bg-[#eceff1] flex items-center justify-center p-4">
        <img
          src={image || "/src/assets/products.png"}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 leading-tight">{name}</h3>
        <p className="text-xs text-gray-600 mb-2">{category}</p>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < rating ? "fill-[#ffa800] text-[#ffa800]" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-600">({reviews} Reviews)</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="mb-3">
          {inStock ? (
            <span className="text-xs text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-xs text-red-600 font-medium">
              Out of Stock
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-[#323232] hover:bg-[#2c2c2c] text-white text-xs h-8 px-3 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inStock}
          >
            <Plus className="w-3 h-3 mr-1" />
            Add To Cart
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 p-2 h-8 w-8 rounded-md flex items-center justify-center">
            <Heart className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
