import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Changepassword() {
	const { state } = useLocation();
	const user = state && state.user;

	const [newPassword, setNewPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const fetchUserData = async () => {
		try {
			if (!user || !user.email) {
				throw new Error("User email is missing.");
			}

			const email = user.email;
			const response = await axios.get(`http://localhost:1412/user/${email}`);
			console.log(response.data);
			setNewPassword(response.data.password);
			console.log(response.data.password);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, [user]);
    const handlePasswordChange = async () => {
        try {
          if (!user || !user.email || !newPassword) {
            throw new Error("User email or new password is missing.");
          }
    
          const email = user.email;
          const response = await axios.put(`http://localhost:1412/user/${email}`, {
            password: newPassword,
          });
    
          if (response.status === 200) {
            setSuccessMessage("Password updated successfully");
            setErrorMessage("");
          } else {
            setErrorMessage("Failed to update password. Please try again.");
          }
        } catch (error) {
          setSuccessMessage("");
          setErrorMessage("Failed to update password. Please try again.");
          console.error("Error updating password:", error);
        }
      };
    
	return (
		<div>
			{/* <Navbar /> */}
			<div>
				<div className="row">
					<div className="col-lg-4"></div>
					<div className="col-lg-4 mt-5">
						<div className="password_card">
							<div className="text-center">
								<img src="./images/skillhub logo.png" className="img-fluid" alt="img" style={{height:"100px"}}/>
							</div>
							<div className="text-center my-4">
								<h3>Change Password</h3>
							</div>
							<h5 className="my-3">User Email: {user.email}</h5>
							<label>Change New Password : </label>
							<input
								type="text"
								className="form-control"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<div className="my-4 text-center">
								<button className="update_btn" onClick={handlePasswordChange}>
									Update Password
								</button>
							</div>
							{successMessage && (
								<p className="text-success">{successMessage}</p>
							)}
							{errorMessage && <p className="text-danger">{errorMessage}</p>}
						</div>
					</div>
					<div className="col-lg-4"></div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Changepassword;
