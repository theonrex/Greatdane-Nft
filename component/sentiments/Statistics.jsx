import React from 'react'
import Statistic from "../../public/images/dogdnft.jpg";

function Statistics() {
  return (
		<div>
			<div className="container">
				<section className="rowx Statistic">
					<div
						className="col50 Statistic-img"
						data-aos="zoom-in"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<img src={Statistic.src} alt="" />
					</div>
					<div
						className="col50 stat_mine"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<header>Detailed Statistics</header>
						<p>
							View all minting related information in realtime, at any point at
							any location and decide which you want to mint.
						</p>
						<button className="market-btn ">
							{" "}
							<a href="#/"> Learn More</a>{" "}
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Statistics