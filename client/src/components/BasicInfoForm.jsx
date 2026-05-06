import React from "react";
import { X, Edit2 } from "lucide-react";

function BasicInfoForm() {
  return (
    <div className="w-full text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Basic Info</h1>
        <p className="text-zinc-400">You can manage your details here.</p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-6 text-zinc-200">Basic Details</h2>
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover" 
                />
                <button className="absolute bottom-0 right-0 p-1.5 bg-[#2e2e2e] rounded-full border border-black hover:bg-[#3e3e3e]">
                  <Edit2 size={14} className="text-zinc-400" />
                </button>
                <button className="absolute bottom-0 left-0 p-1.5 bg-[#2e2e2e] rounded-full border border-black hover:bg-[#3e3e3e]">
                  <X size={14} className="text-zinc-400" />
                </button>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-400 mb-2">
                  Codolio Id: <span className="text-blue-500 font-medium ml-2">Sarthak229</span>
                </p>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">First Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#f89f1b]" defaultValue="Sarthak" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#f89f1b]" defaultValue="Gupta" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 text-zinc-500 cursor-not-allowed" disabled defaultValue="guptasarthak229@gmail.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio (Max 200 Characters)</label>
              <textarea className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:border-[#f89f1b]"></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:border-[#f89f1b]">
                  <option>India</option>
                  <option>United States</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tech Stack <span className="text-red-500">*</span></label>
              <input type="text" className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#f89f1b]" placeholder="e.g. React, Node.js, C++ (comma separated)" defaultValue="React, Node.js, Express, MongoDB, Python, C++, Tailwind CSS" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6 text-zinc-200">Educational Details</h2>
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">School / College / University <span className="text-red-500">*</span></label>
              <input type="text" className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#f89f1b]" defaultValue="Rishihood University" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Degree <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:border-[#f89f1b]">
                  <option>Bachelor of Technology</option>
                  <option>Bachelor of Science</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Branch <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:border-[#f89f1b]">
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Year of Graduation <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:border-[#f89f1b]">
                  <option>2029</option>
                  <option>2028</option>
                  <option>2027</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BasicInfoForm;
