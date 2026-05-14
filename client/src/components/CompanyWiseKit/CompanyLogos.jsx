import React from 'react';

const companies = [
  { name: 'Google',    colors: ['text-blue-500','text-red-500','text-yellow-400','text-blue-500','text-green-500','text-red-500'] },
  { name: 'Microsoft', colors: ['text-white'] },
  { name: 'Amazon',    colors: ['text-white'] },
  { name: 'Adobe',     colors: ['text-red-500'] },
  { name: 'PayPal',    colors: ['text-blue-500'] },
  { name: 'Uber',      colors: ['text-white'] },
  { name: 'Flipkart',  colors: ['text-blue-400'] },
  { name: 'LinkedIn',  colors: ['text-blue-500'] },
  { name: 'Apple',     colors: ['text-gray-300'] },
  { name: 'Meta',      colors: ['text-blue-400'] },
  { name: 'Netflix',   colors: ['text-red-600'] },
  { name: 'Oracle',    colors: ['text-red-500'] },
];

function CompanyItem({ company }) {
  return (
    <div className="mx-14 text-2xl md:text-3xl font-bold tracking-tighter flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none shrink-0">
      {company.colors.length > 1
        ? company.name.split('').map((char, i) => (
            <span key={i} className={company.colors[i] || 'text-white'}>{char}</span>
          ))
        : <span className={company.colors[0]}>{company.name}</span>
      }
    </div>
  );
}

export function CompanyLogos() {
  
  const doubled = [...companies, ...companies];

  return (
    <div className="pt-16 pb-8 border-b border-gray-800 overflow-hidden">
      <h3 className="text-center text-sm font-bold text-gray-500 tracking-widest uppercase mb-10">
        Interview Success Stories From
      </h3>

     
      <div className="relative">
  
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {doubled.map((company, i) => (
              <CompanyItem key={`${company.name}-${i}`} company={company} />
            ))}
          </div>
        </div>
      </div>

  
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
