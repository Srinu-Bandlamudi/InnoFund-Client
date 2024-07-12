import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Signin';
import Compaign from './components/Campaign';
import Campaign_2 from './components/Campaign_2';
import img1 from './components/headerimg3.jpg'; // Import your image file
import Footer from './components/Footer';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/Contact';
import TermsConditions from './components/TermsConditions';
import Sitemap from './components/Sitemap';
import PrivacyPolicy from './components/PrivacyPolicy';
import Project from './components/Project';
import useAuthStore from './components/useStore';
import MyProfile from './components/MyProfile';
function HeaderImage() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return isHomePage ? (
    <img src={img1} alt="Header Image" className="header-image h-55 object-cover w-full" />
  ) : null;
}

function HomeContent() {
  return (
    <>
      <AboutUs />

      {/* <Footer /> */}
      <TermsConditions/>
      {/* <Sitemap/> */}
      <PrivacyPolicy/>
      <ContactUs/>
    </>
  );
}

function App() {
  const token = useAuthStore((state) => state.token);
  console.log("tokkkkkkkkkkkkkkeeeeeeee",token);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Navbar />
      <HeaderImage />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campaignform" element={<Compaign />} />
        <Route path="/nextcamp" element={<Campaign_2 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      {isHomePage && <HomeContent />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
