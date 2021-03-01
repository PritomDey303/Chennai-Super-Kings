import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand text d-flex align-items-center" href="#">
            <img
              src="https://lh3.googleusercontent.com/proxy/A9tuSCSKMW-SwWAAyMJFLshGXhvPZjgWLqeDhVjEdF-nAGLo7Wkcs7_qqYAA65pIeusS38IS5G8Lm9IhxFhqLrXO608PJSqlsq79v3FrYJdnEQ4uRQuNsXpFzZA7IuEvZQnr5OQIz_kD"
              alt=""
              width="100px"
            />{" "}
            <h4 className="text-primary">Chennai Super Kings</h4>
          </a>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h5 className="text-primary">
                  Home <span className="sr-only">(current)</span>
                </h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                <h5>Team</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                <h5>Auction</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                <h5>Match Schedule</h5>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
