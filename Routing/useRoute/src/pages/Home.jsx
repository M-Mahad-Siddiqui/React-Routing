import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './Home.css';

const Home = () => {
	const [data, setData] = useState([]); // State to hold fetched data
	const [loading, setLoading] = useState(true); // State to manage loading
	const navigate = useNavigate(); // Initialize the useNavigate hook

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();
				setData(data); // Store the fetched data in state
				setLoading(false); // Set loading to false after data is fetched
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>; // Show a loading message while data is being fetched
	}

	const handleCardClick = (id) => {
		navigate(`/product/${id}`); // Programmatically navigate to the ProductDetail page
	};

	let cards = data.map((item) => (
		<div
			key={item.id}
			className="cards"
			onClick={() => handleCardClick(item.id)} // Attach click handler to the card
		>
			<img src={item.image} alt={item.title} />
			<h4>{item.title}</h4>
			<span>{item.category}</span>
			<span>{item.description}</span>
			<span>{item.price}</span>
		</div>
	));

	return <div className="card">{cards}</div>;
};

export default Home;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import './Home.css';

// const Home = () => {
// 	const [data, setData] = useState([]); // State to hold fetched data
// 	const [loading, setLoading] = useState(true); // State to manage loading

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch("https://fakestoreapi.com/products");
// 				const data = await response.json();
// 				setData(data); // Store the fetched data in state
// 				setLoading(false); // Set loading to false after data is fetched
// 			} catch (error) {
// 				console.error("Error fetching data:", error);
// 				setLoading(false);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	if (loading) {
// 		return <div>Loading...</div>; // Show a loading message while data is being fetched
// 	}

// 	let cards = data.map((item) => (
// 		<div  key = {item.id} className = "cards">
// 		<Link to  = {`/product/${item.id}`}>
// 				{/* Link to the ProductDetail page */}
// 				<img src={item.image} alt={item.title} />
// 				<h4>{item.title}</h4>
// 				<span>{item.category}</span>
// 				<span>{item.description}</span>
// 				<span>{item.price}</span>
// 			</Link>
// 		</div>
// 	));

// 	return <div className="card">{cards}</div>;
// };

// export default Home;
