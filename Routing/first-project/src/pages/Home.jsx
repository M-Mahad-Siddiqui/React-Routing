import { useCallback, useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
	const [post, setPost] = useState([]);
	const [search, setSearch] = useState("");

	// useEffect(() => {
	// 	fetch("https://fakestoreapi.com/products")
	// 		.then((res) => res.json())
	// 		.then((data) => setPost(data));
	// }, []);

  
useEffect(() => {
	const fetchData = async () => {
		try {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			setPost(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	fetchData();
}, []);


	const abc = useCallback(() => console.log("abc"), []);

	return (
    <div>
      {/* take search input */}
			<h1 className="text-center my-5 text-3xl font-semibold underline">Products</h1>
			<div className="mx-10 w-3/4 mx-auto ">
				<input
					placeholder="Search"
					type="search"
					className="w-full border-2  p-3 font-bold"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<ProductList a={"aaa"} abc={abc} post={post} />
		</div>
	);
}

export default Home;
