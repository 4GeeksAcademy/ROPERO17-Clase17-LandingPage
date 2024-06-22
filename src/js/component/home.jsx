import React from "react";
import Body from "./body.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"; 
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <section>
            <Navbar />
            <Jumbotron />
			<Body />
            <Footer/>
        </section>
    );
};

export default Home;
