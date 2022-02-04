import React from "react";
import "./upperBanner.css";
import Zoom from "@stahl.luke/react-reveal/Zoom";
import BgImg from "../../../img/BgImg.jpg";
import Typical from "react-typical";
import UpperBtn from "./UpperBtn.jsx";
let bgImg = {
	background: `linear-gradient(0deg, rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(${BgImg})`,
	backgroundPosition: `bottom`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};

const UpperBanner = () => {
	return (
		<>
			<section
				class="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start upper-banner bg-image"
				style={bgImg}>
				<div class="container">
					<div class="d-sm-flex flex-column d-flex justify-content-center align-items-center ">
						<h1 className="text-center">
							<span className="open-text">Hello!</span>
							<br /> I'm <b>Pablo Peña</b> <br />
						</h1>
						<p className="text-start">Web Developer</p>
						<UpperBtn />
						<div className="my-5 ps-3  border-start">
							<Typical
								steps={[
									"HTML5",
									1000,
									"CSS",
									1000,
									"JavaScript",
									1000,
									"Python",
									1000,
									"HTTP/Rest",
									1000,
									"Git",
									1000,
								]}
								loop={Infinity}
								wrapper="h2"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UpperBanner;
