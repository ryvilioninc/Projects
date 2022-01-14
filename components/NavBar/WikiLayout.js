import React from "react";
import Link from "next/link";
import { Container, Title } from "./style-content-navbar";

const Layout = ({ setTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">SpaceX</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/videoBrowser">
                <a className="nav-link">videoBrowser</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="wikipedia">
                <a className="nav-link">Wikipedia</a>
              </Link>
            </li>

            <li className="nav-item dropdown"></li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search wikipedia"
              aria-label="Search"
              onChange={(e) => setTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Layout;
