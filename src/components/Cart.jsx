import React, { useMemo, useState } from 'react';
import { BUSINESS_WHATSAPP_NUMBER } from '../config';

// helper: create whatsapp URL
function createWhatsAppUrl(number, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export default function Cart({ isOpen, onClose, cart, updateQty, removeItem, clearCart }) {
  const [customerNote, setCustomerNote] = useState('');
  const total = useMemo(() => cart.reduce((s, i) => s + (i.price * i.qty), 0), [cart]);

  const handleComplete = () => {
    const lines = ['Hello, I want to place an order from CannaPuff:', ''];
    cart.forEach(i => {
      lines.push(`${i.qty} x ${i.name} — R${(i.price * i.qty).toFixed(2)}`);
    });
    lines.push('');
    lines.push(`Total: R${total.toFixed(2)}`);
    if (customerNote) {
      lines.push('');
      lines.push(`Note: ${customerNote}`);
    }
    lines.push('');
    lines.push('Please confirm pickup/delivery details and cost. Thank you.');
    const msg = lines.join('\n');
    const wa = createWhatsAppUrl(BUSINESS_WHATSAPP_NUMBER, msg);
    window.open(wa, '_blank');
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full md:w-96 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <div className="flex gap-2">
            <button onClick={clearCart} className="px-3 py-1 text-sm rounded border">Clear</button>
            <button onClick={onClose} className="px-3 py-1 text-sm rounded">Close</button>
          </div>
        </div>

        <div className="mt-4 space-y-4 overflow-auto max-h-[60vh]">
          {cart.length === 0 && <div className="text-gray-500">Your cart is empty.</div>}
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-3 border rounded p-2">
              <img src={item.image} className="w-14 h-14 object-cover rounded" alt={item.name} />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">R{item.price.toFixed(2)}</div>
                <div className="mt-1 flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="w-7 h-7 rounded border">-</button>
                  <div className="px-2">{item.qty}</div>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded border">+</button>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">R{(item.price * item.qty).toFixed(2)}</div>
                <button onClick={() => removeItem(item.id)} className="mt-2 text-xs text-red-600">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <textarea value={customerNote} onChange={(e) => setCustomerNote(e.target.value)} placeholder="Add a note for the seller (e.g. preferred delivery time)" className="w-full border rounded p-2 text-sm" />
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-xl font-bold">R{total.toFixed(2)}</div>
          </div>

          <div className="mt-4">
            <button onClick={handleComplete} disabled={cart.length === 0} className="w-full px-4 py-3 rounded bg-green-600 text-white font-semibold hover:opacity-95 disabled:opacity-50">
              Complete order via WhatsApp
            </button>
            <div className="mt-2 text-xs text-gray-500">You will be redirected to WhatsApp to send your order to the shop.</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
