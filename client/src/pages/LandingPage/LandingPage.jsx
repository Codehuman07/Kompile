import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import GridComponent from "../../components/GridComponent";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <GridComponent>
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-8xl text-white font-bold">Welcome to Kom<span className="text-orange-500">pile</span></h1>
        </div>
      </GridComponent>
    </>
  );
}
