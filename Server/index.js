const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const institutionDetails = require("./model/governnament");
const institutionDetails1 = require("./model/corporate");
const userdetails = require("./model/user");
const jwt = require("jsonwebtoken");
const userData = require("./model/userdetails");

const app = express();

app.use(cors());
app.use(express.json());

const port = 1412;

mongoose
	.connect(
		"mongodb+srv://pathlavathkishan77495:kishan789@cluster14.lafg4t1.mongodb.net/empDetails?retryWrites=true&w=majority"
	)
	.then((res) => console.log("db connected"))
	.catch((err) => console.log(err.message));

app.post("/institution", async (req, res) => {
	try {
		const selectedCollection =
			req.body.institutiontype === "Government"
				? institutionDetails
				: institutionDetails1;

		const existingUser = await selectedCollection.findOne({
			primarymail: req.body.primarymail,
		});

		// const{institutionName, headofInstitution, primarymail, secondarymail, primarycontact, secondarycontact, Adress, city, state, institutioncode, institutiontype, accessplan, password} = req.body         // getting the data from the body
		// const existinguser = await institutionDetails.findOne({
		// 	primarymail: req.body.primarymail,
		// }); // fetching the user from database based on email

		if (!existingUser) {
			// if user already exist in database, sending response already exisiting
			const newUser = {
				institutionName: req.body.institutionName,
				headofInstitution: req.body.headofInstitution,
				primarymail: req.body.primarymail,
				secondarymail: req.body.secondarymail,
				primarycontact: req.body.primarycontact,
				secondarycontact: req.body.secondarycontact,
				Adress: req.body.Adress,
				city: req.body.city,
				state: req.body.state,
				institutioncode: req.body.institutioncode,
				institutiontype: req.body.institutiontype,
				accessplan: req.body.accessplan,
				password: req.body.password,
				batchYear: req.body.batchYear,
				batch: req.body.batch,
				type: req.body.type,

			};
			const usercreate = await selectedCollection.create(newUser);
			console.log(usercreate);
			console.log(newUser);
			res.status(200).send("Institution details upadate successfull");
		} else {
			res.status(402).send("institution already register");
		}
		// if user not exist proceeding to the next by creating user
		// checking password and confirmpassword for validation

		// if passwords matched the only create the user

		// if(password===confirmPassword){
		//     const user = {

		//     }
	} catch (e) {
		//  if passwords doesnot match , then returning an error passwords not maytching

		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
		return res.status(500).json({ message: e.message });
	}
	console.log();
});

app.post("/user", async (req, res) => {
    console.log(req.body);

    try {
        const { email } = req.body;

        // Check if the user with the given email already exists in either schema
        const existingUserDetails = await userdetails.findOne({ email });
        const existingUserData = await userData.findOne({ email });

        if (!existingUserDetails && !existingUserData) {
            // If the user does not exist in either schema, create instances for both
            const newUserDetails = new userdetails({
                institutionType: req.body.institutionType,
                institutionName: req.body.institutionName,
                batchYear: req.body.batchYear,
                batch: req.body.batch,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                registerID: req.body.registerID,
                mobilenumber: req.body.mobilenumber,
                password: req.body.password,
                accessperiod: req.body.accessperiod,
                expireddate: req.body.expireddate,
                status: req.body.status,
				type: req.body.type
            });

            const newUserData = new userData({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                type: req.body.type,
                // Add other fields specific to 'userData' schema
                // ...
            });

            // Save instances to both schemas
            const userCreateDetails = await newUserDetails.save();
            const userCreateData = await newUserData.save();

            console.log(userCreateDetails);
            console.log(userCreateData);

            res.status(200).send("User details added successfully to both schemas");
        } else {
            // If the user already exists in either schema, send a response indicating that the user is already registered
            res.status(402).send("User already registered");
        }
    } catch (e) {
        // Handle errors
        return res.status(500).json({ message: e.message });
    }
});


