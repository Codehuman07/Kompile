import GridComponent from "../../components/GridComponent";
import Navbar from "../../components/Navbar";
import { UserCog } from "lucide-react";
import { NavLink } from "react-router-dom";
function Profile() {
  return (
    <>
      <Navbar />
      <GridComponent>
        <div className="w-full min-h-screen pt-[88px] pb-6 px-4 md:px-6 max-w-[1600px] mx-auto">
          <section className="flex justify-between gap-6 h-full min-h-[calc(100vh-120px)]">
            <div className="w-1/3 bg-[#141414] rounded-xl h-full flex flex-col justify-between border border-[#2e2e2e]">
              <div className="w-full p-4 border-b border-[#2e2e2e]"></div>
              <div className="w-full p-4 border-b border-[#2e2e2e]"></div>
              <div className="w-full p-4 border-b border-[#2e2e2e]"></div>
              <div className="w-full p-4"></div>
            </div>
            <div className="w-2/3 bg-[#141414] rounded-xl h-full border border-[#2e2e2e] p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl">Profile</p>
                </div>
                <div>
                  <NavLink to="/user_data">
                    <UserCog size={24} />
                  </NavLink>
                </div>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </GridComponent>
    </>
  );
}

export default Profile;
