import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
	let navigate = useNavigate();

	const gotologin = () => {
		navigate("/");
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light nav_item ">
				<div className="navbar-brand ">
					<img
						src="./images/skillhub.png"
						alt="img"
						className="img-fluid"
						style={{ height: "50px", borderRadius: "7px", }}
					/>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style={{color:"#fff"}}
				>
					{/* <span className="navbar-toggler-icon" style={{color:"#fff"}}></span> */}
					<i class="fa-solid fa-bars" style={{fontSize:"28px"}}></i>
				</button>

				<div className="collapse navbar-collapse " id="navbarNav">
					<div className="navbar-nav ml-auto">
						<NavLink to="/assessment" className=" my-3  employement_item ">
							{" "}
							Assessments
						</NavLink>{" "}
						<NavLink to="/course" className=" my-3  employement_item ">
							Courses
						</NavLink>{" "}
						<NavLink to="/code" className="employement_item my-3 ">
							Code#
						</NavLink>
						<NavLink to="/practice" className="employement_item my-3  ">
							{" "}
							Practice
						</NavLink>
						<NavLink to="/blog" className="employement_item my-3 ">
							{" "}
							Blogs
						</NavLink>
						<NavLink to="/userdetails" className="employement_item my-3 ">
							Dashboard{" "}
						</NavLink>
					</div>
					
						
					<div>
						<button className="logout_button" onClick={gotologin}>Logout</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
