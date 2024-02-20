import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2>Experience the height of fashion</h2>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Products</Link>
      </button>
    </article>
  );
}

export default HomeInfo;
