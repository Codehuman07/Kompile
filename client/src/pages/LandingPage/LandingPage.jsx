import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-[#141413] flex items-center justify-center">
        <h1 className="text-8xl text-white font-bold">Welcome to Kompile</h1>
      </div>
    </>
  );
}
