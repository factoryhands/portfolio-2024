import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import MyAvatar from "./MyAvatar";
import ProjectPreviewPane from "./ProjectPreviewPane";
import "./App.css";
import HomePageContent from "./HomePageContent";
import ProjectPreviewPaneContainer from "./ProjectPreviewPaneContainer";
import HomeHeader from "./HomeHeader";

function HomePage() {
  return (
    <div className="flex flex-col" style={{ margin: "24px" }}>
      <ProjectPreviewPaneContainer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <HomeHeader />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export { HomePage };