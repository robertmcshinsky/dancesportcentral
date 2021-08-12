import React from "react";
import logo from "../../utils/logo.png";

function Header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img width="100px" src={logo} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                News
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/blog">
                  Blog
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/results">
                  Competition Results
                </a>
                <a class="dropdown-item" href="/reports">
                  Competition Report
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Competitors
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/rules">
                  RuleBook
                </a>
                <a class="dropdown-item" href="packing">
                  Packing
                </a>
                <a class="dropdown-item" href="/shop">
                  Shop
                </a>
                <a class="dropdown-item" href="studios">
                  Studios
                </a>
                <a class="dropdown-item" href="/coaches">
                  Coaches
                </a>
                <a class="dropdown-item" href="/vendors">
                  Vendors
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                LeaderBoard
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/leaderboard">
                  Ballroom
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/leaderboard">
                  Latin
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/leaderboard">
                  Smooth
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/leaderboard">
                  Rhythm
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/competitions">
                Competitions
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
