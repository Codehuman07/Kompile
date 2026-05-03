import React from 'react';
import { ChevronLeft, ChevronRight, Lock, List } from 'lucide-react';

export function CompanySheets() {
  const sheets = [
    { name: 'Google', desc: 'Get interview-ready for Google with this dedicated sheet of DSA proble...' },
    { name: 'Amazon', desc: 'Focused on Amazon\'s interview style, this sheet compiles real DSA ques...' },
    { name: 'Meta', desc: 'Target Meta interviews smartly with this handpicked list of DSA proble...' },
    { name: 'Microsoft', desc: 'Boost your Microsoft interview prep with this hand-selected list of DS...' },
  ];

  return (
    <div className="pt-16 text-center space-y-12 relative">
      <h2 className="text-4xl font-extrabold text-white uppercase tracking-tight">
        Explore Company-Wise Sheets
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-3 bg-[#1f1f1f] border border-gray-700 rounded-full shadow-lg text-gray-400 hover:text-white hover:scale-110 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-3 bg-[#1f1f1f] border border-gray-700 rounded-full shadow-lg text-gray-400 hover:text-white hover:scale-110 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {sheets.map((sheet, idx) => (
            <div key={idx} className="min-w-[300px] flex-1 bg-[#0f0f0f] border border-gray-800 rounded-xl shadow-sm text-left flex flex-col snap-start hover:border-gray-600 transition-colors">
              <div className="h-2 w-full bg-orange-500 rounded-t-xl"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{sheet.name}</h3>
                <p className="text-gray-400 text-sm flex-1">{sheet.desc}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center gap-4 text-gray-500">
                  <List className="w-4 h-4" />
                  <Lock className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
