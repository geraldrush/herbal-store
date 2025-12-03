import React from 'react';
export default function Membership() {
  const tiers = [
    { name: 'Basic', price: 'Free', perks: ['Monthly tips', 'Early product announcements'] },
    { name: 'Silver', price: 'R49 / mo', perks: ['5% off', 'Free shipping over R400'] },
    { name: 'Gold', price: 'R99 / mo', perks: ['10% off', 'Exclusive blends'] }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Membership</h1>
      <p className="text-gray-600 mt-2">Join a program that rewards your loyalty</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {tiers.map((t, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="text-herbal-700 font-bold">{t.price}</div>
            </div>
            <ul className="mt-3 text-sm text-gray-600">
              {t.perks.map((p,i) => <li key={i}>{p}</li>)}
            </ul>
            <div className="mt-4">
              <button className="px-4 py-2 rounded bg-herbal-500 text-white">Sign up</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
