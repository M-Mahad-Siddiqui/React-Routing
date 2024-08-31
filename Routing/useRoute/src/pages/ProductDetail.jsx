import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './productDetail.css';

export default function ProductDetail() {
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
  }, [id]);  // Dependency array includes 'id' to re-run the effect when the id changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductInfo">
      {product ? (
        <div className='container'>
          <h2>Product Details</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price   : ${product.price}</p>
          <button onClick = {() => window.history.back()} > Back</button>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}
