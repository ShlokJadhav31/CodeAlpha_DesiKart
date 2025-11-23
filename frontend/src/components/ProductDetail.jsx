import React from "react";
import { ArrowRight, Star, Check, ShoppingCart } from "lucide-react";
import { formatRupee } from "../data";

const ProductDetail = ({ product, onBack, onAddToCart }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <button
      onClick={onBack}
      className="mb-8 flex items-center text-gray-600 hover:text-orange-600 transition"
    >
      <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Shopping
    </button>

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-96 md:h-[600px] bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold mb-4 self-start">
            {product.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">128 Verified Reviews</span>
          </div>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500 mb-1">Deal Price</p>
              <p className="text-4xl font-bold text-gray-900">
                {formatRupee(product.price)}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Inclusive of all taxes
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                onAddToCart(product);
              }}
              className="flex-1 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
            >
              <ShoppingCart className="mr-2 h-6 w-6" />
              Add to Cart
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <Check className="h-5 w-5 text-green-500 mr-2" /> In Stock
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Check className="h-5 w-5 text-green-500 mr-2" /> Free Delivery
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Check className="h-5 w-5 text-green-500 mr-2" /> Cash on Delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
