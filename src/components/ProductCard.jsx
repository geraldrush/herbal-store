import React from 'react';

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
        <div className="absolute top-3 left-3 bg-white/80 px-2 py-1 rounded text-xs">{product.tags[0]}</div>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">R{product.price.toFixed(2)}</div>
          <div className="flex gap-2">
            <button onClick={() => onOpen(product)} className="px-3 py-1 text-sm rounded bg-white border hover:bg-gray-50">Details</button>
            <button onClick={() => onOpen(product, true)} className="px-3 py-1 text-sm rounded bg-herbal-500 text-white">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
