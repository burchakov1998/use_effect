import React from "react";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

export const Li = ({ className, children }) => {
  return (
    <React.Fragment>
      <li className={className + "-item item-list"} key={usid.rand()}>
        <div className={className + "-item-wrap"} key={usid.rand()}>
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
      </li>
    </React.Fragment>
  );
};

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className="card-title">{title}</h5>
    </>
  );
};
CardTitle.propTypes = {
  title: PropTypes.string,
};

export const CardText = ({ text }) => {
  return (
    <>
      <div className="card-text">{text}</div>
    </>
  );
};
CardText.propTypes = {
  text: PropTypes.string,
};

export const UrlImage = ({ url }) => {
  if (!url) {
    return;
  }
  return (
    <>
      <div className="image-wrapper">
        <img className="card-image" src={url} alt="" />
      </div>
    </>
  );
};
UrlImage.propTypes = {
  url: PropTypes.string,
};

export const Button = (props) => {
  return (
    <>
      <button
        id={props.id}
        className={props.type + "_btn"}
        onClick={props.clickHandler ? () => props.clickHandler(props.id) : null}
        style={props.btnStyle}
      >
        {props.text}
      </button>
    </>
  );
};

UrlImage.propTypes = {
  text: PropTypes.string,
};
