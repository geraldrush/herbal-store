import React, { useEffect } from 'react';

export default function ProductModal({ product, onClose, onAdd }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full z-10 overflow-auto p-6 transform transition-transform">
        <div className="flex gap-6">
          <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded" />
          <div>
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <div className="text-xl font-semibold">R{product.price.toFixed(2)}</div>
            </div>
            <p className="mt-3 text-gray-700">{product.description}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
              {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <button onClick={() => { onAdd(product, 1); onClose(); }} className="px-4 py-2 rounded bg-herbal-500 text-white">Add to cart</button>
              <button onClick={onClose} className="px-4 py-2 rounded border">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
