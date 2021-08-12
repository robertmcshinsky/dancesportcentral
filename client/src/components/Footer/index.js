import React from "react";
import logo from "../../utils/logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <div className="mb-3">
          <img src={logo} alt="logo"></img>
        </div>
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>
                    Sign up to get notified about competitions and blog posts!
                  </strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example2">
                    Email address
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>Learn more here at Dance Sport</p>
        </section>

        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <br></br>
              <h5 className="text-uppercase">Blog Posts</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    How to Choose a Coach
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    My Partner Wants to Break Up
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Food = Freedom
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Keep your Goals Private
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <br></br>
              <h5 className="text-uppercase">Competitions</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    United States National Championships
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ohio Star Ball
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Embassy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Autumn Classic
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <br></br>
              <h5 className="text-uppercase">LeaderBoard</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Ballroom
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Latin
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Smooth
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Rhythm
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <br></br>
              <h5 className="text-uppercase">Vendors</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    lorem ipsum
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    lorem ipsum
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    lorem ipsum
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    lorem ipsum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
