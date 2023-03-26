import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import CryptoData from "../Props/crypto";
import CryptoActive from "./CryptoActive";

function Earn() {
  //form
  // const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="earn">
      <header
        className="earn-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        Check how much you can earn
      </header>
      <p
        className="earn-rate"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        Let’s check your hash rate to see how much you will earn today,
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div
        className="earn-form"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <section className="form-section">
          <div className="ESTIMATED">
            <header>Alph collection</header>
            <h1>
              <a
                href="http://Greatdaneai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Greatdaneai.com
              </a>{" "}
            </h1>
            <h1>
              <a
                href="http://Stake.greatdaneai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stake.greatdaneai.com
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
