import React from "react";
import "./header.css";
import headerImage1 from "../../assets/headerImage1.jpg";
import headerImage2 from "../../assets/headerImage2.jpg";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__content">
        <div className="header__content-text">
          <h2 className="primary__text">
            Hello, I&apos;m Tyler, and I&apos;m a
            <span className="emph__gradient"> Front-End Web Developer.</span>
          </h2>
          <h3 className="secondary__text">
            You imagine it, I&apos;ll make it reality.
          </h3>
        </div>
        <div className="header__content-images">
          <img src={headerImage2}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
