import React from "react";
import useNetwork from "../Hooks/useNetwork";
import "../App.css";

const Home = () => {
  const networkStatus = useNetwork();
  console.log(networkStatus);
  return (
    <div className="new">
      <h1>This is Applications's Home Page</h1>
      <h2>
        You network status is{" "}
        {networkStatus ? (
          <span className="online">Online</span>
        ) : (
          <span className="offline">Offline</span>
        )}
      </h2>
    </div>
  );
};

export default Home;
