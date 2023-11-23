import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [primarymail, setPrimarymail] = useState("");

  const handleLogin = async (e) => {
	e.preventDefault(); // Prevent default form submission
  
	try {
	  const response = await fetch("http://localhost:1412/login", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	  });
  
	  if (response.ok) {
		const { token, payload } = await response.json();
		localStorage.setItem("token", token);
  
		// Redirect based on user type
		if (payload.user.type === "institution") {
		  console.log("Navigating to /institution");
		  navigate("/institution");
		} else if (payload.user.type === "user") {
		  console.log("Navigating to /user");
		  navigate("/user");
		}
	  } else {
		// Handle login failure
		console.error("Login failed");
	  }
	} catch (error) {
	  console.error("Error during login:", error);
	}
  };



  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <ToastContainer />
            <div className="">
              <img
                src="../images/login.jpg"
                className="img-fluid mt-4"
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-5 form_item my-auto">
            <div style={{ textAlign: "start" }}>
              <img
                src="../images/skillhub logo.png"
                className="img-fluid login_logo"
                alt="img"
              />
            </div>
            <h3>Login SkillHub Dashboard</h3>
            <form onSubmit={handleLogin}>
              <div className="mt-3">
                <label>Primary Email :</label>
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Enter your Email"
                  value={primarymail || email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <label className="mt-3">Password :</label>
              <div className="flex-item">
                <input
                  type={showPassword ? "text" : "password"}
                  id="psw"
                  className="form-control input_password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <i
                    className="fa-solid fa-eye p-2 eye"
                    onClick={togglePasswordVisibility}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash eye p-2"
                    onClick={togglePasswordVisibility}
                  ></i>
                )}
              </div>
              <div>
                <button type="submit" className="submit_btn mt-3">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
