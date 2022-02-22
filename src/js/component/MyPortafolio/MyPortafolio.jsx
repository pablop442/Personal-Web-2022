import React from "react";
import "./myPortafolio.css";
import { FaBeer } from "react-icons/fa";
import CityHold from "../../../img/City-HoldReducedSize.png";

const MyPortafolio = () => {
	return (
		<>
			<section class="p-5 portafolio" id="portafolio">
				<div class="container">
					<div class="row text-center g-4">
						<h1 className="text-white text-start mt-5">
							Portafolio
						</h1>
						<div className="col-lg-3"></div>
						<div class="col-lg-6">
							<div class="card bg-transparent text-light portafolio-card">
								<div class="card-body text-center">
									<img
										src={CityHold}
										alt=""
										id="portafolio-img"
									/>
									<p class="card-text">City Hold Project</p>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#contact">
										Learn More
									</a>
								</div>
							</div>
							<div className="col-lg-3"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MyPortafolio;
