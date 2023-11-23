import React from "react";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";

function Serchuser() {
	const [userName, setUserName] = useState("");
	const [originalUserData, setOriginalUserData] = useState([]);
	const [filteredUserData, setFilteredUserData] = useState([]);
	const [filterStatus, setFilterStatus] = useState(false);
	const [filtering, setfiltering] = useState([]);
	const [firstname, setfirstname] = useState("");

	const filterData = () => {
		setFilterStatus(true);
		const filteredData = originalUserData.filter((user) => {
			return firstname === "" || user.firstname === firstname;
		});
		setfiltering(filteredData);
	};

	useEffect(() => {
		// Fetch data from the API when the component mounts
		fetchData();
	}, []); // Empty dependency array ensures useEffect runs only once when the component mounts

	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:1412/user");
			const data = await response.json();
			setOriginalUserData(data);
			setFilteredUserData(data); // Initially, set filtered data to the original data
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleSearch = () => {
		// Filter the data based on the user name
		const filteredData = originalUserData.filter((user) =>
			user.firstname.toLowerCase().includes(userName.toLowerCase())
		);

		// Update the state with the filtered data
		setFilteredUserData(filteredData);
		setFilterStatus(true); // Set filter status to true
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
						</div>
					)}
					<div
						className={`col-lg-${isSidebarOpen ? 9 : 12} col-md-12 col-12 `}
						style={{ paddingTop: "20px" }}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<div className="batch_card p-3">
							<div className="mb-3">
								<p style={{ fontSize: "20px" }}>Download User</p>
								<div>
									<button className="year">Download</button>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 col-md-10">
									<input
										type="text"
										className="form-control"
										value={userName}
										onChange={(e) => setUserName(e.target.value)}
									/>
									<label className="mt-2">Search User</label>
								</div>

								<div className="col-lg-6 col-md-2">
									<button className="go_btn px-4" onClick={handleSearch}>
										<i class="fa-solid fa-magnifying-glass"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="batch_card p-3">
							<div className=" mb-4" style={{overflowX:"scroll"}}>
								<table class="table table-bordered text-center">
									<thead style={{ color: "#fff", backgroundColor: "#333333" }}>
										<tr>
											<th style={{fontWeight:"500"}}>S NO</th>
											<th style={{fontWeight:"500"}}>First Name</th>
											<th style={{fontWeight:"500"}}>Last Name</th>
											<th style={{fontWeight:"500"}}>Email</th>
											<th style={{fontWeight:"500"}}>Mobile No</th>
											<th style={{fontWeight:"500"}}>RegNo</th>
											<th style={{fontWeight:"500"}}>Batch Year</th>
											<th style={{fontWeight:"500"}}>Batch Name</th>
											<th style={{fontWeight:"500"}}>Institution Details</th>
											<th style={{fontWeight:"500"}}>View Details</th>
										</tr>
									</thead>
									<tbody>
										{filterStatus ? (
											filteredUserData.map((user, index) => (
												<tr key={index}>
													<td>{index + 1}</td>
													<td>{user.firstname}</td>
													<td>{user.lastname}</td>
													<td>{user.email}</td>
													<td>{user.mobilenumber}</td>
													<td>{user.registerID}</td>
													<td>{user.batchYear}</td>
													<td>{user.batch}</td>
													<td>{user.institutionType}</td>
													<td>
														<i className="fa-solid fa-eye pencile"></i>
													</td>
												</tr>
											))
										) : (
											<div className="p-1">No Data Found </div>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-1"></div>
				</div>
			</div>
		</div>
	);
}

export default Serchuser;
