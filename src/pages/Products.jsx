import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modal, setModal] = useState(null);

  const categories = [
    'All',
    'Zambuki (SEX Lubricant)',
    'Juices (HTC & CBD)',
    'Zambuki Juice mixer',
    'Gummies (HTC & CBD)',
    'Oils',
    'Flower',
    'Pre-Rolls',
    'Vapes',
    'Cosmetics'
  ];

  const filtered = products.filter(p => {
    if (selectedCategory === 'All') return true;
    const matchCategory = p.category && p.category === selectedCategory;
    const matchTag = Array.isArray(p.tags) && p.tags.includes(selectedCategory);
    return matchCategory || matchTag;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>

        {/* category dropdown */}
        <div className="ml-4">
          <label htmlFor="category" className="sr-only">Select category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="block w-auto bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-herbal-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onOpen={(prod, addImmediately) => {
              if (addImmediately) addToCart(prod, 1);
              else setModal(prod);
            }}
          />
        ))}
      </div>

      <ProductModal product={modal} onClose={() => setModal(null)} onAdd={addToCart} />
    </div>
  );
}
