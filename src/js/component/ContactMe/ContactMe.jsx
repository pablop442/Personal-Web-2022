import React, { useState, useEffect } from "react";
import "./contactMe.css";
import { SiBuymeacoffee } from "react-icons/si";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const [values, setValues] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_avp2d8b",
				"contact_form",
				values,
				"user_vwa6qQRrtOQw91nLDPSkH"
			)
			.then((result) => {
				console.log("SENT", result.text, result.status);
				setValues({
					name: "",
					lastName: "",
					email: "",
					phone: "",
					message: "",
				});
				setStatus("SENT");
			})
			.catch((error) => console.log("AN ERROR HAS OCURRED", error.text));
	};

	useEffect(() => {
		if (status === "SENT") {
			setTimeout(() => {
				setStatus("");
			}, 3000);
		}
	}, [status]);

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<div
				className="modal fade "
				id="contact"
				tabIndex="-1"
				aria-labelledby="enrollLabel"
				aria-hidden="true">
				<div className="modal-dialog ">
					<div className="modal-content contact-modal">
						<div className="modal-header">
							<h3 className="modal-title" id="enrollLabel">
								Let's get in touch! <SiBuymeacoffee />
							</h3>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p className="lead">
								Fill out this form and I will get back to you.
							</p>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label
										htmlFor="first-name"
										className="col-form-label">
										First Name:
									</label>
									<input
										type="text"
										className="form-control"
										id="first-name"
										name="user_name"
										required={true}
										onChange={handleChange}
										value={values.name}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="last-name"
										className="col-form-label">
										Last Name:
									</label>
									<input
										type="text"
										className="form-control"
										id="last-name"
										name="user_last_name"
										required={true}
										onChange={handleChange}
										value={values.lastName}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="email"
										className="col-form-label">
										Email:
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="user_email"
										required={true}
										onChange={handleChange}
										value={values.email}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="phone"
										className="col-form-label">
										Phone:
									</label>
									<input
										type="tel"
										className="form-control"
										id="phone"
										onChange={handleChange}
										name="user_phone"
										value={values.phone}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="message"
										className="col-form-label">
										Tell me how can I help you:
									</label>
									<textarea
										type="text"
										className="form-control"
										id="message"
										name="message"
										onChange={handleChange}
										value={values.message}
									/>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
										id="modal-close-btn">
										Close
									</button>
									<button
										type="submit"
										className="btn btn-primary"
										id="modal-submit-btn">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMe;
