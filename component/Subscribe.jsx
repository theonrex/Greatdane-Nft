import React from "react";
import Btcs from "../public/images/btcs.png";
import Eths from "../public/images/ethS.png";
import Line from "../public/images/line2.png";
import Lines from "../public/images/line.png";

function Subscribe() {
  return (
    <div
      className="subscribe-bg "
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1800"
      id="Contact"
    >
      <section className="deneb_cta">
        <div className="container">
          <div className="cta_wrapper subscribe-img  ">
            <div className="eths">
              <img src={Eths.src} alt="" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="cta_content">
                  <h3>Start minting now</h3>
                  <p>
                    Join now with GRATE DANE AI to get the latest news and start
                    minting now
                  </p>
                </div>
              </div>{" "}
              <div className="col-lg-6">
                <div className="cta_content">
                  {/* <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  /> */}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="button_box">
                  <button className="subscribe-btn">
                    <a href="/https://greatdaneai.com/" className="">
                      Great Ai
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="btcs">
              <img src={Btcs.src} alt="" />
            </div>{" "}
          </div>
        </div>
      </section>

      <div className="line-img container ">
        <div className="First-img">
          <img src={Line.src} alt="line" />
        </div>{" "}
        <div className="second-img">
          <img src={Lines.src} alt="lines" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Subscribe;
