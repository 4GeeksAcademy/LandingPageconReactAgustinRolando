import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";
import Navabr from "../navbar";
import Card from "./card";
import Footer from "./footer";
import "./home.css"

//create your first component 
const Home = () => {
	return (
		<div className="text-center">
			
			
			<div className="Navbar"></div>
			<Navabr/>
			<div className="jumbotron">
			<Jumbotron/>
			</div>
			<div className="grupocard">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			
			</div>
			<div style={{marginTop:"140px"}}>
				<Footer/>
			</div>

		</div>
	);
};

export default Home;
