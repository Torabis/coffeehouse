import React from "react";

export const About = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6"></div>
      </div>
    </div>
    <div className="album py-5 bg-white">
      <div className="container">
        <h2 className="text-center my-5">About</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-6">
              <p className="text-center">
                <br />
                <img
                  src={require("../assets/images/about.png")}
                  className="text-center border"
                  width="85%"
                  alt="Owner"
                />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
