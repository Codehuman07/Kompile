import { Routes, Route } from "react-router-dom";
import Home from "./pages/app/Home.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import CompanyWiseKit from "./pages/CompanyWiseKit/CompanyWiseKit.jsx";
import Contest from "./pages/event/Contest.jsx";
import UserData from "./components/UserData.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/company" element={<CompanyWiseKit />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events" element={<Contest />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user_data" element={<UserData />} />
    </Routes>
  );
}

export default App;
