import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import UpperBanner from "./UpperBanner/UpperBanner.jsx";
import AboutBanner from "./AboutBanner/AboutBanner.jsx";
import Skills from "./Skills/Skills.jsx";
import MyResume from "./MyResume/MyResume.jsx";
import MyPortafolio from "./MyPortafolio/MyPortafolio.jsx";
import Footer from "./Footer/Footer.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<UpperBanner />
			<AboutBanner />
			<Skills />
			<MyResume />
			<MyPortafolio />
			<Footer />
			<ContactMe />
		</>
	);
};

export default Home;
