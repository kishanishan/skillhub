import React, { useState } from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";

function Videocontent() {
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
								<p style={{ fontSize: "20px" }}>Video</p>
								<div>
									<button className="year"> + Add Content</button>
									<div className="content-options">
										<p className="" data-toggle="modal" data-target="#myModal">
											<i className="fa-brands fa-youtube"></i> Youtube
										</p>

										<p className="m-0">
											<i className="fa-solid fa-video"></i> Vimeo
										</p>
									</div>
									<div className="modal" id="myModal">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title">Add Video</h4>
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
														<p>Video Title</p>
														<input
															type="text"
															className="form-control"
															placeholder="video title"
														/>
													</div>
													<div className="mt-3">
														<p>Video Link</p>
														<input
															type="text"
															className="form-control"
															placeholder="video link"
														/>
													</div>
												</div>

												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-danger"
														data-dismiss="modal"
													>
														Add Video
													</button>
												</div>
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
											<th style={{ fontWeight: "500" }}>Video Title</th>
											<th style={{ fontWeight: "500" }}>Source</th>
											<th style={{ fontWeight: "500" }}>Watch</th>
										</tr>
									</thead>
									<tbody>
										{/* {filteredData.map((item, index) => ( */}
										<tr>
											<td className="p-1">1</td>
											<td className="p-1">Frontend</td>
											<td className="p-1">0</td>
											<td className="p-1">0</td>
											<td className="p-1">
												<button className="watch">
													{" "}
													<i className="fa-solid fa-video "></i> Watch video
												</button>
												<button className="watch">
													{" "}
													<i className="fa-solid fa-pencil "></i> Edit
												</button>
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

export default Videocontent;
