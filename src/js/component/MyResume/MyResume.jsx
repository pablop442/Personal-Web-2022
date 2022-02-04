import React from "react";
import "./myResume.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FiSmile } from "react-icons/fi";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

const MyResume = () => {
	return (
		<>
			<Education />
			<Experience />
		</>
	);
};

export default MyResume;
