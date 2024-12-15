import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../store/AuthProvider";

const Header: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <Link to="/home">
          <p>Book Adda</p>
        </Link>
      </div>
      {isAuthenticated ? (
        <div className="headerButtons">
          <div className="addMovieCTA">
            <Link to="/reading-list">
              <button className="addMovieButton">Reading List</button>
            </Link>
          </div>
          <Link to="/profile/:username">
            <div className="addReviewCTA">
              <button className="addReviewButton">Profile</button>
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
