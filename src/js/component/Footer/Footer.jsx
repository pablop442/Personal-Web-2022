import React from "react";
import "./footer.css";
import { BsArrowUpCircle } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer className="p-5 text-white text-center position-relative">
				<div className="container">
					<p className="">
						Copyright &copy; 2022{" "}
						<a
							href=""
							data-bs-toggle="modal"
							data-bs-target="#contact"
							className="footer-link">
							Pablo Peña
						</a>{" "}
					</p>
					<p>
						<a
							href="https://www.linkedin.com/in/pablo-pe%C3%B1a-mar%C3%ADn-developer"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2">
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/pablop442"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2">
							<FaGithub />
						</a>
						<a
							href="https://twitter.com/Pablo442"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2">
							<FaTwitter />
						</a>
					</p>

					<a
						href="#"
						className="position-absolute bottom-0 end-0 p-5">
						<BsArrowUpCircle />
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
