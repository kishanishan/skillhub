import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const assessments = [
	{
		id: 1,
		category: "Programming",
		type: "Free",
		title: "Data Structure",
		count: 10,
	},
	{
		id: 2,
		category: "Programming",
		type: "Free",
		title: "JAVA Beginner",
		count: 13,
	},
	{
		id: 3,
		category: "Programming",
		type: "Free",
		title: "JAVA OOPS",
		count: 12,
	},
	{
		id: 4,
		category: "Programming",
		type: "Free",
		title: "JAVA Advanced",
		author: "Your Vendor",
		count: 10,
	},
];

function Course() {
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
											<button className="mb-3 program_btn1">
												{assessment.category}
											</button>
											<button className="mb-3 program_btn1 ml-2">
												{assessment.type}
											</button>
											<div>
												<h4>{assessment.title}</h4>
											</div>
										</div>
										<div>
											<p>
												{" "}
												<i class="fa-solid fa-book-open mr-2 pt-3"></i>{" "}
												{assessment.count} Topics
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

export default Course;
