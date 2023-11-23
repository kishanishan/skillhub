import React, { useState } from "react";
import Sidebar from "../sidebar";

function Textcontent() {
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
								<p>Text Content Title</p>
								<input type="text" className="form-control" />
							</div>
						</div>

						<div className="batch_card p-3">
							<div>
								<p>Content</p>
								{/* <input type="text" className="form-control"/> */}
								<textarea className="form-control" rows={4}></textarea>
							</div>
						</div>

						<div className="mt-3">
							<button className="file">Insert Image</button>
						</div>
						<div className="batch_card p-3">
							<p>Publish</p>
							<select className="p-1 form-control">
								<option value="" hidden>
									--Select Publish --
								</option>
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
						</div>

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

						<div className="mt-3">
							<button className="file">Create</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Textcontent;
