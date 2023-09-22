import React from "react";
import { Li, Button } from "../Atoms/CardContent";

const USID = require("usid");
const usid = new USID();
export default function ListItem(props) {
 // console.log(props, "itemList");
  return (
    <React.Fragment>
      <Li key={usid.rand()} className={props.type}>
        <Button
          key={usid.rand()}
          {...props}
          text={props.name}
          
        ></Button>
      </Li>
    </React.Fragment>
  );
}