//  getting all users from userdetails
app.get("/user", async (req, res) => {
	try {
		const userdate = await userdetails.find({});
		return res.json(userdate);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// getting individual user
app.get("/user/:emailId", async (req, res) => {
	try {
		const { emailId } = req.params;

		const userdate = await userdetails.findOne({ email: emailId });
		return res.json(userdate);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

//  getting total users count
app.get("/usercount", async (req, res) => {
	try {
		const institutionTypeCounts = await userdetails.aggregate([
			{
				$group: {
					_id: "$institutionType",
					count: { $sum: 1 },
				},
			},
		]);

		return res.json(institutionTypeCounts);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// login

// app.post("/login", async (req, res) => {
// 	const { primarymail, password, institutionType } = req.body;

// 	try {
// 		let selectedModel;

// 		if (institutionType === "Government") {
// 			selectedModel = institutionDetails;
// 		} else if (institutionType === "Corporate") {
// 			selectedModel = institutionDetails1;
// 		} else {
// 			return res.status(400).json({ message: "Invalid institution type" });
// 		}

// 		const user = await selectedModel.findOne({ primarymail });

// 		if (!user) {
// 			return res.status(404).json({ message: "User not found" });
// 		}

// 		const userPassword = user.password;
// 		if (password === userPassword) {
// 			// Include user details in the token payload
// 			const payload = {
// 				user: {
// 					primarymail: user.primarymail,
// 					// Include other relevant user details
// 				},
// 			};

// 			jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
// 				if (err) {
// 					console.error(err);
// 					return res.status(500).json({ message: "Error creating token" });
// 				}
// 				return res.json({ token, payload });
// 			});
// 		} else {
// 			res.status(401).json({ message: "Incorrect password" });
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });

// app.post("/login", async (req, res) => {
// 	const { primarymail, password } = req.body;

// 	try {
// 		const user = await institutionDetails.findOne({ primarymail });
// 		const user1 = await institutionDetails1.findOne({primarymail});

// 		if (!user) {
// 			return res.status(404).json({ message: "User not found" });
// 		}

// 		const userPassword = user.password;
// 		if (password === userPassword) {
// 			// Include user details in the token payload
// 			const payload = {
// 				user: {
// 					primarymail: user.primarymail,
// 					// Include other relevant user details
// 				},
// 			};

// 			jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
// 				if (err) {
// 					console.error(err);
// 					return res.status(500).json({ message: "Error creating token" });
// 				}
// 				return res.json({ token, payload });
// 			});
// 		} else {
// 			res.status(401).json({ message: "Incorrect password" });
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });

// app.post("/login", async (req, res) => {
// 	const { primarymail, password } = req.body;

// 	try {
// 		const userInSchema1 = await institutionDetails.findOne({ primarymail });
// 		const userInSchema2 = await institutionDetails1.findOne({ primarymail });

// 		let user;

// 		if (userInSchema1) {
// 			user = userInSchema1;
// 		} else if (userInSchema2) {
// 			user = userInSchema2;
// 		} else {
// 			return res.status(404).json({ message: "User not found" });
// 		}

// 		const userPassword = user.password;
// 		if (password === userPassword) {
// 			// Include user details in the token payload
// 			const payload = {
// 				user: {
// 					primarymail: user.primarymail,
// 					// Include other relevant user details
// 				},
// 			};

// 			jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
// 				if (err) {
// 					console.error(err);
// 					return res.status(500).json({ message: "Error creating token" });
// 				}
// 				return res.json({ token, payload });
// 			});
// 		} else {
// 			res.status(401).json({ message: "Incorrect password" });
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });

// app.post("/login", async (req, res) => {
// 	const {firstname, lastname, email,  password, primarymail } = req.body;

// 	try {
// 		const user = await userData.findOne({ primarymail });

// 		if (!user) {
// 			return res.status(404).send("User not found");
// 		}
// 		const userPassword = user.password;
// 		if (password === userPassword) {
// 			// Include user details in the token payload
// 			const payload = {
// 				user: {
// 					primarymail: user.primarymail,
// 					email: user.email,
// 					// Include other relevant user details
// 				},
// 			};

// 			jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
// 				if (err) {
// 					console.error(err);
// 					return res.status(500).json({ message: "Error creating token" });
// 				}
// 				return res.json({ token, payload });
// 			});
// 		} else {
// 			res.status(401).send("Incorrect password");
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });


app.post("/register", async (req, res) => {
	const { firstname, lastname, email, password, primarymail, type } = req.body;
  
	try {
	  // Check if the user already exists
	  const existingUser = await userData.findOne({ $or: [{ email }, { primarymail }] });
  
	  if (existingUser) {
		return res.status(400).json({ message: "User already exists" });
	  }
  
	  // Create a new user
	  const newUser = new userData({
		firstname,
		lastname,
		email,
		password,
		primarymail,
		type,
	  });
  
	  // Save the user to the database
	  await newUser.save();
  
	  res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: "Internal server error" });
	}
  });
  

  app.post("/login", async (req, res) => {
	const { primarymail, email, password } = req.body;
  
	try {
	  let user;
	  // Check if user exists with primarymail or email
	  if (primarymail) {
		user = await institutionDetails1.findOne({ primarymail });
	  } else if (email) {
		user = await userdetails.findOne({ email });
	  } else {
		return res.status(400).json({ message: "Invalid request" });
	  }
  
	  if (!user) {
		return res.status(404).send("User not found");
	  }
  
	  const userPassword = user.password;
	  if (password === userPassword) {
		// Include user details and type in the token payload
		const payload = {
		  user: {
			primarymail: user.primarymail,
			email: user.email,
			type: user.type, // Include user type
			// Include other relevant user details
		  },
		};
  
		jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
		  if (err) {
			console.error(err);
			return res.status(500).json({ message: "Error creating token" });
		  }
		  return res.json({ token, payload });
		});
	  } else {
		res.status(401).send("Incorrect password");
	  }
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: "Internal server error" });
	}
  });

