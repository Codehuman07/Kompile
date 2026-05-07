import GridComponent from "./GridComponent.jsx";
import Navbar from "./Navbar.jsx";
import { useState, useEffect } from "react";
import DataInputCard from "./DataInputCard.jsx";
import { ArrowBigLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import leetcodeLogo from "../assets/platformLogos/leetcode-logo.png";
import gfgLogo from "../assets/platformLogos/GeeksForGeeks.png";
import codeforcesLogo from "../assets/platformLogos/codeforces-logo.png";
import hackerrankLogo from "../assets/platformLogos/hackerrank-logo.png";
import githubLogo from "../assets/platformLogos/github-logo.png";

function UserData() {
  const [PlatformUserName, setPlatformUserName] = useState({
    leetcode_username: "",
    codestudio_username: "",
    geeksforgeeks_username: "",
    interviewbit_username: "",
    codechef_username: "",
    codeforces_username: "",
    hackerrank_username: "",
    atcoder_username: "",
  });

  const platforms = [
    {
      name: "LeetCode",
      logo: leetcodeLogo,
      link: "https://leetcode.com/u/",
      placeholder: "johndoe",
    },
    {
      name: "GeeksForGeeks",
      logo: gfgLogo,
      link: "https://www.geeksforgeeks.org/user/",
      placeholder: "johndoe",
    },

    // {
    //   name: "CodeChef",
    //   logo: "codechef-logo.png",
    //   link: "https://www.codechef.com/users/",
    //   placeholder: "johndoe",
    // },
    {
      name: "CodeForces",
      logo: codeforcesLogo,
      link: "https://codeforces.com/profile/",
      placeholder: "johndoe",
    },
    {
      name: "HackerRank",
      logo: hackerrankLogo,
      link: "https://www.hackerrank.com/profile/",
      placeholder: "johndoe",
    },
    // {
    //   name: "AtCoder",
    //   logo: "atcoder-logo.png",
    //   link: "https://atcoder.jp/users/",
    //   placeholder: "johndoe",
    // },
    {
      name: "GitHub",
      logo: githubLogo,
      link: "https://github.com/",
      placeholder: "johndoe",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlatformUserName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (platform) => {
    console.log(`Submitted for ${platform.name}`);
  };

  const devPlatforms = platforms.filter((p) => p.name === "GitHub");
  const problemSolvingPlatforms = platforms.filter((p) => p.name !== "GitHub");

  return (
    <>
      <Navbar />
      <GridComponent>
        <div className="w-full min-h-[calc(100vh-80px)] pt-25 pb-10 px-4 md:px-8 max-w-300 mx-auto text-white">
          <NavLink to="/profile" className="w-fit block mb-4">
            <ArrowBigLeft className="h-12 w-12 text-orange-500 hover:bg-orange-500/20 hover:rounded-full hover:p-1 transition absolute top-32 left-32" />
          </NavLink>
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Platforms</h1>
            <p className="text-zinc-400">
              You can update and verify your platform details here.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-zinc-200">
                Development
              </h2>
              <div className="space-y-2">
                {devPlatforms.map((platform) => (
                  <DataInputCard
                    key={platform.name}
                    logo={platform.logo}
                    name={platform.name}
                    link={platform.link}
                    placeholder={platform.placeholder}
                    value={
                      PlatformUserName[
                        `${platform.name.toLowerCase()}_username`
                      ] || ""
                    }
                    onChange={handleInputChange}
                    onSubmit={() => handleSubmit(platform)}
                    showInput={true}
                    buttonText="Submit"
                  />
                ))}
              </div>
            </section>

            <div className="h-px bg-[#2e2e2e] w-full" />

            <section>
              <h2 className="text-xl font-semibold mb-4 text-zinc-200">
                Problem Solving
              </h2>
              <div className="space-y-2">
                {problemSolvingPlatforms.map((platform) => (
                  <DataInputCard
                    key={platform.name}
                    logo={platform.logo}
                    name={platform.name}
                    link={platform.link}
                    placeholder={platform.placeholder}
                    value={
                      PlatformUserName[
                        `${platform.name.toLowerCase()}_username`
                      ] || ""
                    }
                    onChange={handleInputChange}
                    onSubmit={() => handleSubmit(platform)}
                    showInput={true}
                    buttonText="Submit"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </GridComponent>
    </>
  );
}

export default UserData;
