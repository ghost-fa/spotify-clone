import React from "react";
import "./Body.css";
import Header from "./Header";

function Body(spotify) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="bod__info">
        <img src="https://i.scdn.co/image/6683aad217c1" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description....</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
