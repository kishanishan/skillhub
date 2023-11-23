import React from "react";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";

function Learnaccess() {
	const [institutions, setInstitutions] = useState([]);
	const [batchYears, setBatchYears] = useState([]);
	const [batches, setBatches] = useState([]);
	const [selectedData, setSelectedData] = useState({
		institution: "",
		batchYear: "",
		batch: "",
	});
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		// Fetch data from the government institution API
		fetch("http://localhost:1412/government-institution")
			.then((response) => response.json())
			.then((data) => setInstitutions(data));

		// Fetch data from the corporate institution API
		fetch("http://localhost:1412/corporate-institution")
			.then((response) => response.json())
			.then((data) =>
				setInstitutions((prevInstitutions) => [...prevInstitutions, ...data])
			);
	}, []);

	const handleInstitutionChange = (event) => {
		const selectedInstitution = event.target.value;
		// Assuming there is an API endpoint like http://localhost:1412/batch-years/:institutionId
		fetch(`http://localhost:1412/batch-years/${selectedInstitution}`)
			.then((response) => response.json())
			.then((data) => setBatchYears(data));

		setBatches([]);
		setSelectedData((prev) => ({ ...prev, institution: selectedInstitution }));
	};

	const handleBatchYearChange = (event) => {
		const selectedBatchYear = event.target.value;
		const selectedInstitution = selectedData.institution;
		// Assuming there is an API endpoint like http://localhost:1412/batches/:institutionId/:batchYear
		fetch(
			`http://localhost:1412/batches/${selectedInstitution}/${selectedBatchYear}`
		)
			.then((response) => response.json())
			.then((data) => setBatches(data));

		setSelectedData((prev) => ({ ...prev, batchYear: selectedBatchYear }));
	};

	const handleBatchChange = (event) => {
		const selectedBatch = event.target.value;
		setSelectedData((prev) => ({ ...prev, batch: selectedBatch }));
	};

	const handleSubmit = () => {
		// Add the selected data to the tableData state
		setTableData((prevTableData) => [
			...prevTableData,
			{ ...selectedData, id: prevTableData.length + 1 },
		]);

		// Reset selectedData state
		setSelectedData({ institution: "", batchYear: "", batch: "" });
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
						style={{ paddingTop: "20px", height: "100vh", overflowY: "scroll" }}
					>
						<div className="mr-1 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Learning Path Access</p>
							</div>
							<div className="row">
								<div className="col-lg-3">
									<div>
										<p>Institution</p>
										<select
											className="p-1 form-control"
											onChange={handleInstitutionChange}
										>
											<option value="">--Select Institution --</option>
											{institutions.map((institution) => (
												<option key={institution.id} value={institution.id}>
													{institution.name}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="col-lg-3">
									<div>
										<p>Batch Year</p>

										<select
											className="p-1 form-control"
											onChange={handleBatchYearChange}
										>
											<option value="">--Select Batch Year --</option>
											{batchYears.map((year) => (
												<option key={year} value={year}>
													{year}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="col-lg-6">
									<div>
										<p>Batches</p>

										<select className="p-1 form-control">
											<option value="">--Select Batches --</option>
											{batches.map((batch) => (
												<option key={batch.id} value={batch.id}>
													{batch.name}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
							<div className="text-center mt-3">
								<button className="create_btn" onClick={handleSubmit}>
									submit
								</button>
							</div>
						</div>
						<div className="mt-3">
							<p className="m-0">Access Table</p>
						</div>
						<div className="batch_card p-3">
							<div style={{overflowX:"scroll"}}>
							<table class="table table-bordered text-center">
								<thead style={{ color: "#fff", backgroundColor: "#333333" }}>
									<tr>
										<th style={{ fontWeight: "500" }}>S NO</th>
										<th style={{ fontWeight: "500" }}>Institution Name</th>
										<th style={{ fontWeight: "500" }}>Batch Year</th>
										<th style={{ fontWeight: "500" }}>Batch</th>
										<th style={{ fontWeight: "500" }}>Access</th>
									</tr>
								</thead>
								<tbody>
									{/* {filteredData.map((item, index) => ( */}
									<tr>
										<td>1</td>
										<td>Corporate</td>
										<td>2020</td>
										<td>A-Batch</td>
										<td><i class="fa-solid fa-check check"></i></td>
									</tr>
									{/* ))} */}
								</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Learnaccess;
