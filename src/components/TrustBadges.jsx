import React from 'react';
import { ShieldCheck, Truck, Award, Clock, Package, Shield } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center py-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-white rounded shadow">
          <ShieldCheck className="w-6 h-6 text-herbal-500" />
        </div>
        <div className="text-sm font-medium">Lab Tested</div>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-white rounded shadow">
          <Truck className="w-6 h-6 text-herbal-500" />
        </div>
        <div className="text-sm font-medium">Free Shipping Over R500</div>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-white rounded shadow">
          <Award className="w-6 h-6 text-herbal-500" />
        </div>
        <div className="text-sm font-medium">Satisfaction Guaranteed</div>
      </div>
    </div>
  );
}