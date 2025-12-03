import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/benefits', label: 'Benefits' },
    { to: '/products', label: 'Products' },
    { to: '/membership', label: 'Membership' },
    { to: '/courier-options', label: 'Courier Options' },
    { to: '/branches', label: 'Branches' }
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-herbal-300 to-herbal-500 shadow flex items-center justify-center text-white font-bold">H</div>
            <div>
              <div className="font-semibold">CannaPuff</div>
              <div className="text-xs text-gray-500 -mt-1">Your Health is Our Concern</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => `px-3 py-2 rounded ${isActive ? 'text-herbal-700' : 'text-gray-700 hover:text-herbal-700'}`}>
                {l.label}
              </NavLink>
            ))}

            <button onClick={onOpenCart} aria-label="Open cart" className="relative inline-flex items-center px-3 py-2 rounded bg-white border hover:shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg>
              {cartCount > 0 && <span className="ml-2 inline-block rounded-full bg-herbal-500 text-white px-2 text-xs">{cartCount}</span>}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 pb-4 pt-2 space-y-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-50">
                {l.label}
              </NavLink>
            ))}
            <button onClick={() => { onOpenCart(); setOpen(false); }} className="w-full text-left px-3 py-2 rounded text-gray-700">Cart ({cartCount})</button>
          </div>
        </div>
      )}
    </nav>
  );
}
