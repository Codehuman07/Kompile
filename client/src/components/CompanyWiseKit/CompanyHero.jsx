import React from "react";
import { ExternalLink, Users, Briefcase, Star, Clock } from "lucide-react";

export function CompanyHero({ company }) {
  if (!company) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 p-8 md:p-12">
      <div
        className={`absolute top-0 right-0 w-96 h-96 ${company.accent}/5 blur-[100px] rounded-full -mr-48 -mt-48`}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white flex items-center justify-center p-6 shadow-2xl shadow-orange-500/10 shrink-0">
          <img
            src={company.logo}
            alt={`${company.name} Logo`}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              {company.name}{" "}
              <span className="text-orange-500">Interview Kit</span>
            </h1>
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 text-xs font-bold border border-orange-500/30">
              PREMIUM
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            {company.description ||
              `Master the ${company.name} interview with our curated collection of real interview questions, difficulty patterns, and high-frequency topics.`}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">
                  Community
                </p>
                <p className="text-sm font-bold">12.5k+ Prepared</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Star className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">
                  Accuracy
                </p>
                <p className="text-sm font-bold">94% Hit Rate</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">
                  Last Updated
                </p>
                <p className="text-sm font-bold">2 days ago</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all duration-200 flex items-center gap-2 group shadow-xl shadow-white/5">
              Explore Questions
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