//get

app.get("/government-institution", async (req, res) => {
	try {
		const governmentData = await institutionDetails.find({});
		return res.json(governmentData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

app.get("/corporate-institution", async (req, res) => {
	try {
		const corporateData = await institutionDetails1.find({});
		return res.json(corporateData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// app.get("/institution/", async (req, res) => {
// 	//  to filter a single or particular member we need to filter the person from the database
// 	//  to get the unique of all data, we took email to filter, and we get that email from params by using req.params
// 	try {
// 		// const { primarymail } = req.body;
// 		//  {email:emil} is the filter condition to find the user from the database
// 		const allEmployees = await institutionDetails.find({});
// 		if (!allEmployees) {
// 			//  if user is fetched sending the details
// 			return res.status(200).send(allEmployees);
// 		} else {
// 			// if user not found sending the user not found
// 			return res.status(402).send("user not found");
// 		}
// 	} catch (e) {
// 		return res.status(500).json({ message: e.message });
// 	}
// });

// put

app.get("/govt/:primaryEmail", async (req, res) => {
	try {
		const { primaryEmail } = req.params;
		console.log(primaryEmail);
		const employee = institutionDetails.findOne({ primarymail: primaryEmail });
		if (!employee) {
			return res.status(500).json({ message: "Error getting details" });
		}
		res.status(200).json(employee);
	} catch (e) {
		return res.status(500).json({ message: e.message });
	}
});

app.get("/government-institution/:primaryemail", async (req, res) => {
	try {
		const { primaryemail } = req.params;
		console.log(primaryemail);
		const governmentData = await institutionDetails.findOne({
			primarymail: primaryemail,
		});
		return res.json(governmentData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

app.get("/corporate-institution/:primaryemail", async (req, res) => {
	try {
		const { primaryemail } = req.params;
		console.log(primaryemail);
		const governmentData = await institutionDetails1.findOne({
			primarymail: primaryemail,
		});
		return res.json(governmentData);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

app.put("/government-institution/:primarymail", async (req, res) => {
	try {
		const { primarymail } = req.params;
		const employee = await institutionDetails.findOne({
			primarymail: primarymail,
		});

		if (employee) {
			// if user already exist in database, sending response already exisiting
			const newUser = {
				institutionName: req.body.institutionName,
				headofInstitution: req.body.headofInstitution,
				primarymail: req.body.primarymail,
				secondarymail: req.body.secondarymail,
				primarycontact: req.body.primarycontact,
				secondarycontact: req.body.secondarycontact,
				Adress: req.body.Adress,
				city: req.body.city,
				state: req.body.state,
				institutioncode: req.body.institutioncode,
				institutiontype: req.body.institutiontype,
				accessplan: req.body.accessplan,
				password: req.body.password,
				batchYear: req.body.batchYear,
				batch: req.body.batch,
			};
			const usercreate = await institutionDetails.findOneAndUpdate(
				{ primarymail: primarymail },
				newUser
			);
			console.log(usercreate);
			res.status(200).send("Institution details upadate successfull");
		} else {
			res.status(402).send("employee not found");
		}
	} catch (e) {
		//  if passwords doesnot match , then returning an error passwords not maytching

		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
		return res.status(500).json({ message: e.message });
	}
});

app.put("/corporate-institution/:primarymail", async (req, res) => {
	try {
		const { primarymail } = req.params;
		const employee = await institutionDetails1.findOne({
			primarymail: primarymail,
		});

		if (employee) {
			// if user already exist in database, sending response already exisiting
			const newUser = {
				institutionName: req.body.institutionName,
				headofInstitution: req.body.headofInstitution,
				primarymail: req.body.primarymail,
				secondarymail: req.body.secondarymail,
				primarycontact: req.body.primarycontact,
				secondarycontact: req.body.secondarycontact,
				Adress: req.body.Adress,
				city: req.body.city,
				state: req.body.state,
				institutioncode: req.body.institutioncode,
				institutiontype: req.body.institutiontype,
				accessplan: req.body.accessplan,
				password: req.body.password,
				batchYear: req.body.batchYear,
				batch: req.body.batch,
			};
			const usercreate = await institutionDetails1.findOneAndUpdate(
				{ primarymail: primarymail },
				newUser
			);
			console.log(usercreate);
			res.status(200).send("Institution details upadate successfull");
		} else {
			res.status(402).send("employee not found");
		}
	} catch (e) {
		//  if passwords doesnot match , then returning an error passwords not maytching

		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
		return res.status(500).json({ message: e.message });
	}
});

app.put("/government-institution/:email", async (req, res) => {
	try {
		const { email } = req.params;
		const employee = await institutionDetails.findOne({ Email: email });

		if (employee) {
			// if user already exist in database, sending response already exisiting
			const newpassword = {
				password: req.body.password,
			};
			const usercreate = await institutionDetails.findOneAndUpdate(
				{ password: password },
				newpassword
			);
			console.log(usercreate);
			res.status(200).send("Institution details upadate successfull");
		} else {
			res.status(402).send("employee not found");
		}
	} catch (e) {
		//  if passwords doesnot match , then returning an error passwords not maytching

		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
		return res.status(500).json({ message: e.message });
	}
});

app.put("/corporate-institution/:email", async (req, res) => {
	try {
		const { email } = req.params;
		const employee = await institutionDetails1.findOne({ Email: email });

		if (employee) {
			// if user already exist in database, sending response already exisiting
			const newpassword = {
				password: req.body.password,
			};
			const usercreate = await institutionDetails1.findOneAndUpdate(
				{ password: password },
				newpassword
			);
			console.log(usercreate);
			res.status(200).send("Institution details upadate successfull");
		} else {
			res.status(402).send("employee not found");
		}
	} catch (e) {
		//  if passwords doesnot match , then returning an error passwords not maytching

		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
		return res.status(500).json({ message: e.message });
	}
});

// app.put("/user/:emailId", async (req, res) => {
// 	try {
// 		const { emailId } = req.params;
// 		const employee = await userdetails.findOne({ Email: emailId });

// 		if (employee) {
// 			// if user already exist in database, sending response already exisiting
// 			const newpassword = {
// 				password: req.body.password,
// 			};
// 			const usercreate = await userdetails.findOneAndUpdate(
// 				{ password: password },
// 				newpassword
// 			);
// 			console.log(usercreate);
// 			res.status(200).send("Institution details upadate successfull");
// 		} else {
// 			res.status(402).send("employee not found");
// 		}
// 	} catch (e) {
// 		//  if passwords doesnot match , then returning an error passwords not maytching

// 		//  if any errors occuring in try block, then catch block handles the error, buy throwing an exception and terminates the execution in try block
// 		return res.status(500).json({ message: e.message });
// 	}
// });

app.put("/user/:emailId", async (req, res) => {
	try {
		const { email } = req.params;
		console.log("Email ID:", email);

		const user = await userdetails.findOne({ Email: email });
		console.log("User:", user);

		if (user) {
			// If the user already exists in the database, update the password
			const newPassword = {
				password: req.body.password,
			};

			const updatedUser = await userdetails.findOneAndUpdate(
				{ Email: email },
				newPassword,
				{ new: true } // This option returns the modified document
			);

			console.log("Updated User:", updatedUser);
			res.status(200).send("Password update successful");
		} else {
			res.status(404).send("User not found");
		}
	} catch (e) {
		// Handle errors
		console.error("Error:", e);
		return res.status(500).json({ message: e.message });
	}
});

// Delete

// app.delete("/deleteemployee/:emailid", async (req, res) => {
// 	try {
// 		const { emailid } = req.params;
// 		console.log(emailid);
// 		const user = await institutionDetails.findOneAndDelete({ email: emailid });
// 		if (!user) {
// 			return res.status(402).send("user not found");
// 		}
// 		return res.status(200).send("user detail deleted");
// 	} catch (e) {
// 		return res.status(500).json({ message: e.message });
// 	}
// });

app.delete("/government-institution/:emailid", async (req, res) => {
	try {
		const { emailid } = req.params;
		console.log(emailid);
		const user = await institutionDetails.findOneAndDelete({
			primarymail: emailid,
		});

		if (!user) {
			return res.status(404).send("User not found");
		}

		return res.status(200).send("User detail deleted");
	} catch (e) {
		console.error("Error deleting user:", e.message);
		return res.status(500).json({ message: e.message });
	}
});

app.delete("/corporate-institution/:emailid", async (req, res) => {
	try {
		const { emailid } = req.params;
		console.log(emailid);
		const user = await institutionDetails1.findOneAndDelete({
			primarymail: emailid,
		});

		if (!user) {
			return res.status(404).send("User not found");
		}

		return res.status(200).send("User detail deleted");
	} catch (e) {
		console.error("Error deleting user:", e.message);
		return res.status(500).json({ message: e.message });
	}
});

// app.delete("/deleteemployee/:emailid", async (req, res) => {
// 	try {
// 		const { emailid } = req.params;
// 		console.log(emailid);
// 		const user = await institutionDetails1.findOneAndDelete({ email: emailid });
// 		if (!user) {
// 			return res.status(402).send("user not found");
// 		}
// 		return res.status(200).send("user detail deleted");
// 	} catch (e) {
// 		return res.status(500).json({ message: e.message });
// 	}
// });

app.listen(port, () => {
	console.log(`server running at ${port}`);
});
