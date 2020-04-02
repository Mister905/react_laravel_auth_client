import React from "react";

const NavSpinner = () => {
  return (
    <div className="preloader-wrapper small custom-small-preloader active">
      <div className="spinner-layer custom-small-spinner-layer">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default NavSpinner;
