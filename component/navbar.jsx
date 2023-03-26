import React from 'react'
import Image from "next/image";
import Logo from "../public/images/greatenft copy.png"
import { ConnectButton } from "@rainbow-me/rainbowkit";


function NavbarMenu() {

  return (
    <>
      <nav className="navbar navbar-expand-lg   mb-4 " id="navbar">
        <div className="container-fluid container">
          <a className="navbar-brand" href="/#">
            {" "}
            <img src={Logo.src} alt="logo" className="nav-logo" />
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarExample-expand-lg"
            aria-controls="offcanvasNavbarExample-expand-lg"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#offcanvasNavbarExample-expand-lg"
            ></span>
          </button>
          <div
            className="offcanvas offcanvas-end "
            data-bs-hideresize="true"
            tabIndex="-1"
            id="offcanvasNavbarExample-expand-lg"
            aria-labelledby="offcanvasNavbarExample-expand-lg"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                Crappo
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Features
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    About
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Contact
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Login
                  </a>
                </li>{" "}
                <li className="nav-item vertical-line"></li>
                <ConnectButton />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu