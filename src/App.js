import "./App.css";
import "./main.css";
import "./components/Section/list.css";
import "./components/Molecules/loader/spinner.css";
import "./components/Details/details.css";
import React, { useState, useEffect } from "react";
import List from "./components/Section/List";
import Details from "./components/Details/Details";
import Spinner from "./components/Molecules/loader/Spinner";

const USID = require("usid");
const usid = new USID();

export default function App() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [currentUser, setCurrentUser] = useState([]);

  const fetchData = (url, foo) => {
    if (selectedId) setLoading(true);

    const ac = new AbortController();
    fetch(url, { signal: ac.signal })
      .then((response) => response.json())
      .then((data) => foo((prev) => ({ ...prev, data })))
      .catch((error) => console.log(error.message))
      .finally(() => {
        setTimeout(() => setLoading(false), 2000);
      });

    return () => {
      ac.abort();
    };
  };

  useEffect(() => {
    fetchData(process.env.REACT_APP_BASE_URL + "users.json", setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!selectedId) {
      return;
    }

    fetchData(
      `${process.env.REACT_APP_BASE_URL}${selectedId}.json`,
      setCurrentUser
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const clickHandler = (id) => {
    if (id !== selectedId) setSelectedId(id);
  };

  return (
    <div key={usid.rand()} className="container">
      {isLoading && <Spinner key={usid.rand()} type={"loading"}></Spinner>}
      {data && (
        <List
          key={usid.rand()}
          {...data}
          curId={selectedId}
          clickHandler={clickHandler}
        ></List>
      )}
      {!isLoading && selectedId && (
        <Details
          key={usid.rand()}
          {...currentUser}
          className={"current-user"}
        ></Details>
      )}
    </div>
  );
}

/** */
