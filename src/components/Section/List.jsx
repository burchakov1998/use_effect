import React from "react";
import ListItem from "./ListItem";
import witchDataHighLight from "../HOCs/witchHighLight";

const USID = require("usid");
const usid = new USID();

export default function List(props) {
  // console.log(props, 'listData')
  if (!props) {
    return;
  }

  return (
    <React.Fragment>
      <ul key={usid.rand()} className="user-list">
        {props.data.map((item) => {
          return (
            <ListItemHOC
              key={usid.rand()}
              type="user-list"
              {...item}
              currentId={props.curId}
              clickHandler={props.clickHandler}
            ></ListItemHOC>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

const ListItemHOC = witchDataHighLight(ListItem);
