import React from 'react';

const branches = [
  { name: 'Johannesburg', address: '1 Market St, Johannesburg', map: 'https://maps.google.com/?q=Johannesburg' },
  { name: 'Cape Town', address: '12 Sea Rd, Cape Town', map: 'https://maps.google.com/?q=Cape+Town' },
  { name: 'Durban', address: '5 Pier Rd, Durban', map: 'https://maps.google.com/?q=Durban' }
];

export default function Branches() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Branches</h1>
      <p className="text-gray-600 mt-2">Visit any of our branches or contact the closest one</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {branches.map((b, i) => (
          <div key={i} className="p-4 border rounded">
            <div className="font-semibold">{b.name}</div>
            <div className="text-sm text-gray-600">{b.address}</div>
            <a href={b.map} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-herbal-500">Open in Maps</a>
          </div>
        ))}
      </div>
    </div>
  );
}
