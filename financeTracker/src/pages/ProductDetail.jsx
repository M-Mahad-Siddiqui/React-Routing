
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams(); // Extract the product ID from the URL
    const [data, setData] = useState(null); // Initialize state for data
    const [loading, setLoading] = useState(true); // Initialize state for loading

    useEffect(() => {
        // Fetch product details based on ID
        async function fetchProductDetails() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchProductDetails();
    }, [id]); // Dependency array includes id to refetch data if id changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Product Details: </h1>
            <img width = "200px" src = {data.image} alt = {data.title} />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>${data.price}</p>
            <button onClick = {()=>window.history.back()} >back</button>
        </div>
    );
}

export default ProductDetail;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from 'react';

// function ProductDetail() {

//     const { id }                  = useParams();
//     const { data, setData }       = useState();
//     const { loading, setLoading } = useState(true);
    

//     useEffect(() => {
        
//         fetch(`https://fakestoreapi.com/products/${id}`)
//             .then(res)  = res.json
//             .then(data) = setData(data);
//         setLoading(false);
//     }, [])
    
//     if (loading) {
//         return <div> Loading ........</div>
//     }


    

//     return (
//         <div>
//             {data ? (
//           <img src = {data.img} alt = {data.title} />
//           <p>{data.title}</p>
//           <p>{data.description}</p>
//           <p>{data.category}</p>
//           <p>{data.price}</p>
//             ) : (
//                 <div>product not found </div>
//             )
//             }
//         </div>
//     );
// }

// export default ProductDetail;
