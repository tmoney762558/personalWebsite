import React from "react";
import PropTypes from "prop-types";
import "./skillBox.css";

const SkillBox = ({ tech, icon, level }) => {
  return (
    <div className="skillBox">
      <div className="skillBox__header">
        <h3>{tech}</h3>
        {icon}
      </div>
      <div className="skillBox__content">
        <p>{level}</p>
      </div>
    </div>
  );
};

SkillBox.propTypes = {
  tech: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  level: PropTypes.string.isRequired,
};

export default SkillBox;
