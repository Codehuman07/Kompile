import React from "react";

export function Footer() {
  const links = [
    "FAQ",
    "Contact Us",
    "Privacy",
    "Timeline",
    "Terms",
    "Refund Policy",
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0f0f0f] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-semibold text-gray-500 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-6 items-center">
          <a
            href="#"
            className="p-2 border-2 border-gray-700 rounded-md text-gray-400 hover:bg-[#1f1f1f] hover:text-white hover:border-gray-500 transition-all text-xs font-bold uppercase"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-700 rounded-md text-gray-400 hover:bg-[#1f1f1f] hover:text-white hover:border-gray-500 transition-all text-xs font-bold uppercase"
          >
            Twitter
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-700 rounded-md text-gray-400 hover:bg-[#1f1f1f] hover:text-white hover:border-gray-500 transition-all text-xs font-bold uppercase"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
