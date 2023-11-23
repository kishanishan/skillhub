import React, { useState } from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";

function Content() {
	let navigate = useNavigate();

	const gototextContent = () => {
		navigate("/textcontent");
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
							<div className="batch_flex mb-4">
								<p style={{ fontSize: "20px" }}>Content : React Intro</p>
								<div>
									<button className="year"> + Add Content</button>
									<div className="content-options">
										<p className="m-0" onClick={gototextContent}>
											<i className="fa-solid fa-t"></i> Text Content
										</p>
										<p className="m-0">
											<i className="fa-solid fa-video"></i> Video Content
										</p>
										<p className="m-0">
											<i className="fa-solid fa-file"></i> Assessment
										</p>
									</div>
								</div>
							</div>

							<div className=" mb-4" style={{overflowX:"scroll"}}>
								<table class="table table-bordered text-center">
									<thead
										style={{
											color: "#fff",
											backgroundColor: "#333333",
											fontWeight: "400",
										}}
									>
										<tr>
											<th style={{ fontWeight: "500" }}>S NO</th>
											<th style={{ fontWeight: "500" }}>Title</th>
											<th style={{ fontWeight: "500" }}>Content Type</th>
											<th style={{ fontWeight: "500" }}>Display</th>
											<th style={{ fontWeight: "500" }}>Last Update</th>
											<th style={{ fontWeight: "500" }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{/* {filteredData.map((item, index) => ( */}
										<tr>
											<td className="p-1">1</td>
											<td className="p-1">React Intro</td>
											<td className="p-1">Text</td>
											<td className="p-1">
												<i
													class="fa-solid fa-toggle-on"
													style={{ fontSize: "25px", color: "green" }}
												></i>
											</td>
											<td className="p-1">Just Now</td>

											<td className="p-1">
												<i
													className="fa-solid fa-pencil pencile"
													onClick={gototextContent}
												></i>

												<i class="fa-solid fa-trash delete"></i>
											</td>
										</tr>
										{/* ))} */}
									</tbody>
								</table>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
