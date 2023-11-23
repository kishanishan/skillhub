import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const assessments = [
	{
		id: 1,
		category: "Programming",
		type: "Free",
		title: "Java MCQ Topicwise",
		author: "Your Vendor",
		count: 11,
	},
	{
		id: 2,
		category: "Programming",
		type: "Free",
		title: "Java Mock Tests",
		author: "Your Vendor",
		count: 32,
	},
	{
		id: 3,
		category: "App Development",
		type: "Free",
		title: "React",
		author: "Your Vendor",
		count: 0,
	},
	{
		id: 4,
		category: "Programming",
		type: "Free",
		title: "React Mock Tests",
		author: "Your Vendor",
		count: 14,
	},
];

function Assessment() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	const filteredAssessments = assessments.filter((assessment) => {
		return (
			selectedCategory === "All" || assessment.category === selectedCategory
		);
	});

	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="text-center" style={{ marginTop: "25px" }}>
					<button
						className={`program_button ${
							selectedCategory === "All" ? "active" : ""
						}`}
						onClick={() => handleCategoryClick("All")}
					>
						All
					</button>
					<button
						className={`program_button ${
							selectedCategory === "Programming" ? "active" : ""
						}`}
						onClick={() => handleCategoryClick("Programming")}
					>
						Programming
					</button>
					<button
						className={`program_button ${
							selectedCategory === "App Development" ? "active" : ""
						}`}
						onClick={() => handleCategoryClick("App Development")}
					>
						App Development
					</button>
				</div>
				<div className="row">
					<div className="col-lg-1"></div>
					<div className="col-lg-10 mb-4">
						<div className="row" style={{ paddingTop: "20px" }}>
							{filteredAssessments.map((assessment) => (
								<div className="col-lg-3 col-md-6 mt-2" key={assessment.id}>
									<div className="assessment_card">
										<div
											style={{
												borderBottom: "1px solid #c1bdbd",
												paddingBottom: "10px",
											}}
										>
											<button className="mb-3 program_btn">
												{assessment.category}
											</button>
											<button className="mb-3 program_btn1 ml-2">
												{assessment.type}
											</button>
											<div>
												<h4>{assessment.title}</h4>
											</div>
											<span>
												<em>By</em> {assessment.author}
											</span>
										</div>
										<div>
											<p>
												{" "}
												<i class="fa-solid fa-book-open mr-2 pt-3"></i>{" "}
												{assessment.count} Assessments
											</p>
										</div>
										<div>
											<button className="open_btn">Open</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-1"></div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Assessment;
