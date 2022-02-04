import React from "react";
import "./skills.css";
import { FaLaptopCode, FaDatabase, FaGitAlt, FaChild } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
	return (
		<>
			<section class="p-5 skills" id="skills">
				<div class="container">
					<div class="row text-center g-4">
						<h1 className="text-white text-start mt-5 mb-3">
							My Skills
						</h1>
						<div class="col-md">
							<div class="card  text-light h-100 card-drk">
								<div class="card-body text-center">
									<div class="h1 mb-3">
										<FaLaptopCode />
									</div>
									<h3 class="card-title mb-3">Front-End</h3>
									<p class="card-text">
										HTML<br></br>
										CSS<br></br>
										Bootstrap<br></br>
										Javascript<br></br>
										React Js<br></br>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md">
							<div class="card  text-light h-100 card-lgt">
								<div class="card-body text-center">
									<div class="h1 mb-3">
										<FaDatabase />
									</div>
									<h3 class="card-title mb-3">Back-End</h3>
									<p class="card-text">
										Pyton<br></br>
										Flask<br></br>
										API Rest<br></br>
										SQL<br></br>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md">
							<div class="card  text-light h-100 card-drk">
								<div class="card-body text-center">
									<div class="h1 mb-3">
										<FaGitAlt />
									</div>
									<h3 class="card-title mb-3">
										Version Control
									</h3>
									<p class="card-text">
										Git<br></br>
										GitHub<br></br>
										Command Line<br></br>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md">
							<div class="card  text-light h-100 card-lgt">
								<div class="card-body text-center">
									<div class="h1 mb-3">
										<FaChild />
									</div>
									<h3 class="card-title mb-3">Soft Skills</h3>
									<p class="card-text">
										Common Sense<br></br>
										Time Management<br></br>
										Teamwork<br></br>
										Confidence<br></br>
										Friendliness and Manners<br></br>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
