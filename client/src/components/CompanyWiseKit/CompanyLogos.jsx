import React from 'react';

export function CompanyLogos() {
  const companies = [
    { name: 'Google', colors: ['text-blue-500', 'text-red-500', 'text-yellow-500', 'text-blue-500', 'text-green-500', 'text-red-500'] },
    { name: 'Microsoft', colors: ['text-white'] },
    { name: 'amazon', colors: ['text-white'] },
    { name: 'Adobe', colors: ['text-red-500'] },
    { name: 'PayPal', colors: ['text-blue-500'] },
    { name: 'Uber', colors: ['text-white'] },
    { name: 'Flipkart', colors: ['text-blue-400'] },
    { name: 'LinkedIn', colors: ['text-blue-500'] },
  ];

  return (
    <div className="pt-16 pb-8 border-b border-gray-800">
      <h3 className="text-center text-sm font-bold text-gray-500 tracking-widest uppercase mb-10">
        Interview Success Stories From
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {companies.map((company) => (
          <div key={company.name} className="text-2xl md:text-3xl font-bold tracking-tighter flex">
            {company.colors.length > 1 ? (
              company.name.split('').map((char, i) => (
                <span key={i} className={company.colors[i] || 'text-white'}>{char}</span>
              ))
            ) : (
              <span className={company.colors[0]}>{company.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
