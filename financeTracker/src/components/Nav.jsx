import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			{/* <Link to="/product/:id">Product Details</Link> Use :id to indicate a dynamic parameter */}
			<Link to="/contact">Contact</Link>
		</div>
	);
}

export default Nav;
