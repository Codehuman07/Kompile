import Navbar from "../../components/Navbar";
import GridComponent from "../../components/GridComponent";
import Footer from "../../components/Footer"
export default function LandingPage() {
  const companies = [
    { name: "Google", desc: "Get interview-ready with Google's top DSA problems", icon: "G" },
    { name: "Amazon", desc: "Focused Amazon DSA questions and interview patterns", icon: "A" },
    { name: "Meta", desc: "Handpicked Meta problems for engineering roles", icon: "M" },
    { name: "Microsoft", desc: "Master the Microsoft technical interview cycle", icon: "M" },
    { name: "Apple", desc: "Top Apple interview questions and system design", icon: "A" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <Navbar />
      <GridComponent>
        {/* HERO SECTION */}
        <section className="text-center px-6 pt-20 pb-10">
          <h1 className="text-7xl font-bold mb-4 text-white uppercase">TRACK, ANALYZE & SHARE</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            <span className="text-orange-500 font-semibold">Kompile</span> helps you navigate and track your coding journey to success
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="border border-gray-600 px-5 py-2 rounded-lg hover:bg-gray-800 transition text-white">Profile Tracker</button>
            <button className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition text-white">Company-Wise Kit →</button>
          </div>

          <div className="flex justify-center mt-16 px-4">
            <div className="relative">
              {/* DESKTOP IMAGE - Hidden on mobile */}
              <img src="../../assets/landingpage/Kompile (5) 1.png" alt="dashboard" className="hidden md:block w-[900px] max-w-full rounded-2xl shadow-xl border border-white" />
              {/* MOBILE IMAGE - Zoomed and Cropped to remove all empty margins */}
              <div className="md:absolute md:bottom-[-80px] md:right-[-40px] flex justify-center rounded-[2.5rem] shadow-[0_0_50px_rgba(14,165,233,0.4),0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a]">
                  <img src="../../assets/landingpage/codolio card.png" alt="mobile" className="w-[240px] aspect-[9/17] object-cover object-top scale-[1.25] translate-y-[2%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY SECTION - Infinite Slider */}
        <section className="py-20 overflow-hidden">
          <div className="px-10 mb-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white uppercase">
              EXPLORE <span className="text-orange-500">COMPANY-WISE</span> SHEETS
            </h2>
            <p className="text-center text-gray-400 mt-2">Master DSA with curated questions from top tech giants</p>
          </div>

          <div className="relative">
            {/* Left/Right Fades for smooth edge transition */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee flex gap-6 py-4">
              {[...companies, ...companies].map((company, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl min-w-[300px] transition-all duration-300 backdrop-blur-md hover:border-orange-500/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-xl border border-orange-500/30">
                      {company.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{company.desc}</p>
                  <button className="mt-auto text-orange-500 text-sm font-semibold hover:underline text-left">
                    View Sheet →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </GridComponent>
      <Footer />
    </>
  );
}
