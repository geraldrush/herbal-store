import React, { useState } from 'react';

export default function CourierOptions() {
  const options = [
    { id: 'pickup', name: 'Pickup (Free)', eta: 'Ready in 2 hours', price: 0 },
    { id: 'standard', name: 'Standard Courier', eta: '2–4 business days', price: 50 },
    { id: 'express', name: 'Express Courier', eta: '1 business day', price: 120 }
  ];

  const [selected, setSelected] = useState('standard');

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Courier Options</h1>
      <p className="text-gray-600 mt-2">Choose your preferred delivery option — selected option can be noted in WhatsApp order.</p>

      <div className="mt-6 space-y-4">
        {options.map(o => (
          <div key={o.id} className={`p-4 border rounded-lg flex items-center justify-between ${selected===o.id ? 'ring-2 ring-herbal-300' : ''}`}>
            <div>
              <div className="font-semibold">{o.name}</div>
              <div className="text-sm text-gray-500">{o.eta}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-semibold">R{o.price.toFixed(2)}</div>
              <input type="radio" name="courier" checked={selected===o.id} onChange={() => setSelected(o.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
