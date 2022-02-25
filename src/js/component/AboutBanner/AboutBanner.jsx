import React from "react";
import "./aboutBanner.css";
// import CodeHexagon from "../../../img/CodeHexagon.png";
import ProfileImg from "../../../img/ProfileImg.png";

const AboutBanner = () => {
	return (
		<>
			<section
				className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start about-banner"
				id="about">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<h1 className="text-white my-3">About me</h1>
						<div className="col-lg-4 ">
							<img
								className="img-fluid d-none d-sm-block"
								src={ProfileImg}
								alt="Pablo Peña Image"
							/>
						</div>
						<div className="col-lg-8 col-12">
							<p className="lead">
								I have always been passionate about helping
								people. Through technology the scope of my help
								is exponential, htmlFor that reason I have
								decided to turn my professional career around to
								dedicate myself to the design of intelligent and
								sustainable applications that represent a change
								in people's lives. <br></br>I am always willing
								to learn and continue to grow professionally and
								personally.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutBanner;
