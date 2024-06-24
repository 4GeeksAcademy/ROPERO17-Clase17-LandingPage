import React from "react";



const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg  d-flex justify-content-center p-3 text-white bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand navbar-text-white" href="#">Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active navbar-text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled navbar-text-white" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;