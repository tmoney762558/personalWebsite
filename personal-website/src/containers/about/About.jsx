import React from "react";
import "./about.css";
import aboutImage1 from "../../assets/aboutImage1.jpg"

const About = () => {
  return (
    <div className="about section__padding" id="about">
      <div className="about__content">
        <div className="about__content-text">
          <h2 className="emph__gradient">About me</h2>
          <p>
            Hello there! My name is Tyler and I enjoy making stylish, responsive
            sites for the web. I&apos;ve been coding for more than a year now
            and have recently shifted my sights onto web development. I take
            pride in writing clean, reusable code that comes together to make
            something great.
          </p>
        </div>
        <div className="about__content-images">
          <img src={aboutImage1}></img>
        </div>
      </div>
    </div>
  );
};

export default About;
