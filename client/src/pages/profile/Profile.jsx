import { useState } from "react";
import GridComponent from "../../components/GridComponent";
import Navbar from "../../components/Navbar";
import { UserCog } from "lucide-react";
import { NavLink } from "react-router-dom";
import GithubData from "./GithubData";
import LeetcodeData from "./LeetcodeData";
import ProfileSidebar from "./ProfileSidebar";

function Profile() {
  const [activeTab, setActiveTab] = useState("leetcode");
  // dummydata
  const userData = {
    name: "Sarthak Gupta",
    username: "Sarthak229",

    profileImage: "",

    socialLinks: {
      email: "sarthakgupta229@gmail.com",
      linkedin: "https://linkedin.com/in/sarthak229",
      twitter: "https://x.com/Sarthak229",
      website: "https://sarthak.dev",
      resume: "https://example.com/resume.pdf",
    },

    location: "India",

    university: "Rishihood University",

    stats: {
      leetcode: {
        rating: 1820,
        problemsSolved: 650,
      },

      codeforces: {
        rating: 1450,
        maxRating: 1520,
      },

      github: {
        repositories: 34,
        followers: 120,
      },
    },

    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "C++",
      "Tailwind CSS",
    ],
  };

  return (
    <>
      <Navbar />
      <GridComponent>
        <div className="w-full min-h-screen pt-[88px] pb-6 px-4 md:px-6 max-w-[1600px] mx-auto">
          <section className="flex justify-between items-start gap-6 min-h-[calc(100vh-120px)]">
            {/* left */}
            <ProfileSidebar userData={userData} />

            {/* right */}
            <div className="w-2/3 bg-[#141414] rounded-xl h-full border border-[#2e2e2e] p-6 text-white flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-2xl">Profile</p>
                </div>
                <div>
                  <NavLink to="/user_data">
                    <UserCog size={24} />
                  </NavLink>
                </div>
              </div>

              <div className="flex gap-1 border-b border-[#2e2e2e] mb-6">
                <button
                  onClick={() => setActiveTab("leetcode")}
                  className={`px-5 py-2 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === "leetcode"
                      ? "border-[#f89f1b] text-[#f89f1b]"
                      : "border-transparent text-[#888] hover:text-white"
                  }`}
                >
                  LeetCode
                </button>
                <button
                  onClick={() => setActiveTab("github")}
                  className={`px-5 py-2 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === "github"
                      ? "border-[#f89f1b] text-[#f89f1b]"
                      : "border-transparent text-[#888] hover:text-white"
                  }`}
                >
                  GitHub
                </button>
              </div>

              <div className="flex-1">
                {activeTab === "leetcode" && <LeetcodeData />}
                {activeTab === "github" && <GithubData />}
              </div>
            </div>
          </section>
        </div>
      </GridComponent>
    </>
  );
}

export default Profile;
