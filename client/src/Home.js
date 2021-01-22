import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <div>
      <img
        src={require("./assets/images/coffeehouse.png")}
        width="100%"
        height="100%"
        alt="Interior storefront view"
      />
    </div>
    <div className="album py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Hot Drinks</h2>
          <Link to="/HotDrinks">
              <div className="card mb-4 shadow-sm">
                <img
                  src={require("./assets/images/hot.png")}
                  width="100%"
                  height="100%"
                  alt="Hot Drinks"
                />
              </div>
            </Link>
          </div>
          <div className="col-md-4">
          <h2>All Drinks</h2>
            <Link to="/ShopAll">
              <div className="card mb-4 shadow-sm">
                <a href="/ShopAll">
                  <img
                    src={require("./assets/images/all.png")}
                    width="100%"
                    height="100%"
                    alt="All Drinks"
                  />
                </a>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
          <h2>Cold Drinks</h2>
            <Link to="/ColdDrinks">
              <div className="card mb-4 shadow-sm">
                <img
                  src={require("./assets/images/cold.png")}
                  width="100%"
                  height="100%"
                  alt="Cold Drinks"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
