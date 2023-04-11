import React from 'react'
import greatai from "../../public/images/greatai.png";
import Oshape from '../../public/images/oshape.png'

function Grow() {
  return (
		<div className="grow-bg">
			<div className="container ">
				<section className="rowx grow">
					<div
						className="col50"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<header> Buy real Nfts securely</header>
						<p>
							Use advanced minting tools to
							mint the best NFTs on our platform.
						</p>
						<button className="market-btn">
							{" "}
							<a href="#/"> Learn More</a>{" "}
						</button>
					</div>
					<div className="col50 grow-img">
						<img src={greatai.src} alt="" />
					</div>
				</section>
			</div>
			<div
				className="oshape"
				data-aos="zoom-in"
				data-aos-easing="linear"
				data-aos-duration="1500"
			>
				<img src={Oshape.src} alt="" />
			</div>
		</div>
	);
}

export default Grow