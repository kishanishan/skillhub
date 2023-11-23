import React from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function InstitutionDetail() {
	let navigate = useNavigate();

	const GotoInstitution = () => {
		navigate("/addinstitution");
	};
	const GotoUsers = () => {
		navigate("/user");
	};

	const [institutionCount, setInstitutionCount] = useState("");
	// const [userCount, setUserCount] = useState(0);
	// const [activeUserCount, setActiveUserCount] = useState(0);
	// const [assessmentCount, setAssessmentCount] = useState(0);
	// const [courseCount, setCourseCount] = useState(0);
	// const [questionsCount, setQuestionsCount] = useState(0);

	// const [userCount, setUserCount] = useState(0);
	// console.log(userCount);

	// const fetchCounts = async () => {
	// 	try {
	// 		const response = await axios.get("http://localhost:1412/user");
	// 		const { user } = response.data;
	// 		// setInstitutionCount(institution);
	// 		setUserCount(user);

	// 		// setActiveUserCount(activeUser);
	// 		// setAssessmentCount(assessment);
	// 		// setCourseCount(course);
	// 		// setQuestionsCount(questions);
	// 	} catch (error) {
	// 		console.error("Error fetching counts:", error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchCounts();
	// }, []);

	const [userCount, setUserCount] = useState("");

	const fetchApi = async (req, res) => {
		try {
			const response = await axios.get(`http://localhost:1412/usercount`);
			setInstitutionCount(response.data.length);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const fetchApi1 = async (req, res) => {
		try {
			const response = await axios.get(`http://localhost:1412/user`);
			setUserCount(response.data.length);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	console.log(userCount);

	useEffect(() => {
		fetchApi();
		fetchApi1();
	}, []);

	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isSidebarOpen && (
						<div
							className="col-lg-3 col-md-12 col-12 "
							style={{ padding: "0px", width: "100%", height: "auto" }}
						>
							<Sidebar />
						</div>
					)}
					<div
						className={`col-lg-${isSidebarOpen ? 9 : 12} col-md-12 col-12 `}
						style={{ paddingTop: "20px" }}
					>
						<div className="  d-lg-block d-none  ">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>

						<div className="row mt-3">
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5 onClick={GotoInstitution} className="instute">
										Instution Count
									</h5>
									<h6>{institutionCount}</h6>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5 onClick={GotoUsers} className="instute">
										User
									</h5>
									<h6>{userCount}</h6>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5>Active Users</h5>
									<h6>{userCount}</h6>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5>Assessment</h5>
									<h6>0</h6>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5>Course</h5>
									<h6>0</h6>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 mt-2">
								<div className="card text-center">
									<h5>Questions</h5>
									<h6>0</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InstitutionDetail;
