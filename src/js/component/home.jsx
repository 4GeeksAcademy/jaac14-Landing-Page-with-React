import React from "react";

//include images into your bundle
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Fotter from "./footer";

//create your first component
const Home = () => {
	return (<>
		<NavBar />
		<div className="container">
			<Jumbotron />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
		</div>
		<Fotter />
	</>
	);
};

export default Home;
