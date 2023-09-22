import React from "react";

//import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const witchDataHighLight = (Component) => {
  const HOCComponent = (props) => {
    let highlight =
      props.id === Number(props.currentId)
        ? { backgroundColor: "#009dd3", color: "#fff" }
        : null;

    return <Component key={usid.rand()} {...props} btnStyle={highlight} />;
  };
  HOCComponent.displayName = "wrapped";

  return HOCComponent;
};
export default witchDataHighLight;
