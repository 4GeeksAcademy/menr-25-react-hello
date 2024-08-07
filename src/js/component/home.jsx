import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const Home = () => {
	return 	<>
				<NavBar />
				<Jumbotron />
				<div className="container text-center">
					<div className="row justify-content-md-center grid gap-5 row-cols-4">
						<Card className="col"/>
						<Card className="col"/>
						<Card className="col"/>
						<Card className="col"/>
					</div>
				</div>
				<Footer />
			</>
};

export default Home;
