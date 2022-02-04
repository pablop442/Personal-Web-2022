import React from "react";
import "./myResume.css";
import "./experience.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaPeopleArrows, FaCogs, FaChessKnight } from "react-icons/fa";

const Experience = () => {
	return (
		<>
			<section
				class="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start experience-section"
				id="resume">
				<div className="container">
					<div className="row justify-content-end">
						<h3 className="text-white fst-italic text-start">
							Experience
						</h3>
						<div className="col-md-8">
							<VerticalTimeline>
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{
										background: "none",
										color: "#fff",
										border: "1px solid white",
										boxShadow: "-6px 6px 2px 0px #034078",
									}}
									contentArrowStyle={{
										border: "2px solid white",
										width: "10px",
									}}
									date="2020 - 2021"
									dateClassName="date-text"
									iconStyle={{
										background: "#001F54",
										color: "#fff",
										border: "3px solid white",
										boxShadow: "none",
									}}
									icon={<FaPeopleArrows />}>
									<h4 className="vertical-timeline-element-title fw-bold mb-4">
										Costumer Support Specialist
									</h4>
									<h5 className="vertical-timeline-element-subtitle fst-italic mb-4">
										Aresi Real State Administration
									</h5>

									<p>
										Offered optimal attention to real state
										owners guiding them to get the best
										solution to any property related
										problem.
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{
										background: "none",
										color: "#fff",
										border: "1px solid white",
										boxShadow: "6px 6px 2px 0px #034078",
									}}
									contentArrowStyle={{
										border: "2px solid white",
										width: "10px",
									}}
									date="2019 - 2020"
									dateClassName="date-text-right"
									iconStyle={{
										background: "#001F54",
										color: "#fff",
										border: "3px solid white",
										boxShadow: "none",
									}}
									icon={<FaCogs />}>
									<h4 className="vertical-timeline-element-title fw-bold mb-3">
										Supervisor of Administrations and
										Operations
									</h4>
									<h5 className="vertical-timeline-element-subtitle fst-italic">
										Fundación Código Venezuela (NGO)
									</h5>
									<p>
										Carried out the legal, financial and
										other day to day operations of the
										foundation. Supporting and developing
										the standarization of the processes.
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									contentStyle={{
										background: "none",
										color: "#fff",
										border: "1px solid white",
										boxShadow: "-6px 6px 2px 0px #034078",
									}}
									contentArrowStyle={{
										border: "2px solid white",
										width: "10px",
									}}
									date="2010 - 2015"
									dateClassName="date-text"
									iconStyle={{
										background: "#001F54",
										color: "#fff",
										border: "3px solid white",
										boxShadow: "none",
									}}
									icon={<FaChessKnight />}>
									<h4 className="vertical-timeline-element-title fw-bold mb-3">
										Compliance Analyst
									</h4>
									<h5 className="vertical-timeline-element-subtitle fst-italic">
										Empresas Polar
									</h5>
									<p>
										Designed and recommended management
										strategies identified from the possible
										occurrence of events that may affect
										compliance with the company's strategic
										objectives
									</p>
								</VerticalTimelineElement>
							</VerticalTimeline>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Experience;
