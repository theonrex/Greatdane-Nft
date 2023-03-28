import React from 'react'
import Image from "next/image";
import Logo from "../public/images/greatenft copy.png"
import { ConnectButton } from "@rainbow-me/rainbowkit";


function NavbarMenu() {

  return (
    <>
      <nav className="navbar navbar-expand-lg   mb-4 " id="navbar">
        <div className="container-fluid container">
          <a className="navbar-brand nav-link " href="/#">
            {" "}
            <img
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-domaincom-v1-0-4%2F534%2F1595534%2FjmELUeuX%2F06ec3d12169648028718746bc4d83b5d&methods=resize%2C500%2C5000"
              alt="logo"
              className="nav-logo"
            />
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
              <h5 className="offcanvas-title" id="offcanvasLabel"></h5>
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
                  <a className="nav-link" aria-current="page" href="#products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Road Map
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="/whyus">
                    About
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    Contact
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