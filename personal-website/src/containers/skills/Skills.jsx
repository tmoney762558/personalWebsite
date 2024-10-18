import React from "react";
import "./skills.css";
import { SkillBox } from "../../components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";


const Skills = () => {
  const skillArr = [
    {
      tech: "HTML",
      icon: <FaHtml5 color="orangeRed" fontSize="1.7rem"></FaHtml5>,
      level: "Advanced",
    },
    {
      tech: "CSS",
      icon: <FaCss3 color="aqua" fontSize="1.7rem"></FaCss3>,
      level: "Advanced",
    },
    {
      tech: "JavaScript",
      icon: <IoLogoJavascript color="orange" fontSize="1.7rem"></IoLogoJavascript>,
      level: "Intermediate",
    },
    {
      tech: "React",
      icon: <FaReact color="aqua" fontSize="1.7rem"></FaReact>,
      level: "Intermediate",
    },
    {
      tech: "Tailwind",
      icon: <RiTailwindCssFill color="aqua" fontSize="1.7rem"></RiTailwindCssFill>,
      level: "Beginner",
    },
    {
      tech: "NodeJs",
      icon: <FaNodeJs color="green" fontSize="1.7rem"></FaNodeJs>,
      level: "Beginner",
    },
  ];

  return (
    <div className="skills section__padding" id="skills">
      <div className="skills__content">
        <div className="skills__header">
          <h2 className="emph__gradient">Skills</h2>
        </div>
        <div className="skills__cards">
          {skillArr.map((skill, index) => (
            <SkillBox
              key={index}
              tech={skill.tech}
              icon={skill.icon}
              level={`Level: ${skill.level}`}
            ></SkillBox>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Skills;
