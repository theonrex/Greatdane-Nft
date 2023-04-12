import React from "react";
import Subscribe from "./Subscribe";
import metanft from "../public/images/metanft copy.png";
import DPolygon from "../public/images/polygon.png";
import Logo from "../public/images/greatenft copy.png";

function Footer() {
  return (
    <div>
      <Subscribe />

      <footer className="deneb_footer">
        {/* <BackToTop/> */}
        <div className="widget_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="widget widegt_about">
                  <div className="widget_title">
                    <img src={Logo.src} alt="logo" className="footer-logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget widget_link">
                  <div className="widget_title">
                    <h4>Quick Link</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/"> Home </a>
                    </li>

                    <li>
                      <a href="#"> Contact </a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget widget_link">
                  <div className="widget_title">
                    <h4>Resources</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="#"> Download Whitepaper </a>
                    </li>
                    <li>
                      <a href="#">Smart Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget widget_contact">
                  <div className="widget_title">
                    <h4> We accept following payment systems</h4>
                  </div>
                  <div className="widget widegt_about">
                    <ul className="social">
                      <li>
                        <a href="#">
                          <img src={metanft.src} alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <img src={Logo.src} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={DPolygon.src} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="https://s1.coincarp.com/logo/1/wrappedbnb.png?style=200&v=1658909577"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 copyright_text_bg">
                <div className="copyright_text">
                  <p>©2023 GREAT DANE. All rights reserved</p>
                </div>{" "}
                <div className="copyright_text_icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
