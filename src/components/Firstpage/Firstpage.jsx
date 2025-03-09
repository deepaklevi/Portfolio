import React from "react";
import "./FirstImage.css";
import myPhoto from "/images/myphoto.jpg"; // Ensure this path is correct
import { FaLinkedin } from "react-icons/fa";

const Firstpage = () => {
  return (
    <div className="main_page">
      <div className="main_pageContent">
        {/* Text Section */}
        <div className="main_pageContent1">
          <h1 className="animated-name">Deepak</h1>
          <p className="animated-text">Portfolio Website</p>
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <FaLinkedin className="linkedin-icon" /> Connect with me
          </a>
        </div>

        {/* Image Section */}
        <img className="myphoto animated-image" src={myPhoto} alt="Deepak's Profile Photo" />
      </div>
    </div>
  );
};

export default Firstpage;
