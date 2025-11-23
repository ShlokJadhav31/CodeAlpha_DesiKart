import React from "react";
import { ShoppingBag, X } from "lucide-react";
import { formatRupee } from "../data";

const Cart = ({
  cart,
  removeFromCart,
  updateQuantity,
  total,
  onCheckout,
  user,
}) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

    {cart.length === 0 ? (
      <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    ) : (
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          {cart.map((item) => (
            <div
              key={item.cartId}
              className="flex py-6 border-b border-gray-200 bg-white p-4 rounded-xl mb-4 shadow-sm"
            >
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">
                      {formatRupee(item.price * item.quantity)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.cartId, -1)}
                      className="px-3 py-1 hover:bg-gray-100 border-r"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.cartId, 1)}
                      className="px-3 py-1 hover:bg-gray-100 border-l"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartId)}
                    className="font-medium text-red-600 hover:text-red-500 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-100">
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">
                    {formatRupee(total)}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">Free</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">GST (18%)</dt>
                  <dd className="font-medium text-gray-900">
                    {formatRupee(total * 0.18)}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <dt className="text-base font-bold text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-bold text-orange-600">
                    {formatRupee(total * 1.18)}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8">
              {user ? (
                <button
                  onClick={onCheckout}
                  className="w-full bg-orange-600 border border-transparent rounded-xl shadow-sm py-4 px-4 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all shadow-orange-500/30"
                >
                  Proceed to Pay
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">
                    Please login to complete your purchase
                  </p>
                  <button
                    disabled
                    className="w-full bg-gray-300 border border-transparent rounded-xl py-4 px-4 text-base font-medium text-white cursor-not-allowed"
                  >
                    Login to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default Cart;
