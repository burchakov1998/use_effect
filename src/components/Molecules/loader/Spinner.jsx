import React from "react";

const Spinner = (data) => {
 // console.log(data, "spinner");
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <div className={"spinner-wrapper active"}>
      <svg
        className="spinner"
        width={"35px"}
        height={"35px"}
        viewBox={"0 0 66 66"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <circle
          className="path"
          fill={"none"}
          strokeWidth={"6"}
          strokeLinecap={"round"}
          cx={"33"}
          cy={"33"}
          r={"30"}
        ></circle>
      </svg>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
