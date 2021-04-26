import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <p className="navbar-brand text d-flex align-items-center">
            <img
              src="https://lh3.googleusercontent.com/proxy/SXvBwXt0OsBltGRFhmKssN4q9dO-0DVQbVeGDJjRjmlqn2g8RPanfEt7U4ffg164_JlOuEjVpLzzebzn336IgWcVjMrO5LUg76lLRzqT9x-dXM9-9s4L3r1As-m0CDyr76o4_VmGtUJx"
              alt=""
              width="100px"
            />{" "}
            <h4 className="text-primary">Chennai Super Kings</h4>
          </p>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <p className="nav-link">
                <h5 className="text-primary">
                  Home <span className="sr-only">(current)</span>
                </h5>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-primary">
                <h5>Team</h5>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-primary">
                <h5>Auction</h5>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-primary">
                <h5>Match Schedule</h5>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
