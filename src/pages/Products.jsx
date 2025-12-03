import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(null);

  const filtered = products.filter(p => filter === '' || p.tags.includes(filter));

  const tags = Array.from(new Set(products.flatMap(p => p.tags)));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex gap-2 items-center">
          <label className="text-sm text-gray-600">Filter</label>
          <select value={filter} onChange={e => setFilter(e.target.value)} className="border rounded p-2 text-sm">
            <option value="">All</option>
            {tags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} onOpen={(prod, addImmediately) => {
          if (addImmediately) addToCart(prod, 1);
          else setModal(prod);
        }} />)}
      </div>

      <ProductModal product={modal} onClose={() => setModal(null)} onAdd={addToCart} />
    </div>
  );
}
