import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Made with ❤️ by{" "}
        <a
          className="footer-anchor"
          href="https://www.linkedin.com/in/utkkkarshhh"
        >
          Utkarsh Bhardwaj
        </a>
      </p>
    </div>
  );
};

export default Footer;
