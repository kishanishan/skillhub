import React from "react";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function Userdetails() {
	const { state } = useLocation();
	const { user } = state;

	console.log(state);

	const [userdetails, setuserdetails] = useState({});

	const fetchApi1 = async () => {
		try {
			const response = await axios.get(`http://localhost:1412/user${state}`);
			console.log(response.data.userdetails);
			setuserdetails(response.data.userdetails);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	console.log(userdetails);
	useEffect(() => {
		fetchApi1();
	}, []);

	const [rangeValue, setRangeValue] = useState(0);

	const handleRangeChange = (event) => {
		setRangeValue(event.target.value);
	};
	const inputStyle = {
		// Specify your desired color
		color: "#9c29c6",
	};
	let navigate = useNavigate();

	const gotorecent = () => {
		navigate("/recentAssessment");
	};
	const gotocourse = () => {
		navigate("/recentcourse");
	};
	const gotopractice = () => {
		navigate("/recentpractice");
	};
	const gotoprograming = () => {
		navigate("/programing");
	};
	const gotopassword = () => {
		navigate("/changepassword", { state: { user } });
	};

	return (
		<>
			<div>
				<Navbar />
				<div className="">
					{/* <div className="col-md-3" style={{ padding: "0px" }}>
						<Sidebar />
					</div> */}
					<div className="" style={{ paddingTop: "20px" }}>
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-7 col-md-8 mb-3">
								<div className="card_item ">
									<div>
										<h5>
											<b>User Name : </b>
											{user.firstname + " " + user.lastname}
										</h5>
										<h5>
											<b>Institution Name : </b>
											{user.institutionName}
										</h5>
										<h5>
											<b>EmailID : </b>
											{user.email}
										</h5>
										<h5>
											<b>Batch : </b>
											{user.batch}
										</h5>
										<h5>
											<b>registration ID : </b>
											{user.registerID}
										</h5>
										<h5>
											<b>Status : </b>
											{user.status}
										</h5>
										<h5>
											<b>Expired Date : </b>
											{user.expireddate}
										</h5>
									</div>

									<div>
										<div className="mb-4 mt-4">
											<button className="edit">
												{" "}
												<i className="fa-regular fa-pen-to-square"></i> Edit
											</button>
										</div>
										<div className="mb-4">
											<button className="change" onClick={gotopassword}>Change Password</button>
										</div>
										<button className="extend">Extende Access</button>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="card_item1">
									<div className="my-3 text-center">
										<p style={{ fontSize: "20px" }}>Your Overall Accuracy</p>
									</div>
									<div className="my-3">
										<input
											type="range"
											className="form-control"
											value={rangeValue}
											onChange={handleRangeChange}
											style={inputStyle}
										/>
										<p className="text-center">Selected Value: {rangeValue}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-1 "></div>
						</div>
						<div className="row">
							<div className="col-lg-1 "></div>
							<div className="col-lg-10">
								<div className="row mb-3 ">
									<div className="col-lg-4 col-md-4 col-12 mt-2 ">
										<div className="card_activity">
											<h5 className="mb-3">Assessment Activity</h5>
											<p>Completed : 3/14</p>
											<p>Yet Start : 10/14</p>
											<p
												className="view"
												onClick={gotorecent}
												style={{ cursor: "pointer" }}
											>
												View Recent Assessments
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-12 mt-2">
										<div className="card_activity">
											<h5 className="mb-3">Course Activity</h5>
											<p>InProgress : 6/7</p>
											<p>Yet Start : 1/7</p>
											<p className="view" onClick={gotocourse}>
												View Recent Courses
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-12 mt-2">
										<div className="card_activity">
											<h5 className="mb-3">Practice Activity</h5>
											<p>Completed : 0/44</p>
											<p>Yet Start : 42/44</p>
											<p className="view " onClick={gotopractice}>
												View Recent Practice
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-1"></div>
						</div>
						<div className="row">
							<div className="col-lg-1 "></div>
							<div className="col-lg-10">
								<div className="row">
									<div className="col-lg-6 mt-2 mb-3">
										<div className="card_view">
											<p
												className="p-3 mcq"
												style={{ borderBottom: "1px solid #b2b2b2" }}
											>
												MCQ: Subject Level Accurancy
											</p>
											<div
												className="d-flex justify-content-between pl-3 pr-3"
												style={{ borderBottom: "1px solid #b2b2b2" }}
											>
												<p
													style={{ cursor: "pointer" }}
													onClick={gotoprograming}
												>
													Java_Programing
												</p>
												<div>
													<input
														type="range"
														className="form-control"
														value="50"
														// onChange={handleRangeChange}
														// style={inputStyle}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 mt-2 mb-3">
										<div className="card_view">
											<p
												className="p-3 mcq"
												style={{ borderBottom: "1px solid #b2b2b2" }}
											>
												Coding: Programming Wise Accurancy
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-1"></div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Userdetails;
