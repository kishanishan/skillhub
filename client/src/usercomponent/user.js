import React from "react";
import Sidebar from "../sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { saveAs } from "file-saver";

function User() {
	const [institutionType, setinstitutionType] = useState("");
	const [institutionName, setinstitutionName] = useState("");
	const [batchYear, setbatchYear] = useState("");
	const [batch, setbatch] = useState("");
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setemail] = useState("");
	const [registerID, setregisterID] = useState("");
	const [mobilenumber, setmobilenumber] = useState("");
	const [password, setpassword] = useState("");
	const [accessperiod, setaccessperiod] = useState("");
	const [expireddate, setexpireddate] = useState("");
	const [status, setstatus] = useState("");
	const [user, setuser] = useState([]);
	const [filteredUser, setFilteredUser] = useState([]);
	const [type, settype] = useState("");

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (institutionName && email && mobilenumber && password !== "") {
			const institutionDetails = {
				institutionType: institutionType,
				institutionName: institutionName,
				batchYear: batchYear,
				batch: batch,
				firstname: firstname,
				lastname: lastname,
				email: email,
				registerID: registerID,
				mobilenumber: mobilenumber,
				password: password,
				accessperiod: accessperiod,
				expireddate: expireddate,
				status: status,
				type: type,
			};

			axios
				.post("http://localhost:1412/user", institutionDetails)
				.then((response) => {
					if (response.status === 200) {
						console.log("registration success");
						toast("user Added Successfully", {
							// ...
						});
					}
				})
				.catch((error) => {
					console.log(error.response.data);
					console.log(status);
				});
		} else {
			alert("enter details !");
		}
	};

	const fetchApi = async () => {
		try {
			const response = await axios.get(`http://localhost:1412/user`, {});
			console.log(response.data);
			setuser(response.data);
			setFilteredUser(response.data);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		fetchApi();
	}, []);

	console.log(user);

	const [filtering, setfiltering] = useState([]);
	const [filterStatus, setFilterStatus] = useState(false);
	const filterData = () => {
		setFilterStatus(true);
		const filteredData = user.filter((userData) => {
			return (
				(institutionType === "" ||
					userData.institutionType === institutionType) &&
				(batchYear === "" || userData.batchYear === batchYear) &&
				(batch === "" || userData.batch === batch)
			);
		});
		setfiltering(filteredData);
	};
	console.log(batch);
	console.log(batchYear);

	let navigate = useNavigate();

	const GotoDetails = (userData) => {
		navigate("/userdetails", { state: { user: userData } });
	};

	// const GotoDetails = (userData) => {
	// 	navigate("/userdetails", { state: { user: userData } });
	//   };

	const [multipleUserMode, setMultipleUserMode] = useState(false);

	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		// Update the state with the selected file
		setSelectedFile(event.target.files[0]);
	};

	const handleDownload = () => {
		if (selectedFile) {
			// Create a Blob from the selected file
			const blob = new Blob([selectedFile], { type: selectedFile.type });
			// Use FileSaver to trigger the download
			saveAs(blob, selectedFile.name);
		} else {
			// Handle the case when no file is selected
			alert("Please select a file before downloading.");
		}
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
						style={{ paddingTop: "20px" }}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<div>
							<h2>Filter Users</h2>
						</div>
						<div
							style={{
								textAlign: "end",
								display: "flex",
								justifyContent: "end",
							}}
						>
							<div className="mx-3 mb-3">
								<i
									className="fa-regular fa-pen-to-square icon"
									data-toggle="modal"
									data-target="#myModal"
								></i>
								<h6>+Add</h6>
								<div class="modal " id="myModal" style={{ textAlign: "start" }}>
									<div class="modal-dialog modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<div class="modal-title">
													<button
														className={`single ${
															!multipleUserMode ? "active" : ""
														}`}
														onClick={() => setMultipleUserMode(false)}
													>
														Single User
													</button>
													<button
														className={`multiple ${
															multipleUserMode ? "active" : ""
														}`}
														onClick={() => setMultipleUserMode(true)}
													>
														Multiple User
													</button>
												</div>
												<button
													type="button"
													class="close"
													data-dismiss="modal"
												>
													&times;
												</button>
											</div>

											<div class="modal-body">
												{multipleUserMode ? (
													<div>
														<form>
															<div
																className="mb-3"
																style={{ textAlign: "end" }}
															>
																<button
																	className="Download"
																	onClick={handleDownload}
																>
																	<i class="fa-solid fa-download"></i> Download
																	File
																</button>
															</div>
															<div className="row">
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={institutionType}
																		onChange={(e) =>
																			setinstitutionType(e.target.value)
																		}
																	>
																		<option value="">
																			-- Institution Type --
																		</option>
																		<option value="Corporate">Corporate</option>
																		<option value="Government">
																			Government
																		</option>
																	</select>
																	<label>Select Institution</label>
																</div>
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={batchYear}
																		onChange={(e) =>
																			setbatchYear(e.target.value)
																		}
																	>
																		<option value="">-- Bacth Year --</option>
																		<option value="2020">2020</option>
																		<option value="2021">2021</option>
																	</select>
																	<label>Select Bacth Year</label>
																</div>
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={batch}
																		onChange={(e) => setbatch(e.target.value)}
																	>
																		<option value="">-- Bacth --</option>
																		<option value="A-Batch">A-Batch</option>
																		<option value="B-Batch">B-Batch</option>
																	</select>
																	<label>Select Bacth</label>
																</div>
																<div className="col-md-6">
																	<label>Institution</label>
																	<input
																		type="text"
																		className="form-control"
																		value={institutionName}
																		onChange={(e) =>
																			setinstitutionName(e.target.value)
																		}
																	/>
																</div>

																<div className="col-md-6">
																	<label>Access Period</label>
																	<select
																		className="p-1 form-control"
																		value={accessperiod}
																		onChange={(e) =>
																			setaccessperiod(e.target.value)
																		}
																	>
																		<option value="">
																			-- Access Period --
																		</option>
																		<option value="1 Month">1 Month</option>
																		<option value="2 Month">2 Month</option>
																		<option value="4 Month">4 Month</option>
																		<option value="6 Month">6 Month</option>
																		<option value="12 Month">12 Month</option>
																	</select>
																</div>

																<div className="col-md-6">
																	<label>User File</label>
																	<input
																		type="file"
																		className="form-control"
																		onChange={handleFileChange}
																	/>
																</div>
															</div>
														</form>
													</div>
												) : (
													<div>
														<form>
															<div className="row">
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={institutionType}
																		onChange={(e) =>
																			setinstitutionType(e.target.value)
																		}
																	>
																		<option value="">
																			-- Institution Type --
																		</option>
																		<option value="Corporate">Corporate</option>
																		<option value="Government">
																			Government
																		</option>
																	</select>
																	<label>Select Institution</label>
																</div>
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={batchYear}
																		onChange={(e) =>
																			setbatchYear(e.target.value)
																		}
																	>
																		<option value="">-- Bacth Year --</option>
																		<option value="2020">2020</option>
																		<option value="2021">2021</option>
																	</select>
																	<label>Select Bacth Year</label>
																</div>
																<div className="col-md-4">
																	<select
																		className="p-1 form-control"
																		value={batch}
																		onChange={(e) => setbatch(e.target.value)}
																	>
																		<option value="">-- Bacth --</option>
																		<option value="A-Batch">A-Batch</option>
																		<option value="B-Batch">B-Batch</option>
																	</select>
																	<label>Select Bacth</label>
																</div>
																<div className="col-md-6">
																	<label>Institution</label>
																	<input
																		type="text"
																		className="form-control"
																		value={institutionName}
																		onChange={(e) =>
																			setinstitutionName(e.target.value)
																		}
																	/>
																</div>

																<div className="col-md-6">
																	<label>First Name</label>
																	<input
																		type="text"
																		className="form-control"
																		value={firstname}
																		onChange={(e) =>
																			setfirstname(e.target.value)
																		}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Last Name</label>
																	<input
																		type="text"
																		className="form-control"
																		value={lastname}
																		onChange={(e) =>
																			setlastname(e.target.value)
																		}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Email</label>
																	<input
																		type="email"
																		className="form-control"
																		value={email}
																		onChange={(e) => setemail(e.target.value)}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Regd ID</label>
																	<input
																		type="text"
																		className="form-control"
																		value={registerID}
																		onChange={(e) =>
																			setregisterID(e.target.value)
																		}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Mobile No</label>
																	<input
																		type="number"
																		className="form-control"
																		value={mobilenumber}
																		onChange={(e) =>
																			setmobilenumber(e.target.value)
																		}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Status</label>
																	<input
																		type="text"
																		className="form-control"
																		value={status}
																		onChange={(e) => setstatus(e.target.value)}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Password</label>
																	<input
																		type="password"
																		className="form-control"
																		value={password}
																		onChange={(e) =>
																			setpassword(e.target.value)
																		}
																	/>
																</div>
																<div className="col-md-6">
																	<label>Access Period</label>
																	<select
																		className="p-1 form-control"
																		value={accessperiod}
																		onChange={(e) =>
																			setaccessperiod(e.target.value)
																		}
																	>
																		<option value="">
																			-- Access Period --
																		</option>
																		<option value="1 Month">1 Month</option>
																		<option value="2 Month">2 Month</option>
																		<option value="4 Month">4 Month</option>
																		<option value="6 Month">6 Month</option>
																		<option value="12 Month">12 Month</option>
																	</select>
																</div>

																<div className="col-md-6">
																	<label>Expired Date</label>
																	<input
																		type="date"
																		className="form-control"
																		value={expireddate}
																		onChange={(e) =>
																			setexpireddate(e.target.value)
																		}
																	/>
																</div>
																<div className="col-lg-6">
																	<label>User Type</label>
																	<select
																		className="p-1 form-control"
																		onChange={(e) => settype(e.target.value)}
																	>
																		<option value="">-- User Type --</option>
																		<option value="Institution">
																			Institution
																		</option>
																		<option value="User">User</option>
																	</select>
																</div>
															</div>
														</form>
													</div>
												)}
											</div>

											<div class="modal-footer">
												<button
													type="button"
													class="btn btn-danger"
													onClick={onSubmitForm}
												>
													update
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<button className="extend-button">+Extende Users</button>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-3">
								<select
									className="p-1 form-control"
									value={institutionType}
									onChange={(e) => setinstitutionType(e.target.value)}
								>
									<option value="" hidden>
										-- Institution Type --
									</option>
									<option value="Corporate">Corporate</option>
									<option value="Government">Government</option>
								</select>
								<label>Select Institution</label>
							</div>
							<div className="col-md-3">
								<select
									className="p-1 form-control"
									value={batchYear}
									onChange={(e) => setbatchYear(e.target.value)}
								>
									<option value="" hidden>
										-- Bacth Year --
									</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option>
								</select>
								<label>Select Bacth Year</label>
							</div>
							<div className="col-md-3">
								<select
									className="p-1 form-control"
									value={batch}
									onChange={(e) => setbatch(e.target.value)}
								>
									<option value="" hidden>
										-- Bacth --
									</option>
									<option value="A-Batch">A-Batch</option>
									<option value="B-Batch">B-Batch</option>
								</select>
								<label>Select Bacth</label>
							</div>
							<div className="col-md-3 text-center">
								<button className="submit_btn " onClick={filterData}>
									Go
								</button>
							</div>
						</div>
						<div style={{overflowX:"scroll"}}>
						<table class="table table-bordered mt-4">
							<thead className="table_head">
								<tr>
									<th style={{fontWeight:"500"}}>S No</th>
									<th style={{fontWeight:"500"}}>Name</th>
									<th style={{fontWeight:"500"}}>Email</th>
									<th style={{fontWeight:"500"}}>RegNo</th>
									<th style={{fontWeight:"500"}}>Mobile No</th>
									<th style={{fontWeight:"500"}}>Status</th>
									<th style={{fontWeight:"500"}}>Expiry Date</th>
									<th style={{fontWeight:"500"}}>Actions</th>
								</tr>
							</thead>
							{/* <tbody className="table_row">
								{filterStatus ? (
									filtering.map((userData, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{userData.firstname + " " + userData.lastname}</td>
											<td>{userData.email}</td>
											<td>{userData.registerID}</td>
											<td>{userData.mobilenumber}</td>
											<td>{userData.status}</td>
											<td>{userData.expireddate}</td>
											<td>
												<i
													className="fa-solid fa-eye"
													onClick={() => GotoDetails(userData.email)}
												></i>
											</td>
										</tr>
										// onClick={() => GotoDetails(userData)}
									))
								) : (
									<div className="p-2">No Data Found </div>
								)}
							</tbody> */}
							<tbody className="table_row">
								{filterStatus ? (
									filtering.map((userData, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{userData.firstname + " " + userData.lastname}</td>
											<td>{userData.email}</td>
											<td>{userData.registerID}</td>
											<td>{userData.mobilenumber}</td>
											<td>{userData.status}</td>
											<td>{userData.expireddate}</td>
											<td>
												{/* Pass user data to GotoDetails function */}
												<i
													className="fa-solid fa-eye"
													onClick={() => GotoDetails(userData)}
												></i>
											</td>
										</tr>
									))
								) : (
									<div className="p-2">No Data Found </div>
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

export default User;
