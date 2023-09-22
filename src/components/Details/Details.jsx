import React from "react";
import { UrlImage, CardText, CardTitle } from "../Atoms/CardContent";

const USID = require("usid");
const usid = new USID();

const Details = ({ data, className }) => {
  if (!data) {
    return;
  }
  return (
    <React.Fragment>
      <div id={data.id} className={className + "-card"}>
        <div id={data.id} className={className + "-card-header"}>
          <UrlImage key={usid.rand()} url={data.avatar} />
        </div>
        <div id={data.id} className={className + "-card-content"}>
          <CardTitle key={usid.rand()} title={data.name} />
          <CardText
            key={usid.rand()}
            text={"City:" + data.details.city}
          ></CardText>
          <CardText
            key={usid.rand()}
            text={"Company :" + data.details.company}
          ></CardText>
          <CardText
            key={usid.rand()}
            text={"Position :" + data.details.position}
          ></CardText>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
