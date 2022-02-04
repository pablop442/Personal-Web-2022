import React, { useState } from "react";
import "./upperBtn.css";
import { motion } from "framer-motion";

const UpperBtn = () => {
	return (
		<>
			<div className="my-3 text-center">
				<a
					href=""
					href="#"
					className=""
					data-bs-toggle="modal"
					data-bs-target="#contact">
					<motion.button
						animate={{ x: 0 }}
						initial={{ x: -1000 }}
						transition={{ delay: 0.2, duration: 1.5 }}
						className="btn btn-outline-light p-3  rounded-2 upper-btn main-view fs-1"
						id="main-btn">
						<p className="mb-1">Contact me</p>
					</motion.button>
				</a>
			</div>
		</>
	);
};

export default UpperBtn;
