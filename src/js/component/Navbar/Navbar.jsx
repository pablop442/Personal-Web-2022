import React from "react";
import "./navbar.css";
import { FiSmile } from "react-icons/fi";
import PabloPeña from "../../../img/PabloPeña.png";
import PabloPeñaBig from "../../../img/PabloPeñaBig.png";
import PabloLogo2 from "../../../img/PabloLogo2.png";
import PabloPeñaLogo2 from "../../../img/PabloPeñaLogo2.png";
import ContactMe from "../ContactMe/ContactMe.jsx";

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
				<div class="container">
					<a href="#" class="navbar-brand p-0">
						<img
							src={PabloPeñaBig}
							alt="Pablo Peña Logo"
							id="logo"
							className="img-fluid"
						/>
					</a>

					<button
						class="navbar-toggler me-3"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navmenu">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navmenu">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item">
								<a href="#about" class="nav-link">
									About me
								</a>
							</li>
							<li class="nav-item">
								<a href="#skills" class="nav-link">
									Skills
								</a>
							</li>
							<li class="nav-item">
								<a href="#resume" class="nav-link">
									Resume
								</a>
							</li>
							<li class="nav-item">
								<a href="#portafolio" class="nav-link">
									Portafolio
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class="nav-link"
									data-bs-toggle="modal"
									data-bs-target="#contact">
									Contact me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
