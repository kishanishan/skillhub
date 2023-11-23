import React from "react";
import Sidebar from "../sidebar";
import { useState } from "react";

function Batch() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
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
				<div className="col-lg-1 mt-3">
					<div className="mr-1 d-lg-block d-none">
						<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
					</div>
				</div>
				<div
					className={`col-lg-${isSidebarOpen ? 7 : 12} col-md-12 col-12 `}
					style={{ paddingTop: "20px" }}
				>
					{" "}
					<div className="batch_card p-3">
						<div className="batch_flex mb-4">
							<p style={{ fontSize: "20px" }}>Filter Batches</p>
							<div>
								<button
									className="year"
									data-toggle="modal"
									data-target="#myModal"
								>
									{" "}
									+ Create Batch
								</button>
							</div>
							<div class="modal" id="myModal">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Create Batch</h5>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										<div class="modal-body">
											<div className="row">
												<div className="col-lg-12">
													<label className="mt-2"> Institution</label>
													<select
														className="p-1 form-control"
														// value={modalInstitutionType}
														// onChange={handleModalInstitutionTypeChange}
													>
														<option value="">--Select Institution --</option>
														<option value="Corporate">Corporate</option>
														<option value="Government">Government</option>
													</select>

													<label className="mt-2"> Batch Year</label>

													<select
														className="p-1 form-control"
														// value={modalInstitutionType}
														// onChange={handleModalInstitutionTypeChange}
													>
														<option value="">--Select Batch Year --</option>
														<option value="2021">2021</option>
														<option value="2020">2020</option>
													</select>
												</div>
												<div className="col-lg-12">
													<label className="my-2"> Batch Name</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-danger"
												data-dismiss="modal"
											>
												Create
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-10">
								<select
									className="p-1 form-control"
									// value={modalInstitutionType}
									// onChange={(event) =>
									// 	setModalInstitutionType(event.target.value)
									// }
								>
									<option value="">--Select Institution --</option>
									<option value="Corporate">Corporate</option>
									<option value="Government">Government</option>
								</select>
								<label className="mt-2">Select Institution</label>
							</div>

							<div className="col-lg-6 col-md-2">
								<button className="go_btn">GO</button>
							</div>
						</div>
					</div>
					<div className="batch_card p-3">
						<div className=" mb-4" style={{overflowX:"scroll"}}>
							<table class="table table-bordered text-center">
								<thead style={{ color: "#fff", backgroundColor: "#333333" }}>
									<tr>
										<th style={{fontWeight:"500"}}>S NO</th>
										<th style={{fontWeight:"500"}}>Batch Year</th>
										<th style={{fontWeight:"500"}}>Batches</th>
										<th style={{fontWeight:"500"}}>Users</th>
										<th style={{fontWeight:"500"}}>Actions</th>
									</tr>
								</thead>
								<tbody>
									{/* {filteredData.map((item, index) => ( */}
									<tr>
										<td>1</td>
										<td>2020</td>
										<td>A-Batch</td>
										<td>4</td>
										<td>
											<i
												class="fa-solid fa-pencil pencile"
												data-toggle="modal"
												data-target="#myModal1"
											></i>
											<div class="modal" id="myModal1">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title">Edit Batch Year</h5>
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
																	<label className="my-2"> Batch Year</label>
																	<input type="text" className="form-control" />
																</div>
															</div>
														</div>
														<div class="modal-footer">
															<button
																type="button"
																class="btn btn-danger"
																data-dismiss="modal"
															>
																Update
															</button>
														</div>
													</div>
												</div>
											</div>
											<i class="fa-solid fa-trash delete"></i>
										</td>
									</tr>
									{/* ))} */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="col-lg-1"></div>
			</div>
		</div>
	);
}

export default Batch;
