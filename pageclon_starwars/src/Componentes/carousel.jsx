import React from "react";
import "./Carousel.css";
import Separador from "./Separador";

export default function () {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active main-image-container"
            data-bs-interval="10000"
          >
            <img
              src={require("../assets/C1.jpg")}
              className="d-block w-100 main-content-image"
              alt="..."
            />
            <div className="top-left text-over-img-s1">
              <h1>
                <i>AHSOKA</i> PREMIERE DATE
              </h1>
              <h1>REVEALED</h1>
              <p>
                Find out where you can see the upcoming live-action series on
                Disney+
              </p>
              <button type="button" className="yellowButton">
                Read More
              </button>
            </div>
          </div>
          <div
            className="carousel-item main-image-container"
            data-bs-interval="2000"
          >
            <img
              src={require("../assets/C2.jpg")} //When using WebPAck it is necessary to use require to load the image.
              className="d-block w-100 main-content-image"
              alt="..."
            />
            <div className="top-right text-over-img-s1">
              <img src="./assets/logo2.png" width="70%"></img>
              <h1>
                LUCASFILM LEGENDS CELEBRATE{" "}
                <i>INDIANA JONES AND THE DIAL OF DESTINY</i> AT US PREMIERE
              </h1>
              <p>
                See the biggest momments of the night in Lucasfilm.com photo
                gallery.
              </p>
              <div className="buttons-container">
                <button type="button" className="yellowButton">
                  Read More
                </button>
                <button type="button" className="blackButton">
                  GET TICKETS
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item main-image-container">
            <img
              src={require("../assets/C3.jpg")}
              class="d-block w-100 main-content-image"
              alt="..."
            />
            <div className="top-left text-over-img-s1">
              <h1>
                QUIZ: WHICH <i>STAR WARS</i> CHARACTER IS MOST LIKE YOUR DAD?
              </h1>
              <p>
                Figure out if your father is more of a bounty hunter, a senator,
                or Jedi knight.
              </p>
              <button type="button" className="yellowButton">
                Find Out Now
              </button>
            </div>
          </div>
          <div className="carousel-item main-image-container">
            <img
              src={require("../assets/C4.jpg")}
              className="d-block w-100 main-content-image"
              alt="..."
            />
            <div className="top-left text-over-img-s1">
              <h1>
                LUCASFILM LEGENDS CELEBRATE{" "}
                <i>INDIANA JONES AND THE DIAL OF DESTINY</i> AT US PREMIERE
              </h1>
              <p>
                See the biggest momments of the night in Lucasfilm.com photo
                gallery.
              </p>
              <div className="buttons-container">
                <button type="button" className="yellowButton">
                  Read More
                </button>
                <button type="button" className="blackButton">
                  GET TICKETS
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item main-image-container">
            <img
              src={require("../assets/C5.jpg")}
              className="d-block w-100 main-content-image"
              alt="..."
            />
            <div className="top-left text-over-img-s1">
              <h1>THIS WEEK IN INDIANA JONES</h1>
              <p>
                Indiana Jones is back in action, Jhon Williams performs, and
                more!
              </p>
              <button type="button" className="yellowButton">
                Watch Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Separador />
    </div>
  );
}
