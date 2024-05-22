import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this is imported in the relevant file

const ProgressBar = ({ score, level }) => {
 const maxValue = level * 100;
 const ratio = (score / maxValue) * 100;
 return (
  <>
   <div className="progress" style={{ width: "100%", height: "1rem" }}>
    <div
     className="progress-bar progress-bar-striped progress-bar-animated
        bg-success"
     role="progressbar"
     style={{ width: `${ratio}%` }}
     aria-valuenow={score}
     aria-valuemin="0"
     aria-valuemax={maxValue}
    >{`${ratio}%`}</div>
   </div>
   <h4>{`${score}점`}</h4>
  </>
 );
};

export default ProgressBar;
