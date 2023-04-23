import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel: +91 8923720383">
                  +91 8923720383
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Trdae </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input 
                  type="text"
                  className="form-control" 
                  placeholder="Searcch Product Here..."
                  aria-label="Searcch Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-froup-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
