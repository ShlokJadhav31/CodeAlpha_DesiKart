import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { formatRupee } from "../data";

const ProductCard = ({ product, onViewDetails, onAddToCart }) => (
  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
    <div className="relative aspect-square overflow-hidden bg-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
      <button
        onClick={() => onViewDetails(product)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-gray-50"
      >
        Quick View
      </button>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm text-orange-600 font-semibold tracking-wide uppercase">
          {product.category}
        </p>
        <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="ml-1 text-xs font-bold text-gray-700">
            {product.rating}
          </span>
        </div>
      </div>
      <h3
        className="text-lg font-bold text-gray-900 mb-2 line-clamp-1"
        title={product.name}
      >
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <span className="text-xl font-bold text-gray-900">
          {formatRupee(product.price)}
        </span>
        <button
          onClick={() => onAddToCart(product)}
          className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          title="Add to Cart"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
