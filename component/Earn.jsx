import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import CryptoData from "../Props/crypto";
import CryptoActive from "./CryptoActive";
import { AiOutlineLink } from "react-icons/ai";

function Earn() {
  //

  return (
    <div className="earn_bg" id="products">
      <div
        className="earn-form"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <div className="earn">
          <section className="form-section">
            <header className="form_header">
              Enough! This way to our exclusive Stakable NFT collections.
            </header>
            <div className="rowx">
              <div className="col50">
                <div className="ESTIMATED">
                  <header>Alpha Collection</header>
                  <h1>
                    <a
                      href="http://Greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Greatdaneai.com
                        <AiOutlineLink />
                      </button>
                    </a>
                  </h1>
                  <h1>
                    <a
                      href="http://Stake.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Stake.greatdaneai.com
                        <AiOutlineLink />
                      </button>
                    </a>
                  </h1>
                </div>
                <div className="ESTIMATED">
                  <header>Beta Collection: </header>
                  <h1>
                    <a
                      href="http://Beta.greattdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Beta.greattdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                  <h1>
                    <a
                      href="http://Bstake.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Bstake.greatdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                </div>
              </div>
              <div className="col50">
                <div className="ESTIMATED">
                  <header>Gamma Collection</header>
                  <h1>
                    <a
                      href="http://Bat.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Bat.greatdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                  <h1>
                    <a
                      href="http://Bbat.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Bbat.greatdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                </div>
                <div className="ESTIMATED">
                  <header>Flowers on a Wednesday </header>
                  <h1>
                    <a
                      href="http://Flower.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Flower.greatdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                  <h1>
                    <a
                      href="http://Bflower.greatdaneai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="landing-btn ">
                        Bflower.greatdaneai.com
                        <AiOutlineLink />{" "}
                      </button>
                    </a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="ESTIMATED">
              <header>Meta Space Debris</header>
              <h1>
                <a
                  href="http://Meta.greatdanai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="landing-btn ">
                    Meta.greatdanai.com
                    <AiOutlineLink />{" "}
                  </button>
                </a>
              </h1>
              <h1>
                <a
                  href="http://Bmeta.greatdaneai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="landing-btn ">
                    Bmeta.greatdaneai.com
                    <AiOutlineLink />{" "}
                  </button>
                </a>
              </h1>
            </div>
          </section>
        </div>
        <br /> <br />
        <section className=" crypto-width  ">
          <CryptoActive />
        </section>
      </div>
    </div>
  );
}

export default Earn;
