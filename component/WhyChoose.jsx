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
				<h1> Why you should choose CRAPPO</h1>
				<p>
					Experience the next generation cryptocurrency platform. No financial
					borders, extra fees, and fake reviews.
				</p>
				<button className="why-Btn">
					{" "}
					<a href="/#"> Learn More</a>
				</button>
			</div>
			<aside className="ushape">
				<img src={Ushape.src} alt="ushape" />
			</aside>
		</div>
	);
}

export default WhyChoose;
