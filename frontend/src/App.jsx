import React, { useState, useEffect } from "react";
import { Check, Loader2, ShoppingBag } from "lucide-react";

// Import Components
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import { SEED_PRODUCTS } from "./data";

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("home"); // home, product, cart, login, success
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [notification, setNotification] = useState(null);

  // Initialize Data
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts(SEED_PRODUCTS);
      setLoading(false);
    }, 800);
  }, []);

  // Cart Logic
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, cartId: Date.now() }];
    });
    showNotification(`Added ${product.name} to cart`);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Auth Logic
  const handleLogin = (email, password) => {
    if (email && password) {
      setUser({ email, name: "Demo User" });
      setView("home");
      setAuthError("");
    } else {
      setAuthError("Please enter email and password");
    }
  };

  const handleRegister = (email, password, name) => {
    if (email && password) {
      setUser({ email, name: name || "New User" });
      setView("home");
      setAuthError("");
    } else {
      setAuthError("Please fill all fields");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setView("home");
  };

  // Order Logic
  const handleCheckout = () => {
    if (!user) {
      setView("login");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setCart([]);
      setView("success");
      setLoading(false);
    }, 1500);
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Render
  if (loading && products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 text-orange-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar
        user={user}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        setView={setView}
        handleLogout={handleLogout}
      />

      {notification && (
        <div className="fixed top-20 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center animate-fade-in-down">
          <Check className="h-5 w-5 mr-2 text-green-400" />
          {notification}
        </div>
      )}

      <main className="pb-16">
        {view === "home" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Festival Sale Live Now
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Great discounts on top brands. Free delivery across India.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={(p) => {
                    setSelectedProduct(p);
                    setView("product");
                  }}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}

        {view === "product" && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setView("home")}
            onAddToCart={(p) => {
              addToCart(p);
            }}
          />
        )}

        {view === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            total={cartTotal}
            onCheckout={handleCheckout}
            user={user}
          />
        )}

        {view === "login" && (
          <Auth
            onLogin={handleLogin}
            onRegister={handleRegister}
            error={authError}
            setView={setView}
          />
        )}

        {view === "success" && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-green-100 p-6 rounded-full mb-6">
              <Check className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Thank you for shopping with DesiKart. We will send shipping
              updates to your email shortly.
            </p>
            <button
              onClick={() => setView("home")}
              className="bg-orange-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-700 transition shadow-lg shadow-orange-500/30"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-6 w-6 text-orange-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  DesiKart
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Your one-stop shop for everything Indian.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-600">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-600">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 appearance-none rounded-l-md border border-gray-300 px-4 py-2 bg-white text-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
                <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-orange-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 DesiKart Retail Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
