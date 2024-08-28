import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md text-white bg-primary ">
        <div className="container-fluid">
          <Link className="navbar-brand p-2 fs-2 fw-bold text-white" to="/">
            Axios <i className="fa-solid fa-users"></i> CRUD
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              borderColor: "white",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse text-center text-white mx-auto fs-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0 ">
              <li className="nav-item fw-semibold py-2  ">
                <Link className="text-decoration-none text-white p-3" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-semibold py-2">
                <Link
                  className="text-decoration-none text-white p-3"
                  to="/create"
                >
                  Add New User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
