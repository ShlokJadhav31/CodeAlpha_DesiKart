export const formatRupee = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const SEED_PRODUCTS = [
  {
    id: 101,
    name: "Sony WH-1000XM5 Noise Canceling",
    price: 26990,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "Industry-leading noise cancellation. 30-hour battery life. Perfect for Mumbai commutes.",
    rating: 4.8,
  },
  {
    id: 102,
    name: "Titan Minimalist Leather Watch",
    price: 4495,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic analog design with genuine leather strap. Water-resistant up to 50m.",
    rating: 4.5,
  },
  {
    id: 103,
    name: "Godrej Interio Ergonomic Chair",
    price: 14500,
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    description:
      "High back mesh chair with lumbar support. Ideal for long work-from-home sessions.",
    rating: 4.7,
  },
  {
    id: 104,
    name: "Canon 50mm Prime Lens",
    price: 9995,
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80",
    description:
      "The 'Nifty Fifty'. F/1.8 aperture. Sharp autofocus and beautiful bokeh for portraits.",
    rating: 4.9,
  },
  {
    id: 105,
    name: "boAt Xtend Smartwatch",
    price: 2499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80",
    description:
      'Alexa built-in, 1.69" HD Display, multiple watch faces, stress monitor & heart rate.',
    rating: 4.3,
  },
  {
    id: 106,
    name: "Levi's Denim Trucker Jacket",
    price: 3599,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    description:
      "The original jean jacket since 1967. A blank canvas for self-expression.",
    rating: 4.6,
  },
];
