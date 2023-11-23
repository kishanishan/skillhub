import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Sidebar() {
	let navigate = useNavigate();

	const gotoLogin = () => {
		navigate("/");
	};

	const [isOpen, setisOpen] = useState(false);
	const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);

	const toggle = () => setisOpen(!isOpen);
	const toggleInstitutions = () => setIsInstitutionsOpen(!isInstitutionsOpen);

	const [islearnOpen, setIslearnOpen] = useState(false);

	const togglelearnopen = () => setIslearnOpen(!islearnOpen);

	return (
		<div>
			<div className="side_item d-none d-lg-block">
				<div className="d-flex justify-content-start  sticky-top">
					<div
						style={{
							backgroundColor: "#333",
							height: "60px",
							padding: "10px",
							width: "100%",
							textAlign: "center",
						}}
					>
						<img
							src="./images/skillhub.png"
							className="img-fluid skill_img"
							alt="img"
						/>
					</div>
					{/* <div className="mr-1">
						<i className="fa-solid fa-bars bars" ></i>
					</div> */}
				</div>
				<div className="mt-3">
					<div
						className=""
						style={{ textAlign: "justify", paddingLeft: "20px" }}
					>
						<div className="">
							<div className="mt-3 ">
								<NavLink to="/" className="my-3  employement ">
									<div className="d-flex ">
										<div>
											<i className="fa-solid fa-pager pl-3"></i>
										</div>
										<div className="pl-3"> Dashboard</div>
									</div>
								</NavLink>{" "}
							</div>
							<div className="mt-3">
								<NavLink to="/institution" className="my-3  employement ">
									<div className="d-flex ">
										<div>
											<i className="fa-solid fa-house pl-3"></i>
										</div>
										<div className="pl-3">Homepage</div>
									</div>
								</NavLink>{" "}
							</div>
							<div className="mt-3">
								<div style={{ fontSize: "20px" }} className="ml-3">Institution</div>

								<div
									className="employement my-3"
									style={{ cursor: "pointer" }}
									onClick={toggleInstitutions}
								>
									<div className="">
										<div className="px-3 d-flex justify-content-between">
											<div>
											Instutions{" "}

											</div>
											{isInstitutionsOpen ? (
												<i className="fa-solid fa-angle-up pl-5"></i>
											) : (
												<i className="fa-solid fa-angle-down pl-5"></i>
											)}
										</div>
									</div>
								</div>
								{isInstitutionsOpen && (
									<div>
										<div className="mt-3">
											<NavLink
												to="/addinstitution"
												className="employement my-3  "
											>
												<div className="d-flex ">
													<div>
														<i className="fa-solid fa-building-columns pr-3 pl-3"></i>
													</div>
													<div className="pl-3">Instutions</div>
												</div>
											</NavLink>
										</div>
										<div className="mt-3">
											<NavLink to="/batchyear" className="employement my-3  ">
												<div className="d-flex ">
													<div>
														<i className="fa-solid fa-user-group pr-3 pl-3"></i>
													</div>
													<div className="pl-3">Batch Year</div>
												</div>
											</NavLink>
										</div>
										<div className="mt-3">
											<NavLink to="/batch" className="employement my-3 ">
												<div className="d-flex ">
													<div>
														<i className="fa-solid fa-people-group pr-3 pl-3"></i>
													</div>
													<div className="pl-3">Batches</div>
												</div>
											</NavLink>
										</div>
										<div className="mt-3">
											<NavLink to="/user" className="employement my-3 ">
												<div className="d-flex ">
													<div>
														<i className="fa-solid fa-users pr-3 pl-3"></i>
													</div>
													<div className="pl-3">Users</div>
												</div>
											</NavLink>
										</div>
										<div className="mt-3">
											<NavLink to="/serchuser" className="employement my-3 ">
												<div className="d-flex ">
													<div>
														<i className="fa-brands fa-searchengin pr-3 pl-3"></i>
													</div>
													<div className="pl-3">Serch Users</div>
												</div>
											</NavLink>
										</div>
									</div>
								)}
							</div>
							<div>
								<div className="pt-2 ml-3" style={{ fontSize: "20px" }}>
									Learning Path
								</div>

								<div>
									<div className="" style={{ cursor: "pointer" }}>
										<div className="px-3 pt-3 d-flex justify-content-between" onClick={togglelearnopen}>
											<div>
											<i class="fa-regular fa-folder pr-3"></i> Learning Path{" "}
											</div>
											{islearnOpen ? (
												<i className="fa-solid fa-angle-up pl-5"></i>
											) : (
												<i className="fa-solid fa-angle-down pl-5"></i>
											)}
										</div>
									</div>
									{islearnOpen && (
										<div>
											<div className="mt-3">
												<NavLink to="/Learn" className="employement my-3  ">
													<div className="d-flex ">
														<div className="pl-3">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Lerning Paths
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/video" className="employement my-3  ">
													<div className="d-flex ">
														<div className="pl-3">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Video Folders{" "}
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/batch" className="employement my-3 ">
													<div className="d-flex ">
														<div className="pl-3">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Reports
														</div>
													</div>
												</NavLink>
											</div>
										</div>
									)}
									<div className="mt-3">
										<NavLink to="/Access" className="employement my-3 ">
											<div className="d-flex ">
												<div>
													<i class="fa-solid fa-pen pl-3"></i>{" "}
												</div>
												<div className="pl-3">Access</div>
											</div>
										</NavLink>
									</div>
								</div>
							</div>

							<div className="py-5">
								<button className="logout ml-3" style={{ fontWeight: "500" }}>
									Logout{" "}
									<i
										className="fa-solid fa-right-from-bracket"
										style={{ fontSize: "15px" }}
									></i>
								</button>

								{/* <i
									className="fa-solid fa-right-from-bracket "
									style={{ fontSize: "18px" }}
								></i> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-dark d-lg-none p-0"  >
				<div className="container-fluid">

				<NavLink to="/" className="navbar-brand">
						<img
							src="./images/skillhub.png"
							className="img-fluid skill_img "
							alt="img"
						/>
					</NavLink>
					{/* Toggle button for the sidebar */}
					<button
						className="navbar-toggler mx-3"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						{/* <span className="navbar-toggler-icon"></span> */}
						<i className="fa-solid fa-bars " ></i>

					</button>

					{/* Brand/logo */}
					

					{/* Navbar links */}
					<div className="collapse navbar-collapse p-3" id="navbarNav" style={{backgroundColor:"#000", height:"100%"}}>
						<ul className="navbar-nav ml-auto">
							{/* Add your navbar links here */}
							<li className="nav-item" style={{color:"#fff"}}>
								<NavLink to="/" className="nav-link">
									Dashboard
								</NavLink>
							</li>
							<li className="nav-item" style={{color:"#fff"}}>
								<NavLink to="/institution" className="nav-link">
									Homepage
								</NavLink>
							</li>
							<li className="nav-item">
								<div className="mt-3">
									<div style={{ fontSize: "20px", color:"#fff" }}>Institution</div>

									<div
										className="employement my-3"
										style={{ cursor: "pointer" }}
										onClick={toggleInstitutions}
									>
										<div className="" style={{color:"#fff"}} >
											<div className=" d-flex justify-content-between" >
												<div>
												Instutions{" "}

												</div>
												{isInstitutionsOpen ? (
													<i className="fa-solid fa-angle-up "></i>
												) : (
													<i className="fa-solid fa-angle-down "></i>
												)}
											</div>
										</div>
									</div>
									{isInstitutionsOpen && (
										<div>
											<div className="mt-3">
												<NavLink
													to="/addinstitution"
													className="employement my-3  "
												>
													<div className="d-flex "  style={{color:"#fff"}}>
														<div>
															<i className="fa-solid fa-building-columns pr-3 "></i>
														</div>
														<div className="">Instutions</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/batchyear" className="employement my-3  ">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-user-group pr-3 "></i>
														</div>
														<div className="">Batch Year</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/batch" className="employement my-3 ">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-people-group pr-3 "></i>
														</div>
														<div className="">Batches</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/user" className="employement my-3 ">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-users pr-3 "></i>
														</div>
														<div className="">Users</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/serchuser" className="employement my-3 ">
													<div className="d-flex ">
														<div>
															<i className="fa-brands fa-searchengin pr-3"></i>
														</div>
														<div className="">Serch Users</div>
													</div>
												</NavLink>
											</div>
										</div>
									)}
								</div>
							</li>
							<li className="nav-item">
								<div className="pt-2 " style={{ fontSize: "20px", color:"#fff" }}>
									Learning Path
								</div>

								<div>
									<div className="" style={{ cursor: "pointer", color:"#fff" }}>
										<div className=" pt-3  d-flex justify-content-between" onClick={togglelearnopen}>
											<div>
											<i class="fa-regular fa-folder pr-3"></i> Learning Path{" "}
											</div>
											<div>
											{islearnOpen ? (
												<i className="fa-solid fa-angle-up "></i>
											) : (
												<i className="fa-solid fa-angle-down "></i>
											)}
											</div>
											
										</div>
									</div>
									{islearnOpen && (
										<div>
											<div className="mt-3">
												<NavLink to="/Learn" className="employement my-3  ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Lerning Paths
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/video" className="employement my-3  ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Video Folders{" "}
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/batch" className="employement my-3 ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Reports
														</div>
													</div>
												</NavLink>
											</div>
										</div>
									)}
									<div className="mt-3">
										<NavLink to="/Access" className="employement my-3 ">
											<div className="d-flex ">
												<div>
													<i class="fa-solid fa-pen "></i>{" "}
												</div>
												<div className="pl-3">Access</div>
											</div>
										</NavLink>
									</div>
								</div>
							</li>
						</ul>
						<button className="logout ml-3 mt-3" style={{ fontWeight: "500" }}>
						Logout{" "}
						<i
							className="fa-solid fa-right-from-bracket"
							style={{ fontSize: "15px" }}
						></i>
					</button>
					</div>

					{/* Logout button */}
					
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
