import React from 'react';

export function Pricing() {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Affordable Plans for Everyone
        </h2>
        <p className="text-gray-400 mt-4 text-lg">Choose the best fit for you</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-end relative">
        {/* Left Card - 3 Month */}
        <div className="bg-[#1f1f1f] border border-gray-800 rounded-3xl p-8 relative z-10 transform md:translate-y-4 hover:-translate-y-0 transition-transform">
          <div className="inline-block px-4 py-1.5 bg-[#0f0f0f] border border-gray-700 rounded-full text-sm font-semibold text-gray-300 mb-6">
            3 Month
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Coupon: OFFER25</span>
            <span className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded">25% OFF</span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-white">₹849</span>
            <span className="text-xl text-gray-500 line-through font-semibold">₹1099</span>
          </div>
        </div>

        {/* Center Mascot Mock */}
        <div className="hidden md:flex flex-col items-center justify-end h-full z-0 pb-12">
          <div className="w-48 h-48 bg-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-xl shadow-orange-500/20">
            <div className="text-7xl">🦉</div>
          </div>
        </div>

        {/* Right Card - Lifetime */}
        <div className="bg-[#0f0f0f] border border-orange-500/50 rounded-3xl p-8 text-white relative z-10 shadow-2xl shadow-orange-500/10 transform hover:-translate-y-2 transition-transform">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
            Most Popular
          </div>
          
          <div className="inline-block px-4 py-1.5 bg-[#1f1f1f] text-white rounded-full text-sm font-semibold mb-6 mt-2">
            Unlimited Access
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Coupon: OFFER25</span>
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">25% OFF</span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-white">₹1499</span>
            <span className="text-xl text-gray-500 line-through font-semibold">₹2199</span>
          </div>
        </div>
      </div>
    </div>
  );
}
