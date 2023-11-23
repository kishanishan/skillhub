import React, { useState } from "react";
import Sidebar from "../sidebar";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Learning() {
	const [subscriptionType, setSubscriptionType] = useState("");

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
								<p>Learning Path</p>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Tags</p>
								<select className="p-1 form-control">
									<option value="">--Select Relavent Tags --</option>
									<option value="AWS">AWS</option>
									<option value="Database">Database</option>
									<option value="DataScience">DataScience</option>
									<option value="DevOps">DevOps</option>
									<option value="Mobile App Developement">
										Mobile App Developement
									</option>
									<option value="Programming">Programming</option>
									<option value="Scripting">Scripting</option>
									<option value="Software Testing">Software Testing</option>
									<option value="Test Preparation">Test Preparation</option>
									<option value="Web Development">Web Development</option>
									<option value="Web Services">Web Services</option>
									<option value="Verbal and Communication">
										Verbal and Communication
									</option>
								</select>
							</div>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Cover Letter</p>
								{/* <input type="text" className="form-control"/> */}
								<textarea className="form-control" rows={4}></textarea>
							</div>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Defficulty</p>
								<select className="p-1 form-control">
									<option value="">--Select Defficulty --</option>
									<option value="Beginner">Beginner</option>
									<option value="Intermediate">Intermediate</option>
									<option value="Advanced">Advanced</option>
								</select>
							</div>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Subcription</p>
								<select
									className="p-1 form-control"
									onChange={(e) => setSubscriptionType(e.target.value)}
								>
									<option value="">--Select Subcription --</option>
									<option value="Free">Free</option>
									<option value="Paid">Paid</option>
								</select>
							</div>
						</div>
						{subscriptionType === "Paid" && (
							<div>
								<div className="batch_card p-3">
									<div>
										<p>Price</p>
										<input type="number" className="form-control" />
									</div>
								</div>
								<div className="batch_card p-3">
									<div>
										<p>Discount</p>
										<input type="number" className="form-control" />
									</div>
								</div>
							</div>
						)}
						<div className="batch_card p-3">
							<div>
								<p>About This Learning Path</p>
								<textarea className="form-control" rows={6}></textarea>

								{/* <select className="p-1 form-control">
									<option value="">--Select Subcription --</option>
									<option value="Corporate">Free</option>
									<option value="Corporate">Paid</option>									
								</select> */}

								{/* <CKEditor
									editor={ClassicEditor}
									// config={editorConfiguration} 
									data="<p>Hello from CKEditor 5!</p>"
									onInit={(editor) => {
										// You can store the "editor" and use when it is needed.
										console.log("Editor is ready to use!", editor);
									}}
									onChange={(event, editor) => {
										const data = editor.getData();
										console.log({ event, editor, data });
									}}
									onBlur={(event, editor) => {
										console.log("Blur.", editor);
									}}
									onFocus={(event, editor) => {
										console.log("Focus.", editor);
									}}
								/> */}
							</div>
						</div>
						<div className="batch_card p-3">
							<div>
								<p>Author</p>
								<input
									type="number"
									className="form-control"
									placeholder="author"
								/>
							</div>
						</div>
						<div className="batch_card p-3">
							<div className="row">
								<div className="col-lg-3">
									<div>
										<p>Hours</p>
										<input
											type="number"
											className="form-control"
											placeholder="author"
										/>
									</div>
								</div>
								<div className="col-lg-3">
									<div>
										<p>Minutes</p>
										<input type="number" className="form-control" />
									</div>
								</div>
								<div className="col-lg-6">
									<div>
										<p>Learning Page</p>
										<input
											type="file"
											className="form-control"
											placeholder="author"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="batch_card p-3">
							<div className="batch_flex mb-4">
								<p>What You'll Learn</p>
								<div>
									<button className="year"> + Add</button>
								</div>
							</div>
							<div>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="batch_card p-3">
							<div className="batch_flex mb-4">
								<p>Requirement</p>
								<div>
									<button className="year"> + Add</button>
								</div>
							</div>
							<div>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div>
							<button className="create_btn">Create</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Learning;
