import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id }                  = useParams();
  const [product, setProduct]   = useState({});
  const [loading, setLoading]   = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  return (
    <div className = "container mx-auto p-5">
      {loading ? (
        <h1 className = "text-center text-3xl">Loading....</h1>
      ) : notFound ? (
        <h1 className = "text-center text-3xl">Product Not Found</h1>
      ) : (
        <section className = "text-gray-600 body-font overflow-hidden">
        <div     className = "lg:w-4/5 mx-auto flex flex-wrap">
        <div     className = "lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2      className = "text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
        <h1      className = "text-gray-900 text-4xl title-font font-semibold mb-4">{product.title}</h1>
        <p       className = "leading-relaxed mb-4">{product.description}</p>
        <div     className = "flex border-t border-gray-200 py-2">
        <span    className = "text-gray-500">Color</span>
        <span    className = "ml-auto text-gray-900">Blue</span>
              </div>
              <div  className = "flex border-t border-gray-200 py-2">
              <span className = "text-gray-500">Size</span>
              <span className = "ml-auto text-gray-900">Medium</span>
              </div>
              <div  className = "flex border-t border-b mb-6 border-gray-200 py-2">
              <span className = "text-gray-500">Rating</span>
              <span className = "ml-auto text-gray-900">{product.rating}</span>
              </div>
              <div    className = "flex items-center">
              <span   className = "title-font font-medium text-3xl text-gray-900">${product.price}</span>
              <button onClick   = {() => window.history.back()} className = "ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md shadow-lg transition duration-300">
                  Back
                </button>
                <button className = "ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-md shadow-lg transition duration-300">
                  Add to Cart
                </button>
                <button className = "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300 transition duration-200">
                <svg    fill      = "currentColor" strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} className = "w-5 h-5" viewBox = "0 0 24 24">
                <path   d         = "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
            <img alt = "ecommerce" className = "lg:w-1/3 w-full lg:h-auto h-60 object-cover object-center rounded-lg shadow-lg" src = {product.thumbnail} />
          </div>
        </section>
      )}
    </div>
  );
}

export default Product;
