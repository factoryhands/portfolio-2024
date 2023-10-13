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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col" style={{ margin: "24px" }}>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <MyAvatar />
        </div>
        <div className="col-span-9">
          <h1>A hand in the ephemeral, roots in the tangible</h1>
          <p>
            Currently a product designer at Replit. Formerly Dropbox and Google.
            In another era Proctor & Gamble, American Eagle, and Abercrombie &
            Fitch. My expertise lies in finding what people desire and then
            building it.
          </p>
        </div>
      </div>
      <ProjectPreviewPaneContainer />
    </div>
  );
}


export { HomePage };