import Navbar from "../../components/Navbar";
import GridComponent from "../../components/GridComponent";
import { Footer } from "../../components/CompanyWiseKit/Footer";

export default function LandingPage() {
  const companies = [
    {
      name: "Google",
      desc: "Get interview-ready with Google's top DSA problems",
      icon: "G",
    },
    {
      name: "Amazon",
      desc: "Focused Amazon DSA questions and interview patterns",
      icon: "A",
    },
    {
      name: "Meta",
      desc: "Handpicked Meta problems for engineering roles",
      icon: "M",
    },
    {
      name: "Microsoft",
      desc: "Master the Microsoft technical interview cycle",
      icon: "M",
    },
    {
      name: "Apple",
      desc: "Top Apple interview questions and system design",
      icon: "A",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <GridComponent>
        <div className="pt-24 pb-16 px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Track, Analyze <span className="text-orange-500">&</span> Share
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            <span className="text-orange-500 font-bold">Kompile</span> helps you
            navigate and track your coding journey to success
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <button className="border border-gray-700 px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Profile Tracker
            </button>
            <button className="bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600 transition font-semibold">
              Company-Wise Kit →
            </button>
          </div>

          <div className="flex justify-center mt-12 mb-20 px-4">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.1)] bg-gray-900/50 backdrop-blur-sm">
                <img
                  src="../../../Assets/landingPage/Kompile (5) 1.png"
                  alt="dashboard"
                  className="hidden md:block w-full max-w-[950px] opacity-95"
                />
                <img
                  src="../../../Assets/landingPage/Kompile (5) 1.png"
                  alt="dashboard-mobile"
                  className="block md:hidden w-full max-w-sm rounded-xl"
                />
              </div>

              <div className="md:absolute md:-bottom-12 md:-right-12 flex justify-center mt-10 md:mt-0">
                <div className="border-[6px] border-[#1a1a1a] rounded-[2.8rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black ring-1 ring-white/10">
                  <img
                    src="../../../Assets/landingPage/codolio card.png"
                    alt="mobile"
                    className="w-[210px] h-auto object-cover scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 overflow-hidden bg-transparent">
          <div className="text-center px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">
              Explore <span className="text-orange-500">Company-Wise</span>{" "}
              Sheets
            </h2>
            <p className="text-gray-400">
              Master DSA with curated questions from top tech giants
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10"></div>

            <div className="animate-marquee flex gap-6 py-8">
              {[...companies, ...companies].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl min-w-[320px] hover:border-orange-500 transition-all hover:translate-y-[-5px] shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <button className="text-orange-500 font-bold hover:underline text-sm uppercase tracking-wide">
                    View Sheet →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Favourite Platforms
            </h2>
            <p className="text-gray-400 text-lg">
              Streamlined in{" "}
              <span className="text-orange-500 font-semibold">Codolio</span> to
              simplify your coding journey
            </p>
          </div>

          <div className="flex justify-center mb-24">
            <img
              src="../../../Assets/landingPage/codolio-platforms.png"
              alt="platforms"
              className="w-full max-w-2xl drop-shadow-[0_0_30px_rgba(249,115,22,0.1)]"
            />
          </div>

          <div className="text-center max-w-5xl mx-auto mb-24">
            <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Simplify Your <span className="text-orange-500">Preparation</span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Say goodbye to last-minute stress. Track all your questions and
              notes in one place for easy review and revision.
            </p>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex-1 flex flex-col items-center text-center px-4 py-2 group hover:bg-white/5 rounded-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all shadow-xl">
                  <img
                    src="../../assets/landingpage/workspace-svgrepo-com.svg"
                    alt="icon"
                    className="w-7 h-7 invert opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  My Workspace
                </h4>
                <p className="text-gray-400 text-sm leading-snug">
                  Tag & filter questions for easy organization
                </p>
              </div>

              <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent my-4"></div>

              <div className="flex-1 flex flex-col items-center text-center px-4 py-2 group hover:bg-white/5 rounded-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all shadow-xl">
                  <img
                    src="../../assets/landingpage/tracker.svg"
                    alt="icon"
                    className="w-7 h-7 invert opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Sheet Tracker
                </h4>
                <p className="text-gray-400 text-sm leading-snug">
                  Track all coding sheets in one place
                </p>
              </div>

              <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent my-4"></div>

              <div className="flex-1 flex flex-col items-center text-center px-4 py-2 group hover:bg-white/5 rounded-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all shadow-xl">
                  <img
                    src="../../assets/landingpage/notes.svg"
                    alt="icon"
                    className="w-7 h-7 invert opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Enhanced Notes
                </h4>
                <p className="text-gray-400 text-sm leading-snug">
                  Add detailed notes to questions easily
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold text-lg transition-colors"
              >
                Try Question Tracker <span>→</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-20">
            <img
              src="../../../Assets/landingPage/grid.png"
              alt="workspace grid"
              className="w-full rounded-xl shadow-2xl opacity-90"
            />
          </div>
        </div>
        <section className="bg-transparent text-white px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                Your <span className="text-orange-500">All-in-One</span> Coding
                Portfolio
              </h2>
              <a
                href="#"
                className="text-blue-500 hover:underline font-semibold flex items-center gap-1"
              >
                Try Profile Tracker →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  See cumulative questions solved
                </p>
                <img
                  src="../../../Assets/landingPage/feature1 (6).png"
                  alt="stats"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-3 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Total Active Days
                </p>
                <img
                  src="../../../Assets/landingPage/feature1 (5).png"
                  alt="active days"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Track your streak,across multiple platforms
                </p>
                <img
                  src="../../../Assets/landingPage/feature1 (4).png"
                  alt="heatmap"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Identify your strengths and areas of improvement
                </p>
                <img
                  src="../../../Assets/landingPage/feature1 (1).png"
                  alt="dsa analysis"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Get classification of Problems solved
                </p>
                <img
                  src="../../../Assets/landingPage/feature1.png"
                  alt="classification"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Monitor your ratings in contests over time
                </p>
                <img
                  src="../../../Assets/landingPage/Contest Graph.png"
                  alt="contest graph"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Showcase your Achievements
                </p>
                <div className="flex flex-col gap-4">
                  <img
                    src="../../../Assets/landingPage/feature1 (7).png"
                    alt="awards"
                    className="w-full"
                  />
                  <img
                    src="../../../Assets/landingPage/feature1 (8).png"
                    alt="rankings"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-transparent text-white px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                Hub for your{" "}
                <span className="text-orange-500">Projects and Dev</span> Stats
              </h2>
              <a
                href="#"
                className="text-blue-500 hover:underline font-semibold flex items-center gap-1"
              >
                Try GitHub Tracker →
              </a>
            </div>

            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-4 mb-8">
              <img
                src="../../../Assets/landingPage/feature1 (7).png"
                alt="github-stats-hub"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-4">
              <img
                src="../../../Assets/landingPage/feature1 (8).png"
                alt="projects-showcase"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>
        <section className="bg-transparent text-white px-6 py-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-6 tracking-tight leading-tight">
                Never Miss a Contest
              </h2>
              <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                Track coding contests and set reminders with just one click.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline font-bold text-lg flex items-center gap-2"
              >
                Try Event Tracker →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="p-2 bg-gray-900/40 border border-gray-800 rounded-[2rem] shadow-2xl">
                <img
                  src="../../assets/landingpage/visibility.png"
                  alt="calendar"
                  className="w-full h-auto rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </GridComponent>
      <Footer />
    </div>
  );
}
