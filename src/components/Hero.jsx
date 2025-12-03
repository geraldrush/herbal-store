import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Award, Clock, Package, Shield } from 'lucide-react';

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="bg-emerald-fade py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Natural herbal remedies, crafted with care
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            Hand-selected herbs and blends designed to bring balance to your daily life — calming, uplifting and supportive.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/products" className="inline-flex items-center px-5 py-3 rounded-lg bg-herbal-500 text-white font-medium shadow hover:scale-[1.02] transition-transform">
              Shop Products
            </Link>
            <a href="#benefits" className="inline-flex items-center px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">See Benefits</a>
          </div>
          <div className="mt-6 flex gap-4 items-center">
            <div className="flex items-center gap-3">
              
  <div className="p-2 bg-white rounded shadow">
            <Award className="w-6 h-6 text-herbal-500" />
          </div>
              <div>
                <div className="text-sm font-semibold">Trusted & lab-tested</div>
                <div className="text-xs text-gray-500">Quality you can rely on</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-102 transition-transform duration-300">
            <img src="/images/herb1.jpg" alt="Featured herbs" className="w-full h-72 object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 left-6 p-4 rounded-xl bg-white shadow">{/* small floating card */}<div className="text-sm font-medium">Free shipping over R500</div></div>
        </div>
      </div>
    </section>
  );
}
