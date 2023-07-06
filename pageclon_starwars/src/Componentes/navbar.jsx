import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid mainNavbar">
      <div className="row">
        <div className="col-md-4 text-start">
          <div className="left_sec">
            <ul className="list">
              <a href="https://www.facebook.com">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="https://www.twitter.com">
                <i class="bi bi-twitter"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div type="button">
            <Link to="/">
              <img
                className="logoNavbar"
                alt="Star Wars"
                src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              ></img>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="right_sec">
            <div className="search_group" style={{paddingTop:"0.3em"}}>
              <i className="bi bi-search" style={{ fontSize: "1.4em" }}></i>
              <Link href="/" style={{ paddingLeft: "0.25em"}}>
                Search
              </Link>
            </div>
            <div className="login_group">
              <i className="bi bi-person"></i>
              <Link to="/login" style={{ paddingLeft: "0.25em"}}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ">
          <ul className="list-group list-group-horizontal sub_navbar ">
            <li className="list-group-item">
              <Link href="/">NEWS+FEATURES</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">VIDEO</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">FILMS</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">SERIES</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">INTERACTIVE</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">COMUNITY</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">DATABANK</Link>
            </li>
            <li className="list-group-item">
              <Link href="/">DISNEY+</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-12 mainNavFooter text-center"
        >
          <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
        </div>
      </div>
    </div>
  );
}