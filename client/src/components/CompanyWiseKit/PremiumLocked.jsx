import React from 'react';
import { Lock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function PremiumLocked({ companyName = "Company" }) {
  return (
    <div className="relative mt-12 rounded-3xl overflow-hidden border border-orange-500/30 bg-[#0f0f0f]">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_100%)]"></div>
      
      <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-500 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            Premium Access
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Unlock the Full <span className="text-orange-500">{companyName} Kit</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-xl">
            Get access to 500+ more high-frequency Amazon questions, detailed company interview reports, and priority weekly updates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "Verified Interview Experiences",
              "System Design Deep Dives",
              "Behavioral Mock Questions",
              "Recruiter Patterns & Insights"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className="px-10 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-lg transition-all duration-300 shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 group mx-auto md:mx-0">
              Upgrade Now for ₹1,499
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-xs text-gray-600 font-medium">One-time payment • Lifetime access • 12,000+ happy students</p>
          </div>
        </div>

        {/* Locked Illustration Area */}
        <div className="w-full max-w-[350px] relative group">
          <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-all duration-500"></div>
          <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-3xl p-10 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-inner">
              <Lock className="w-10 h-10 text-orange-500" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-bold text-white">450+ More Questions</p>
              <p className="text-sm text-gray-500">Locked behind premium</p>
            </div>
            
            {/* Mock Locked Rows */}
            <div className="w-full space-y-3 opacity-20 pointer-events-none grayscale">
              <div className="h-4 bg-gray-800 rounded-full w-full"></div>
              <div className="h-4 bg-gray-800 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-800 rounded-full w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
