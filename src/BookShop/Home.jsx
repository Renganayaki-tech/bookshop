import React from "react";
import './Home.css'
import Logo from "./logo.png";
import Img2 from './slider.webp'
import Icon1 from './icon-4.png'
import Icon2 from './securePayment.png'
import Icon3 from './price.png'

import { Link, NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="main">
      {/* Free Shipping Banner */}
      <div className="free mb-3 text-center bg-dark p-1 text-light">
        <h6>FREE SHIPPING & RETURN MONEY BACK GUARANTEE - ONLINE SUPPORT 24/7</h6>
      </div>

      {/* Menu Section */}
      <div className="menu d-flex flex-wrap justify-content-between align-items-center p-3">
        {/* Logo */}
        <div className="col-12 col-md-3 text-center mb-2 mb-md-0">
          <img src={Logo} alt="Logo" className="img-fluid" style={{ maxHeight: "30px" }} />
        </div>

        {/* Search Input */}
        <div className="col-12 col-md-5 mb-2 mb-md-0">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* Buttons Section */}
        <div className="col-12 col-md-3 d-flex justify-content-around">
          {/* Shopping Cart Button */}
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart"
          >
            <i className="bi bi-cart3" style={{ fontSize: "30px" }}></i>
          </button>

          {/* Shopping Cart Offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasCart"
            aria-labelledby="offcanvasCartLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasCartLabel">
                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p>Your Cart is currently empty.</p>
            </div>
          </div>

          {/* More Info Button */}
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasInfo"
            aria-controls="offcanvasInfo"
          >
            <i className="bi bi-person-lines-fill" style={{ fontSize: "30px" }}></i>
          </button>

          {/* More Info Offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasInfo"
            aria-labelledby="offcanvasInfoLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasInfoLabel">
                More Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="menubar">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            {/* Toggler Button for Mobile View */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto ">
                {/* Home */}
                <li className="nav-item mx-5">
                  <NavLink className="nav-link text-light" activeClassName="active" to="/" >
                    Home
                  </NavLink>
                </li>

                {/* Categories */}
                <li className="nav-item mx-5">
                  <NavLink className="nav-link text-light" activeClassName="active" to="/categories">
                    Categories
                  </NavLink>
                </li>

                {/* BestSeller */}
                <li className="nav-item mx-5">
                  <NavLink className="nav-link text-light"activeClassName="active" to="/bestseller">
                    BestSeller
                  </NavLink>
                </li>

                {/* Pages Dropdown */}
                <li className="nav-item dropdown mx-5" activeClassName="active">
                  <button
                    className="nav-link dropdown-toggle text-light"
                    id="pagesDropdown"
                    // role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  Pages
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                    <li>
                      <NavLink className="dropdown-item"activeClassName="active" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item"activeClassName="active" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item"activeClassName="active" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Image Section */}
      <div className="col-12 position-relative w-100 slider-img">
          <img src={Img2} alt="Slider" className="img-fluid w-100" />
      </div>

      <div className="text-section position-absolute translate-middle  ">
        <div className="row">
          {/* TEXT SECTION */}
          <div className="col-12 col-md-6">
            <h2 className="content-title font-weight-bold text-dark">Year end sale</h2>
            <h1 className="text-danger font-weight-bold">Get 70% off For  All Design Books</h1><br />
            <h6 className="text-dark font-weight-bold ">
              Donec sodales sagitis magna.SedMaecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venatis faucibus. Nullam quis ante.
            </h6>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="shop-now ">
            <button className="btn btn-danger">shop now</button>
          </div>
        </div>


      </div>
      <div className="row bg-light pt-4">
        <div className="col-12 col-md-4 text-center">
          <div className="free d-flex">
            <img src={Icon1} alt="" height={37} />
            <div className="free-text">
              <h5>FREE SHIPPING</h5>
              <h6 className="text-secondary ">Order over $100</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <div className="lock d-flex">
            <img src={Icon2} alt='' height={49} />
            <div className="lock-text">
              <h5>SECURE PAYMENT</h5>
              <h6 className="text-secondary f-weight-bold">100% secure payment</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <div className="price d-flex">
            <img src={Icon3} alt="" height={40} />
            <div className="price-text">
              <h5>BEST PRICE</h5>
              <h6 className="text-secondary f-weight-bold">Guaranteed Price</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-5 p-3">
        <h2 className="new-arriv position-relative d-inline-block">NEW ARRIVALS</h2>
      </div>
      <div className="row mt-5 p-3">
        <div class="d-flex justify-content-center gap-3">
          <div className="col-auto"><Link to={'/home'} type="button" className="btn active click btn-outline-danger" >All</Link></div>
          <div className="col-auto"><Link to={'/home'} type="button" className="btn click btn-outline-danger">Cook book</Link></div>
          <div className="col-auto"><button type="button" className="btn click btn-outline-danger">History</button></div>
          <div className="col-auto"><button type="button" className="btn click btn-outline-danger">Fantacy</button></div>
          <div className="col-auto"><button type="button" className="btn click btn-outline-danger">Romance</button></div>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>

    </div>
  );
}
