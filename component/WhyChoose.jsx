import React from "react";
import Choose from "../public/images/batnft copy.png";
import Ushape from "../public/images/ushape.png";

function WhyChoose() {
	return (
    <div className="rowx container">
      <div
        className="col50 choose-Img"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <img src={Choose.src} alt="choose" />
      </div>
      <div className="col50 choose" data-aos="fade-up" data-aos-duration="3000">
        <h1> Why Great Dane NFts</h1>
        <p className="why_greate_dane_p">
          Great Danes Love Steak - Staking - earning - burning - winning
        </p>
        <p>
          Brush off the sofa and make room. Great Dane AI is settling in as the
          Big Dog of Crypto, because frankly, NFT’s don’t have to be Hideous
          anymore.....
        </p>
        <button className="why-Btn">
          {" "}
          <a href="/whyus"> Learn More</a>
        </button>
      </div>
      <aside className="ushape">
        <img src={Ushape.src} alt="ushape" />
      </aside>
    </div>
  );
}

export default WhyChoose;
