import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import products from '../data/products';
import ProductModal from '../components/ProductModal';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Home({ addToCart }) {
  const [modal, setModal] = useState(null);

  return (
    <div>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12 bg-herbal-50 rounded-lg my-8">
        <h2 className="text-3xl font-bold text-herbal-700 mb-4">About CannaPuff</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CannaPuff is a herbal company rooted deeply in Mother Nature and the hearts of all lovers of herbal medicines. We embrace the growing global love for herbal alternatives to pharmaceutical medicines. While conventional medicines have their benefits, their side effects often leave lasting negative impacts on patients.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Herbal medicines offer both healing and detox effects, especially for patients with chronic conditions who have ingested toxic drugs over long periods. CannaPuff focuses on the benefits that <strong>Cannabis leaf and seed</strong> offer to our clients.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8 border-l-4 border-red-600 bg-red-50 rounded-lg my-8">
        <h3 className="text-2xl font-bold text-red-700 mb-3">Age Restriction (18+)</h3>
        <p className="text-gray-700 mb-3">
          Our products are restricted to those above the age of 18.
        </p>
        <p className="text-gray-700">
          Irrespective of age, we require our clients to fill out a medical questionnaire form. Where there are concerns, we refer clients to our medical practitioners for further screening before using any of our products.
        </p>
      </section>

      <section id="benefits" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Benefits of Cannabis Leaf</h2>
        <p className="text-gray-600 mt-2">Cannabis leaf (especially when made from hemp, high in CBD and low in THC) offers potential benefits such as:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg bg-white hover:shadow-lg transition">
            <h3 className="font-semibold text-herbal-700">Pain Relief</h3>
            <p className="text-sm text-gray-600 mt-2">Natural analgesic effects to reduce chronic pain.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white hover:shadow-lg transition">
            <h3 className="font-semibold text-herbal-700">Anxiety Reduction</h3>
            <p className="text-sm text-gray-600 mt-2">Promotes calmness and emotional balance.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white hover:shadow-lg transition">
            <h3 className="font-semibold text-herbal-700">Improved Sleep</h3>
            <p className="text-sm text-gray-600 mt-2">Relaxing effects for better sleep quality.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white hover:shadow-lg transition">
            <h3 className="font-semibold text-herbal-700">Anti-Inflammatory</h3>
            <p className="text-sm text-gray-600 mt-2">Reduces inflammation and muscle soreness.</p>
          </div>
        </div>
        <p className="mt-6 text-center">
          <a href="/benefits" className="text-herbal-600 font-semibold hover:underline">
            View all benefits →
          </a>
        </p>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Featured products</h2>
          <TrustBadges />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,6).map(p => (
            <ProductCard key={p.id} product={p} onOpen={(prod, addImmediately) => {
              if (addImmediately) addToCart(prod, 1);
              else setModal(prod);
            }} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 bg-herbal-50 rounded-lg my-8">
        <h3 className="text-2xl font-bold text-herbal-700 mb-4">Delivery</h3>
        <p className="text-gray-700 text-lg font-semibold text-green-600 mb-3">
          ✓ ALL OUR DELIVERIES ARE FREE FOR MEMBERS in the areas listed for members
        </p>
        <a href="/delivery" className="text-herbal-600 font-semibold hover:underline">
          Go to delivery page →
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-lg font-semibold">How it works</h3>
        <ol className="list-decimal pl-6 mt-3 text-gray-600">
          <li>Add items to cart</li>
          <li>Click complete order — you will be redirected to WhatsApp</li>
          <li>Confirm delivery/courier details with our team</li>
        </ol>
      </section>

      <ProductModal product={modal} onClose={() => setModal(null)} onAdd={addToCart} />
      <Footer />
    </div>
  );
}