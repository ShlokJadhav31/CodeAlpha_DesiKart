import React from "react";
import { ShoppingBag, LogOut, User, ShoppingCart } from "lucide-react";

const Navbar = ({ user, cartCount, setView, handleLogout }) => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div
          className="flex-shrink-0 flex items-center cursor-pointer"
          onClick={() => setView("home")}
        >
          <ShoppingBag className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900 tracking-tight">
            Desi<span className="text-orange-600">Kart</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => setView("home")}
            className="text-gray-600 hover:text-orange-600 font-medium transition"
          >
            Home
          </button>
          <button className="text-gray-600 hover:text-orange-600 font-medium transition">
            Electronics
          </button>
          <button className="text-gray-600 hover:text-orange-600 font-medium transition">
            Fashion
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="hidden md:block text-sm text-gray-700">
                Namaste, {user.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setView("login")}
              className="flex items-center text-gray-600 hover:text-orange-600 font-medium"
            >
              <User className="h-5 w-5 md:mr-1" />
              <span className="hidden md:inline">Login</span>
            </button>
          )}

          <button
            onClick={() => setView("cart")}
            className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-600 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
