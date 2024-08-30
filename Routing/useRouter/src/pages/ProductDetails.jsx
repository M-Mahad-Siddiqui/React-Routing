// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";

// export default function ProductDetails() {

//     const { id }                  = useParams();
//     const { loading, setLoading } = useState(true);
//     const { product, setProduct } = useState(null);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     useEffect(() => {


//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);


//     return (
//         <div className="ProductInfo">

//             {product ? (
//                 <div>
//                     <h1>Product Details</h1>
//                     <img src={product.image} alt={product.title} />
//                     <h1>{product.title}</h1>
//                     <p>{product.description}</p>
//                     <p>Category: {product.category}</p>
//                     <p>Price   : ${product.price}</p>
//                 </div>
//             ) : null}
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function ProductDetails() {
	const { id } = useParams(); // Getting the id from the route parameters
	const [loading, setLoading] = useState(true); // State to manage loading
	const [product, setProduct] = useState(null); // State to store product details

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://fakestoreapi.com/products/${id}`);
				const data = await response.json();
				setProduct(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [id]); // Dependency array includes 'id' to re-run the effect when the id changes

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="ProductInfo">
			{product ? (
				<div>
					<h1>Product Details</h1>
					<img src={product.image} alt={product.title} />
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<p>Category: {product.category}</p>
					<p>Price : ${product.price}</p>
				</div>
			) : (
				<div>Product not found</div>
			)}
		</div>
	);
}
