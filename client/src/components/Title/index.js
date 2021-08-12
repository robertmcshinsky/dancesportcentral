import React from "react";
import logoV from "../../utils/logo2.mp4";

function Title() {
  return (
    <div>
      <video className="p-3" id="logoVideo" autoPlay>
        <source src={logoV} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Title;
