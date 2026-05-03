import React from 'react';

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center space-y-12">
      {/* Hero Header */}
      <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold shadow-sm">
          100K+ Engineers Trust Kompile
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          10x your <span className="text-orange-500">selection</span> chances <br />
          Kom<span className="text-orange-500">pile</span> Company wise Kit
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl">
          Unlock recently asked interview questions at top product companies. Practice what actually matters and land your dream job
        </p>
        
        <div className="flex items-center gap-4 pt-4">
          <button className="px-8 py-3 rounded-md border border-gray-600 bg-[#0f0f0f] text-gray-300 font-bold hover:bg-[#2a2a2a] transition-colors shadow-sm">
            Explore Companies
          </button>
          <button className="px-8 py-3 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
            Buy Now
          </button>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="w-full pt-16 grid lg:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-white">Crack Top Companies</h2>
            <p className="text-lg text-gray-400 mt-2">15+ Company-Specific Prep Sheets</p>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6 space-y-2">
              <h3 className="text-xl font-bold text-white">No Outdated Content</h3>
              <p className="text-gray-400">Our team constantly aggregates and verifies questions from trusted platforms and Kompile user suggestions.</p>
            </div>
            <div className="border-l-4 border-gray-600 pl-6 space-y-2 opacity-80">
              <h3 className="text-xl font-bold text-white">Filter by Recency</h3>
              <p className="text-gray-400">Practice questions asked in the last 30 days, 6 months, or 1 year. Stop wasting time on irrelevant problems.</p>
            </div>
          </div>
        </div>
        
        {/* Mock Dashboard */}
        <div className="bg-[#1f1f1f] rounded-xl shadow-2xl border border-gray-700 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="bg-[#2a2a2a] border-b border-gray-700 p-3 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="h-6 w-48 bg-gray-700 rounded-md"></div>
              <div className="h-8 w-32 bg-gray-500 rounded-md"></div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="h-8 w-24 bg-orange-500/20 rounded-full"></div>
              <div className="h-8 w-16 bg-gray-700 rounded-full"></div>
              <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-orange-500/30 bg-orange-500/10 rounded-lg p-4 space-y-3">
                  <div className="h-5 w-24 bg-orange-500/40 rounded"></div>
                  <div className="h-4 w-full bg-gray-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
