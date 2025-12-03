import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Products from './pages/Products';
import Membership from './pages/Membership';
import CourierOptions from './pages/CourierOptions';
import Branches from './pages/Branches';
import './index.css';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1, courier = null) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...product, qty, courier }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/courier-options" element={<CourierOptions />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
      </main>

      <footer className="mt-8">
        {/* Footer will be minimal here to keep pages short */}
        <div className="text-center p-6 text-sm text-gray-600">© {new Date().getFullYear()} CannaPuff — All rights reserved</div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
}
