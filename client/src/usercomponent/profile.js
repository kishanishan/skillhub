import React from "react";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
	const { state } = useLocation();
	const { type } = state;

	console.log(type);
	const [institutionname, setinstitutionname] = useState("");
	const [headName, setheadName] = useState("");
	const [primaryMail, setprimaryMail] = useState("");

	const [secondarymail, setsecondarymail] = useState("");
	const [primarycontact, setprimarycontact] = useState("");
	const [secondarycontact, setsecondarycontact] = useState("");
	const [adress, setadress] = useState("");
	const [city, setcity] = useState("");
	const [state1, setstate] = useState("");
	const [institutioncode, setinstitutioncode] = useState("");
	const [institutiontype, setinstitutiontype] = useState([]);
	const [accessplan, setaccessplan] = useState("");
	const [password, setpassword] = useState("");
	const [batch, setbatch] = useState("");
	const [batchYear, setbatchYear] = useState("");
	const [institute, setinstitute] = useState([]);

	const [govtArray, setGovtArray] = useState([]);
	const [corporateArray, setCorporateArray] = useState([]);
	const [firstIndexObject, setFirst] = useState({});
	const [firstIndex, setFirstIndex] = useState({});
	const [institutions, setInstitutions] = useState([]);

	const fetchApi = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1412/government-institution`
			);
			console.log(response.data);

			setFirst(response.data[0]);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	useEffect(() => {
		if (type === "Government") {
			fetchApi();
		}
		if (type === "Corporate") {
			fetchApi1();
		}
	}, []);

	const fetchApi1 = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1412/corporate-institution`,
				{}
			);

			console.log(response.data);
			setFirst(response.data[0]);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	useEffect(() => {
		if (type === "Corporate") {
			fetchApi1();
		}
		if (type === "Government") {
			fetchApi();
		}
	}, []);

	console.log(firstIndexObject);

	// const handlepassword = async () => {
	// 	try {

	// 		const response = await axios.put(
	// 			`http://localhost:1412/government-institution/${password}`,
	// 			{

	// 				password: password,

	// 			}
	// 		);
	// 		console.log("Details updated:", response.data);
	// 	} catch (error) {
	// 		console.error("Error updating details:", error);
	// 	}
	// };

	const [newPassword, setnewPassword] = useState("");

	const handlepassword = async () => {
		try {
			//   const newPassword = prompt('Enter new password:');

			const response = await axios.put(
				`http://localhost:1412/government-institution/${firstIndexObject.primarymail}`,
				{
					password: newPassword, // Updated to send the correct payload
				}
			);

			console.log("Password changed:", response.data);
			toast("Password Update Successfully", {
				// ...
			});
		} catch (error) {
			console.error("Error changing password:", error);
		}
	};

	// 	  const endpoint =
	// 		institutionType === 'Government'
	// 		  ? `http://localhost:1412/government-institution/${firstIndexObject.primarymail}`
	// 		  : `http://localhost:1412/corporate-institution/${firstIndexObject.primarymail}`;

	// 	  const response = await axios.put(endpoint, {
	// 		password: newPassword,
	// 	  });

	// 	  console.log('Password changed:', response.data);
	// 	  toast('Password Update Successfully', {
	// 		// ...
	// 	  });
	// 	} catch (error) {
	// 	  console.error('Error changing password:', error);
	// 	}
	//   };

	//   handlepassword('Government

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
							<ToastContainer />
						</div>
					)}
					<div
						className={`col-lg-${isSidebarOpen ? 9 : 12} col-md-12 col-12 `}
						style={{ paddingTop: "20px" }}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div>
									<div className="card_item mt-5 mb-2">
										<div style={{ textAlign: "start" }}>
											<div style={{ borderBottom: "1px solid #bbbaba" }}>
												<h3 className="mb-3">
													{" "}
													{firstIndexObject.headofInstitution}
												</h3>
												<h5 className="mb-3">
													{" "}
													{firstIndexObject.institutionName}
												</h5>
											</div>

											<h6 className="my-3"> {firstIndexObject.primarymail}</h6>
											<h6 className="mb-3">
												{firstIndexObject.primarycontact}
											</h6>
										</div>
									</div>
									<div className="card_item">
										<div>
											<h3>Change Password</h3>
											<label>Password</label>
											<input
												type="password "
												className="form-control"
												value={newPassword}
												onChange={(e) => setnewPassword(e.target.value)}
											/>
											<button
												className="submit_btn mt-2"
												onClick={handlepassword}
											>
												Reset
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6" style={{ paddingTop: "20px" }}>
								<h4>Profile Information</h4>
								<div
									style={{
										backgroundColor: "whitesmoke",
										padding: "10px",
										borderRadius: "10px",
									}}
								>
									<div style={{ textAlign: "start" }}>
										<p>
											<b>Institution Name:</b>{" "}
											{firstIndexObject.institutionName}
										</p>
										<p>
											<b>Head Name:</b> {firstIndexObject.headofInstitution}
										</p>
										<p>
											<b>Primary Email:</b> {firstIndexObject.primarymail}
										</p>
										<p>
											<b>Primary Contact Number:</b>{" "}
											{firstIndexObject.primarycontact}
										</p>
										<p>
											<b>Secondary Email: </b>
											{firstIndexObject.secondarymail}
										</p>
										<p>
											<b>Secondary Contact Number: </b>{" "}
											{firstIndexObject.secondarycontact}
										</p>
										<p>
											<b>Batch Year: </b>
											{firstIndexObject.batchYear}
										</p>
										<p>
											<b>Batch: </b>
											{firstIndexObject.batch}
										</p>
										<p>
											<b>Address: </b>
											{firstIndexObject.Adress}
										</p>
										<p>
											<b>City Name:</b> {firstIndexObject.city}
										</p>
										<p>
											<b>Institution Code:</b>{" "}
											{firstIndexObject.institutioncode}
										</p>
										<p>
											<b>Institution Type: </b>
											{firstIndexObject.institutiontype}
										</p>
										<p>
											<b>Accessplan: </b>
											{firstIndexObject.accessplan}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
