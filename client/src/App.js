import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Auth from "./Authentication/auth";
import Sidebar from "./sidebar";
import InstitutionDetail from "./usercomponent/institutionDetail";
import Institution from "./usercomponent/institution";
import Profile from "./usercomponent/profile";
import User from "./usercomponent/user";
import Batchyear from "./usercomponent/batchyear";
import Batch from "./usercomponent/batch";
import Userdetails from "./usercomponent/userdetails";
import Navbar from "./usercomponent/navbar";
import Footer from "./usercomponent/footer";
import Assessment from "./usercomponent/assessment";
import Course from "./usercomponent/course";
import Code from "./usercomponent/code";
import Practice from "./usercomponent/practice";
import Blog from "./usercomponent/blog";
import Recentassessment from "./usercomponent/recentassessment";
import Recentcourse from "./usercomponent/recentcourse";
import Recentpractice from "./usercomponent/recentpractice";
import Programing from "./usercomponent/programing";
import Changepassword from "./usercomponent/changepassword";
import Serchuser from "./usercomponent/serchuser";
import Learn from "./Learn/learn";
import Learning from "./Learn/learning";
import Topic from "./Learn/topic";
import Content from "./Learn/content";
import Textcontent from "./Learn/textcontent";
import Learnaccess from "./Learn/learnaccess";
import Video from "./video/video";
import Videocontent from "./video/videocontent";
import Access from "./Learn/Access";



function App() {

	return (
		<div className="App">
			<Routes>
			    <Route exact path="/" element = {<Auth/>}/>
				<Route exact path="/sidebar" element = {<Sidebar/>}/>
				<Route exact path="/addinstitution" element = {<Institution/>}/>
				<Route exact path="/institution" element = {<InstitutionDetail/>}/>
				<Route exact path="/profile" element = {<Profile/>}/>
				<Route exact path="/userdetails" element = {<Userdetails/>}/>
				<Route exact path="/user" element = {<User/>}/>
				<Route exact path="/batchyear" element = {<Batchyear/>}/>
				<Route exact path="/batch" element = {<Batch/>}/>
				<Route exact path="/navbar" element = {<Navbar/>}/>
				<Route exact path="/footer" element = {<Footer/>}/>
				<Route exact path="/assessment" element = {<Assessment/>}/>
				<Route exact path="/course" element = {<Course/>}/>
				<Route exact path="/code" element = {<Code/>}/>
				<Route exact path="/practice" element = {<Practice/>}/>
				<Route exact path="/blog" element = {<Blog/>}/>
				<Route exact path="/recentAssessment" element = {<Recentassessment/>}/>
				<Route exact path="/recentcourse" element = {<Recentcourse/>}/>
				<Route exact path="/recentpractice" element = {<Recentpractice/>}/>
				<Route exact path="/programing" element = {<Programing/>}/>
				<Route exact path="/changepassword" element = {<Changepassword/>}/>
				<Route exact path="/serchuser" element = {<Serchuser/>}/>
				<Route exact path="/Learn" element = {<Learn/>}/>
				<Route exact path="/Learning" element = {<Learning/>}/>
				<Route exact path="/topic" element = {<Topic/>}/>
				<Route exact path="/content" element = {<Content/>}/>
				<Route exact path="/textcontent" element = {<Textcontent/>}/>
				<Route exact path="/learnaccess" element = {<Learnaccess/>}/>
				<Route exact path="/video" element = {<Video/>}/>
				<Route exact path="/videocontent" element = {<Videocontent/>}/>
				<Route exact path="/Access" element = {<Access/>}/>
			</Routes>
			
		</div>
	);
}

export default App;
