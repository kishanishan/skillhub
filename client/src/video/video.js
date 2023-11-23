import React, { useState } from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";


function Video() {

	let navigate = useNavigate();

	const gotoVideoContent = () => {
		navigate("/videocontent");
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
								<p style={{ fontSize: "20px" }}>Categories</p>
								<div>
									<button
										className="year"
										data-toggle="modal"
										data-target="#myModal1"
									>
										{" "}
										+ Add Video Folder
									</button>
								</div>
								<div class="modal" id="myModal1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title">Add Video Folder</h5>
												<button
													type="button"
													class="close"
													data-dismiss="modal"
												>
													&times;
												</button>
											</div>

											<div class="modal-body">
												<div className="row">
													<div
														className="col-lg-12"
														style={{ textAlign: "start" }}
													>
														<label className="my-2">Folder Name</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button
													type="button"
													className="btn btn-danger my-3"
													data-dismiss="modal"
												>
													Create
												</button>
											</div>
										</div>
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
											<th style={{ fontWeight: "500" }}>Folder Name</th>
											<th style={{ fontWeight: "500" }}>Videos</th>
											<th style={{ fontWeight: "500" }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{/* {filteredData.map((item, index) => ( */}
										<tr>
											<td className="p-1">1</td>
											<td className="p-1">Frontend</td>
											<td className="p-1">0</td>
											<td className="p-1">
												<i className="fa-solid fa-video video" onClick={gotoVideoContent}></i>
												<i
													className="fa-solid fa-pencil pencile"
													data-toggle="modal"
													data-target="#myModal1"
												></i>
												<div class="modal" id="myModal1">
													<div class="modal-dialog">
														<div class="modal-content">
															<div class="modal-header">
																<h5 class="modal-title">Add Video Folder</h5>
																<button
																	type="button"
																	class="close"
																	data-dismiss="modal"
																>
																	&times;
																</button>
															</div>

															<div class="modal-body">
																<div className="row">
																	<div
																		className="col-lg-12"
																		style={{ textAlign: "start" }}
																	>
																		<label className="my-2">Folder Name</label>
																		<input
																			type="text"
																			className="form-control"
																		/>
																	</div>
																</div>
															</div>
															<div class="modal-footer">
																<button
																	type="button"
																	className="btn btn-danger my-3"
																	data-dismiss="modal"
																>
																	Create
																</button>
															</div>
														</div>
													</div>
												</div>
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

export default Video;
