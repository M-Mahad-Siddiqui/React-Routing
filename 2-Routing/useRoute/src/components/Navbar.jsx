import { Link } from "react-router-dom";
import "./navBar.css";

export default function Navbar() {
	return (
		<div className="Navbar">
			<h3>Welcome</h3>
			{/* this link do nothing only just add the value to the url */}
			<Link to = "/">Home</Link>
			<Link to = "/ABOUT">About</Link>
			<Link to = "/CONTACT">Contact</Link>
			<Link to = "/PHONE">Phone</Link>
		</div>
	);
}
