import React from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const SignOut = () => {
  console.log("checkinggg");
  Cookies.remove("name");
  Cookies.remove("adminaccess");
  Cookies.remove("username");
};

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Dashboard
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Dashboard
              </NavLink>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true"></a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link
                className="btn btn-outline-warning"
                onClick={SignOut}
                to="/"
              >
                SignOut
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
