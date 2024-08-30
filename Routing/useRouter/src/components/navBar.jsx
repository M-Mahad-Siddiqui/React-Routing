import { Link } from "react-router-dom";
import "./navBar.css";

export default function Navbar() {
  return (
    <div className = "Navbar">
      <h3>Welcome</h3>
      <Link to = "/">Home</Link>
      <Link to = "/About">About</Link>
      <Link to = "/contact">Contact</Link>
      
    </div>

  )
}
