import { useEffect, useState } from "react";
import "./Home.css";
export default function Home() {

	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				if (!response.ok) {
					throw new Error(`Network response was not ok: ${response.statusText}`);
				}
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!post) {
		return <div>No post</div>;
    }
    

	const card = post.map((post) => (
		<div className = "card" key       = {post.id}  onClick = {() => window.location.href = `/product/${post.id}`} >
		<img src       = {post.image} alt = {post.title} />
			<h2>{post.title}</h2>
			<p>{post.category}</p>
			<p>{post.description}</p>
			<p>{post.price}</p>
		</div>
	));

	return <div className="cards">{card}</div>;

}
