import React, { useEffect, useState } from 'react';

export default function ProductDetails() {

    const { loading, setLoading } = useState(true);
    const { product, setProduct } = useState(null);
    const { id } = useParams();

    if (loading) {
        return <div>Loading...</div>;
    }

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
    }, []);


    return (
        <div className="ProductInfo">

            {product ? (
                <div>
                    <img src={product.image} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price   : ${product.price}</p>
                </div>
            ) : null}
        </div>
    )
}
