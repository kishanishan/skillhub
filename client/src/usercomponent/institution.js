import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function Institution() {
	let navigate = useNavigate();

	const GotoProfile = (instType) => {
		navigate("/profile", { state: { type: instType } });
	};

	const [headName, setheadName] = useState("");
	const [primaryMail, setprimaryMail] = useState("");
	const [secondarymail, setsecondarymail] = useState("");
	const [primarycontact, setprimarycontact] = useState("");
	const [secondarycontact, setsecondarycontact] = useState("");
	const [adress, setadress] = useState("");
	const [city, setcity] = useState("");
	const [state, setstate] = useState("");
	const [institutioncode, setinstitutioncode] = useState("");
	const [institutiontype, setinstitutiontype] = useState([]);
	const [accessplan, setaccessplan] = useState("");
	const [password, setpassword] = useState("");
	const [batch, setbatch] = useState("");
	const [batchYear, setbatchYear] = useState("");
	const [institute, setinstitute] = useState([]);
	const [type, settype] = useState("");

	const [govtArray, setGovtArray] = useState([]);
	const [corporateArray, setCorporateArray] = useState([]);
	const [firstIndexObject, setFirst] = useState({});
	const [firstIndex, setFirstIndex] = useState({});
	const [emailToEdit, setEmailToEdit] = useState(""); // Step 1: State variable to store email for editing
	const [institutionname, setinstitutionname] = useState("");
	const [institutionname1, setinstitutionname1] = useState("");

	const [headName1, setheadName1] = useState("");
	const [primaryMail1, setprimaryMail1] = useState("");
	const [secondarymail1, setsecondarymail1] = useState("");
	const [primarycontact1, setprimarycontact1] = useState("");
	const [secondarycontact1, setsecondarycontact1] = useState("");
	const [adress1, setadress1] = useState("");
	const [city1, setcity1] = useState("");
	const [state1, setstate1] = useState("");
	const [institutioncode1, setinstitutioncode1] = useState("");
	const [institutiontype1, setinstitutiontype1] = useState([]);
	const [accessplan1, setaccessplan1] = useState("");
	const [password1, setpassword1] = useState("");
	const [batch1, setbatch1] = useState("");
	const [batchYear1, setbatchYear1] = useState("");
	const [institute1, setinstitute1] = useState([]);
	const [type1, settype1] = useState("");

	const handleEditClick = (email) => {
		// Step 2: Update the state variable with the email ID
		setEmailToEdit(email);
	};
	console.log(emailToEdit);

	// Define a function to handle form submission and update state
	const addInstitution = (institutionDetails) => {
		setinstitute([...institute, institutionDetails]);
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (institutionname && primaryMail && secondarymail && password !== "") {
			const institutionDetails = {
				institutionName: institutionname,
				headofInstitution: headName,
				primarymail: primaryMail,
				secondarymail: secondarymail,
				primarycontact: primarycontact,
				secondarycontact: secondarycontact,
				Adress: adress,
				city: city,
				state: state,
				institutioncode: institutioncode,
				institutiontype: institutiontype,
				accessplan: accessplan,
				password: password,
				batchYear: batchYear,
				batch: batch,
				type: type,
			};

			addInstitution(institutionDetails); // Call the function to update state
			axios
				.post("http://localhost:1412/institution", institutionDetails)
				.then((response) => {
					if (response.status === 200) {
						console.log("registration success");
						toast("Institution Added Successfully", {
							// ...
						});
					}
				})
				.catch((error) => {
					console.log(error.response.data);
				});
		} else {
			alert("enter details !");
		}
	};

	console.log(type);

	const fetchApi = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1412/government-institution`
			);
			console.log(response.data);
			setGovtArray(response.data);
			setFirst(response.data[0]);
			setinstitutionname(response.data[0].institutionName);
			setheadName(response.data[0].headofInstitution);
			setprimaryMail(response.data[0].primarymail);
			setsecondarymail(response.data[0].secondarymail);
			setprimarycontact(response.data[0].primarycontact);
			setsecondarycontact(response.data[0].secondarycontact);
			setadress(response.data[0].Adress);
			setcity(response.data[0].city);
			setstate(response.data[0].state);
			setinstitutioncode(response.data[0].institutioncode);
			setinstitutiontype(response.data[0].institutiontype);
			setaccessplan(response.data[0].accessplan);
			setbatchYear(response.data[0].batchYear);
			setbatch(response.data[0].batch);
			settype(response.data[0].type);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		fetchApi();
	}, []);

	const fetchApi1 = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1412/corporate-institution`,
				{}
			);

			console.log(response.data);
			setCorporateArray(response.data);
			setFirstIndex(response.data[0]);
			setinstitutionname1(response.data[0].institutionName);
			setheadName1(response.data[0].headofInstitution);
			setprimaryMail1(response.data[0].primarymail);
			setsecondarymail1(response.data[0].secondarymail);
			setprimarycontact1(response.data[0].primarycontact);
			setsecondarycontact1(response.data[0].secondarycontact);
			setadress1(response.data[0].Adress);
			setcity1(response.data[0].city);
			setstate1(response.data[0].state);
			setinstitutioncode1(response.data[0].institutioncode);
			setinstitutiontype1(response.data[0].institutiontype);
			setaccessplan1(response.data[0].accessplan);
			setbatchYear1(response.data[0].batchYear);
			setbatch1(response.data[0].batch);
			settype1(response.data[0].type1);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	useEffect(() => {
		fetchApi1();
	}, []);

	console.log(institute);
	console.log(firstIndexObject);
	console.log(firstIndex);

	console.log(institutionname);

	const handleputData = async () => {
		try {
			console.log("Updating data with primaryMail:", emailToEdit);

			const apiUrl =
				institutiontype === "Government"
					? "government-institution"
					: "corporate-institution";

			const response = await axios.put(
				`http://localhost:1412/${apiUrl}/${emailToEdit}`,
				{
					institutionName:
						institutiontype === "Government"
							? institutionname
							: institutionname1,
					headofInstitution:
						institutiontype === "Government" ? headName : headName1,
					primarymail:
						institutiontype === "Government" ? primaryMail : primaryMail1,
					secondarymail:
						institutiontype === "Government" ? secondarymail : secondarymail1,
					primarycontact:
						institutiontype === "Government" ? primarycontact : primarycontact1,
					secondarycontact:
						institutiontype === "Government"
							? secondarycontact
							: secondarycontact1,
					Adress: institutiontype === "Government" ? adress : adress1,
					city: institutiontype === "Government" ? city : city1,
					state: institutiontype === "Government" ? state : state1,
					institutioncode:
						institutiontype === "Government"
							? institutioncode
							: institutioncode1,
					institutiontype: institutiontype,
					accessplan:
						institutiontype === "Government" ? accessplan : accessplan1,
					password: institutiontype === "Government" ? password : password1,
					batchYear: institutiontype === "Government" ? batchYear : batchYear1,
					batch: institutiontype === "Government" ? batch : batch1,
					type: institutiontype === "Government" ? type : type1,
				}
			);
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleDeleteUser = (email) => {
		axios
			.delete(`http://localhost:1412/government-institution/${email}`)
			.then((response) => {
				if (response.status === 200) {
					console.log("User deleted successfully");
					// You may want to update the state or perform any other actions upon successful deletion
				}
			})
			.catch((error) => {
				console.error("Error deleting user:", error.response.data);
			});
	};

	const handleDeleteUser1 = (email) => {
		axios
			.delete(`http://localhost:1412/corporate-institution/${email}`)
			.then((response) => {
				if (response.status === 200) {
					console.log("User deleted successfully");
					// You may want to update the state or perform any other actions upon successful deletion
				}
			})
			.catch((error) => {
				console.error("Error deleting user:", error.response.data);
			});
	};

	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setpassword(newPassword);

		// Regular expressions for password validation
		const uppercaseRegex = /[A-Z]/;
		const lowercaseRegex = /[a-z]/;
		const numberRegex = /[0-9]/;
		const symbolRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/;

		// Check password conditions
		let error = "";

		if (newPassword.length < 8) {
			error = "Password must be at least 8 characters long.";
		} else if (!uppercaseRegex.test(newPassword)) {
			error = "Password must contain at least one uppercase letter.";
		} else if (!lowercaseRegex.test(newPassword)) {
			error = "Password must contain at least one lowercase letter.";
		} else if (!numberRegex.test(newPassword)) {
			error = "Password must contain at least one number.";
		} else if (!symbolRegex.test(newPassword)) {
			error =
				"Password must contain at least one special symbol (!@#$%^&*()_+[]{};:'\\|,.<>/?).";
		}

		setPasswordError(error);
	};

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
						style={{ paddingTop: "20px"}}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<h1>Institution</h1>
						<div
							className="mb-3"
							style={{ textAlign: "end", paddingRight: "20px" }}
						>
							<i
								className="fa-regular fa-pen-to-square icon"
								data-toggle="modal"
								data-target="#myModal"
							></i>
							<h6>Add+ </h6>
						</div>
						<div class="modal " id="myModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Add Institute</h4>
										<button type="button" class="close" data-dismiss="modal">
											&times;
										</button>
									</div>

									<div class="modal-body">
										<div>
											<form>
												<div>
													<label>Institution Name</label>
													<input
														type="text"
														className="form-control"
														// value={institutionname}
														onChange={(e) => setinstitutionname(e.target.value)}
													/>
												</div>
												<div>
													<label>Head of Institution</label>
													<input
														type="text"
														className="form-control"
														// value={headName}
														onChange={(e) => setheadName(e.target.value)}
													/>
												</div>
												<div>
													<label>Primary Email</label>
													<input
														type="email"
														className="form-control"
														// value={primaryMail}
														onChange={(e) => setprimaryMail(e.target.value)}
													/>
												</div>

												<div>
													<label>Secondary Email</label>
													<input
														type="email"
														className="form-control"
														// value={secondarymail}
														onChange={(e) => setsecondarymail(e.target.value)}
													/>
												</div>
												<div>
													<label>Primary Contact</label>
													<input
														type="number"
														className="form-control"
														// value={primarycontact}
														onChange={(e) => setprimarycontact(e.target.value)}
													/>
												</div>
												<div>
													<label>Secondary Contact</label>
													<input
														type="number"
														className="form-control"
														// value={secondarycontact}
														onChange={(e) =>
															setsecondarycontact(e.target.value)
														}
													/>
												</div>
												<div>
													<label>Batch Year</label>
													<input
														type="number"
														className="form-control"
														// value={batchYear}
														onChange={(e) => setbatchYear(e.target.value)}
													/>
												</div>
												<div>
													<label>Batch</label>
													<input
														type="text"
														className="form-control"
														// value={batch}
														onChange={(e) => setbatch(e.target.value)}
													/>
												</div>
												<div>
													<label>Adress</label>
													<input
														type="text"
														className="form-control"
														// value={adress}
														onChange={(e) => setadress(e.target.value)}
													/>
												</div>
												<div>
													<label>City</label>
													<input
														type="text"
														className="form-control"
														// value={city}
														onChange={(e) => setcity(e.target.value)}
													/>
												</div>
												<div>
													<label>State</label>
													<input
														type="text"
														className="form-control"
														// value={state}
														onChange={(e) => setstate(e.target.value)}
													/>
												</div>
												<div>
													<label>Institution Code</label>
													<input
														type="text"
														className="form-control"
														// value={institutioncode}
														onChange={(e) => setinstitutioncode(e.target.value)}
													/>
												</div>
												<div className="row">
													<div className="mt-3 col-md-6">
														<label>Institution Type</label>
														<select
															className="p-1  form-control"
															// value={institutiontype}
															onChange={(e) =>
																setinstitutiontype(e.target.value)
															}
														>
															<option value="">-- Institution Type --</option>
															<option value="Corporate">Corporate</option>
															<option value="Government">Government</option>
														</select>
													</div>
													<div className="col-md-6 mt-3">
														<label>Access Plans</label>
														<select
															className="p-1  form-control"
															// value={accessplan}
															onChange={(e) => setaccessplan(e.target.value)}
														>
															<option value="">-- Access Plans --</option>
															<option value="Exam Practice">
																Exam Practice
															</option>
															<option value="Exam Practice LMS">
																Exam Practice LMS
															</option>
															<option value="Exam Practice">
																College Exam Practice
															</option>
															<option value="College Exam Practice LMS">
																College Exam Practice LMS
															</option>
														</select>
													</div>
												</div>
												<div className="row">
													<div className="col-lg-6">
														<label>User Type</label>
														<select
															className="p-1 form-control"
															// value={institutiontype}
															onChange={(e) => settype(e.target.value)}
														>
															<option value="">-- User Type --</option>
															<option value="Institution">Institution</option>
															<option value="User">User</option>
														</select>
													</div>
													<div className="col-lg-6">
														<div>
															<label>Password</label>
															<input
																type={showPassword ? "text" : "password"}
																id="psw"
																className="form-control"
																// value={password}
																onChange={handlePasswordChange}
																// value={password}
																// onChange={(e) => setpassword(e.target.value)}
															/>
														</div>
														{passwordError && (
															<p className="error text-danger m-0">
																{passwordError}
															</p>
														)}
													</div>
												</div>
												<div className="mt-3 ">
													<button
														type="submit"
														className="submit_btn mr-3"
														onClick={onSubmitForm}
													>
														Submit
													</button>
													{/* <button
														type="submit"
														className="submit_btn"
														onClick={handleputData}
													>
														Update
													</button> */}
												</div>
											</form>
										</div>
									</div>

									<div class="modal-footer">
										<button
											type="button"
											class="btn btn-danger"
											data-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center" style={{overflowX:"scroll"}}>
							<table class="table   table-bordered">
								<thead className="table_head">
									<tr>
										<th style={{fontWeight:"500"}}>S No</th>
										<th style={{fontWeight:"500"}}>Name</th>
										<th style={{fontWeight:"500"}}>Email</th>
										<th style={{fontWeight:"500"}}>Head</th>
										<th style={{fontWeight:"500"}}>User Count</th>
										<th style={{fontWeight:"500"}}>Code</th>
										<th style={{fontWeight:"500"}}>Actions</th>
									</tr>
								</thead>
								<tbody>
									{firstIndexObject && (
										<tr className="table_row">
											<td>1</td>
											<td>{firstIndexObject.institutiontype}</td>
											<td>{firstIndexObject.primarymail}</td>
											<td>{firstIndexObject.headofInstitution}</td>
											<td>{govtArray.length}</td>
											<td>{firstIndexObject.institutioncode}</td>
											<td>
												<i
													className="fa-solid fa-eye mr-2"
													onClick={() =>
														GotoProfile(firstIndexObject.institutiontype)
													}
												></i>
												<i
													className="fa-regular fa-pen-to-square"
													data-toggle="modal"
													data-target="#myModal1"
													onClick={() =>
														handleEditClick(firstIndexObject.primarymail)
													}
												></i>
												<div
													class="modal "
													style={{ textAlign: "start" }}
													id="myModal1"
												>
													<div class="modal-dialog modal-lg">
														<div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title">Add Institute</h4>
																<button
																	type="button"
																	class="close"
																	data-dismiss="modal"
																>
																	&times;
																</button>
															</div>

															<div class="modal-body">
																<div>
																	<form>
																		<div>
																			<label>Institution Name</label>
																			<input
																				type="text"
																				className="form-control"
																				value={institutionname}
																				onChange={(e) =>
																					setinstitutionname(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Head of Institution</label>
																			<input
																				type="text"
																				className="form-control"
																				value={headName}
																				onChange={(e) =>
																					setheadName(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Primary Email</label>
																			<input
																				type="email"
																				className="form-control"
																				value={primaryMail}
																				onChange={(e) =>
																					setprimaryMail(e.target.value)
																				}
																			/>
																		</div>

																		<div>
																			<label>Secondary Email</label>
																			<input
																				type="email"
																				className="form-control"
																				value={secondarymail}
																				onChange={(e) =>
																					setsecondarymail(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Primary Contact</label>
																			<input
																				type="number"
																				className="form-control"
																				value={primarycontact}
																				onChange={(e) =>
																					setprimarycontact(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Secondary Contact</label>
																			<input
																				type="number"
																				className="form-control"
																				value={secondarycontact}
																				onChange={(e) =>
																					setsecondarycontact(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Batch Year</label>
																			<input
																				type="number"
																				className="form-control"
																				value={batchYear}
																				onChange={(e) =>
																					setbatchYear(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Batch</label>
																			<input
																				type="text"
																				className="form-control"
																				value={batch}
																				onChange={(e) =>
																					setbatch(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Adress</label>
																			<input
																				type="text"
																				className="form-control"
																				value={adress}
																				onChange={(e) =>
																					setadress(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>City</label>
																			<input
																				type="text"
																				className="form-control"
																				value={city}
																				onChange={(e) =>
																					setcity(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>State</label>
																			<input
																				type="text"
																				className="form-control"
																				value={state}
																				onChange={(e) =>
																					setstate(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Institution Code</label>
																			<input
																				type="text"
																				className="form-control"
																				value={institutioncode}
																				onChange={(e) =>
																					setinstitutioncode(e.target.value)
																				}
																			/>
																		</div>
																		<div className="row">
																			<div className="mt-3 col-md-6">
																				<label>Institution Type</label>
																				<select
																					className="p-1"
																					value={institutiontype}
																					onChange={(e) =>
																						setinstitutiontype(e.target.value)
																					}
																				>
																					<option value="">
																						-- Institution Type --
																					</option>
																					<option value="Corporate">
																						Corporate
																					</option>
																					<option value="Government">
																						Government
																					</option>
																				</select>
																			</div>
																			<div className="col-md-6 mt-3">
																				<label>Access Plans</label>
																				<select
																					className="p-1"
																					value={accessplan}
																					onChange={(e) =>
																						setaccessplan(e.target.value)
																					}
																				>
																					<option value="">
																						-- Access Plans --
																					</option>
																					<option value="Exam Practice">
																						Exam Practice
																					</option>
																					<option value="Exam Practice LMS">
																						Exam Practice LMS
																					</option>
																					<option value="Exam Practice">
																						College Exam Practice
																					</option>
																					<option value="College Exam Practice LMS">
																						College Exam Practice LMS
																					</option>
																				</select>
																			</div>
																		</div>

																		<div>
																			<label>Password</label>
																			<input
																				type={
																					showPassword ? "text" : "password"
																				}
																				id="psw"
																				className="form-control"
																				value={password}
																				onChange={handlePasswordChange}
																				// value={password}
																				// onChange={(e) => setpassword(e.target.value)}
																			/>
																		</div>
																		{passwordError && (
																			<p className="error text-danger m-0">
																				{passwordError}
																			</p>
																		)}

																		<div className="mt-3 ">
																			{/* <button
														type="submit"
														className="submit_btn mr-3"
														onClick={onSubmitForm}
													>
														Submit
													</button> */}
																			<button
																				type="submit"
																				className="submit_btn"
																				onClick={handleputData}
																			>
																				Update
																			</button>
																		</div>
																	</form>
																</div>
															</div>

															<div class="modal-footer">
																<button
																	type="button"
																	class="btn btn-danger"
																	data-dismiss="modal"
																>
																	Close
																</button>
															</div>
														</div>
													</div>
												</div>
												<i
													className="fa-solid fa-trash ml-2"
													onClick={() =>
														handleDeleteUser(firstIndexObject.primarymail)
													}
												></i>{" "}
											</td>
										</tr>
									)}

									{firstIndex && (
										<tr className="table_row">
											<td>2</td>
											<td>{firstIndex.institutiontype}</td>
											<td>{firstIndex.primarymail}</td>
											<td>{firstIndex.headofInstitution}</td>
											<td>{corporateArray.length}</td>
											<td>{firstIndex.institutioncode}</td>
											<td>
												<i
													className="fa-solid fa-eye mr-2"
													onClick={() =>
														GotoProfile(firstIndex.institutiontype)
													}
												></i>
												<i
													className="fa-regular fa-pen-to-square"
													data-toggle="modal"
													data-target="#myModal2"
													onClick={() =>
														handleEditClick(firstIndex.primarymail)
													}
												></i>
												<div
													class="modal "
													style={{ textAlign: "start" }}
													id="myModal2"
												>
													<div class="modal-dialog modal-lg">
														<div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title">Add Institute</h4>
																<button
																	type="button"
																	class="close"
																	data-dismiss="modal"
																>
																	&times;
																</button>
															</div>

															<div class="modal-body">
																<div>
																	<form>
																		<div>
																			<label>Institution Name</label>
																			<input
																				type="text"
																				className="form-control"
																				value={institutionname1}
																				onChange={(e) =>
																					setinstitutionname1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Head of Institution</label>
																			<input
																				type="text"
																				className="form-control"
																				value={headName1}
																				onChange={(e) =>
																					setheadName1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Primary Email</label>
																			<input
																				type="email"
																				className="form-control"
																				value={primaryMail1}
																				onChange={(e) =>
																					setprimaryMail1(e.target.value)
																				}
																			/>
																		</div>

																		<div>
																			<label>Secondary Email</label>
																			<input
																				type="email"
																				className="form-control"
																				value={secondarymail1}
																				onChange={(e) =>
																					setsecondarymail1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Primary Contact</label>
																			<input
																				type="number"
																				className="form-control"
																				value={primarycontact1}
																				onChange={(e) =>
																					setprimarycontact1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Secondary Contact</label>
																			<input
																				type="number"
																				className="form-control"
																				value={secondarycontact1}
																				onChange={(e) =>
																					setsecondarycontact1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Batch Year</label>
																			<input
																				type="number"
																				className="form-control"
																				value={batchYear1}
																				onChange={(e) =>
																					setbatchYear1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Batch</label>
																			<input
																				type="text"
																				className="form-control"
																				value={batch1}
																				onChange={(e) =>
																					setbatch1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Adress</label>
																			<input
																				type="text"
																				className="form-control"
																				value={adress1}
																				onChange={(e) =>
																					setadress1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>City</label>
																			<input
																				type="text"
																				className="form-control"
																				value={city1}
																				onChange={(e) =>
																					setcity1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>State</label>
																			<input
																				type="text"
																				className="form-control"
																				value={state1}
																				onChange={(e) =>
																					setstate1(e.target.value)
																				}
																			/>
																		</div>
																		<div>
																			<label>Institution Code</label>
																			<input
																				type="text"
																				className="form-control"
																				value={institutioncode1}
																				onChange={(e) =>
																					setinstitutioncode1(e.target.value)
																				}
																			/>
																		</div>
																		<div className="row">
																			<div className="mt-3 col-md-6">
																				<label>Institution Type</label>
																				<select
																					className="p-1"
																					value={institutiontype}
																					onChange={(e) =>
																						setinstitutiontype(e.target.value)
																					}
																				>
																					<option value="">
																						-- Institution Type --
																					</option>
																					<option value="Corporate">
																						Corporate
																					</option>
																					<option value="Government">
																						Government
																					</option>
																				</select>
																			</div>
																			<div className="col-md-6 mt-3">
																				<label>Access Plans</label>
																				<select
																					className="p-1"
																					value={accessplan1}
																					onChange={(e) =>
																						setaccessplan1(e.target.value)
																					}
																				>
																					<option value="">
																						-- Access Plans --
																					</option>
																					<option value="Exam Practice">
																						Exam Practice
																					</option>
																					<option value="Exam Practice LMS">
																						Exam Practice LMS
																					</option>
																					<option value="Exam Practice">
																						College Exam Practice
																					</option>
																					<option value="College Exam Practice LMS">
																						College Exam Practice LMS
																					</option>
																				</select>
																			</div>
																		</div>

																		<div>
																			<label>Password</label>
																			<input
																				type={
																					showPassword ? "text" : "password"
																				}
																				id="psw"
																				className="form-control"
																				value={password}
																				onChange={handlePasswordChange}
																				// value={password}
																				// onChange={(e) => setpassword(e.target.value)}
																			/>
																		</div>
																		{passwordError && (
																			<p className="error text-danger m-0">
																				{passwordError}
																			</p>
																		)}

																		<div className="mt-3 ">
																			{/* <button
														type="submit"
														className="submit_btn mr-3"
														onClick={onSubmitForm}
													>
														Submit
													</button> */}
																			<button
																				type="submit"
																				className="submit_btn"
																				onClick={handleputData}
																			>
																				Update
																			</button>
																		</div>
																	</form>
																</div>
															</div>

															<div class="modal-footer">
																<button
																	type="button"
																	class="btn btn-danger"
																	data-dismiss="modal"
																>
																	Close
																</button>
															</div>
														</div>
													</div>
												</div>
												<i
													className="fa-solid fa-trash ml-2"
													onClick={() =>
														handleDeleteUser1(firstIndex.primarymail)
													}
												></i>{" "}
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Institution;
