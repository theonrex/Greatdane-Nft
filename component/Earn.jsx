import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import CryptoData from "../Props/crypto";
import CryptoActive from "./CryptoActive";
import { AiOutlineLink } from "react-icons/ai";

function Earn() {
  //

  return (
    <div className="earn" id="products">
      <div
        className="earn-form"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
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
                    Greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
                <h1>
                  <a
                    href="http://Stake.greatdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stake.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
              </div>{" "}
              <div className="ESTIMATED">
                <header>Beta Collection: </header>
                <h1>
                  <a
                    href="http://Beta.greattdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beta.greattdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
                <h1>
                  <a
                    href="http://Bstake.greatdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bstake.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
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
                    Bat.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
                <h1>
                  <a
                    href="http://Bbat.greatdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bbat.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
              </div>{" "}
              <div className="ESTIMATED">
                <header>Flowers on a Wednesday </header>
                <h1>
                  <a
                    href="http://Flower.greatdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flower.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
                </h1>
                <h1>
                  <a
                    href="http://Bflower.greatdaneai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bflower.greatdaneai.com
                    <AiOutlineLink />
                  </a>{" "}
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
                Meta.greatdanai.com
                <AiOutlineLink />
              </a>{" "}
            </h1>
            <h1>
              <a
                href="http://Bmeta.greatdaneai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bmeta.greatdaneai.com
                <AiOutlineLink />
              </a>{" "}
            </h1>
          </div>
        </section>
        <br /> <br />
        <section className=" crypto-width  ">
          <CryptoActive />
        </section>
      </div>
    </div>
  );
}

export default Earn;
