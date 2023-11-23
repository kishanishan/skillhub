import React, { useState } from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";

function Access() {
	let navigate = useNavigate();

	const gotoLearning = () => {
		navigate("/Learning");
	};
	const gotoLearnAccess = () => {
		navigate("/learnaccess");
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
						className={`col-lg-${isSidebarOpen ? 9 : 11} col-md-12 col-12 `}
						style={{ paddingTop: "20px" }}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<div className="batch_card p-3">
							<div className="batch_flex mb-4">
								<p style={{ fontSize: "20px" }}>Learning Path</p>
								<div>
									<button className="year" onClick={gotoLearning}> + Add Learning Path</button>
									<div className="mt-3">
										Search :<input type="text" className="form-control" />
									</div>
								</div>
							</div>
							<div className="mb-3 col-lg-2 col-md-2">
								<select className="p-1 form-control">
									<option value="" hidden>
										0
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
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
											<th style={{ fontWeight: "500" }}>Name</th>
											<th style={{ fontWeight: "500" }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="p-1">1</td>
											<td className="p-1">Node JS</td>

											<td className="p-1">
												<i class="fa-solid fa-file file" onClick={gotoLearnAccess}></i>
											</td>
										</tr>
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

export default Access;
