import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold">Herbal Store</div>
            <div>Contact: <a href="tel:+27831234567" className="text-herbal-500">+27 83 123 4567</a></div>
            <div>Email: hello@herbalstore.example</div>
          </div>
          <div>
            <div className="font-semibold">Branches</div>
            <div>Johannesburg • Cape Town • Durban</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
