import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { thumbnail, description, category, title, price, rating, id } = product;

    return (
        <Link to        = {`/product/${id}`} className          = "block">
        <div  className = "max-w-xs rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 m-2 bg-white">
        <img  className = "w-1/2 h-32 object-cover mx-auto" src = {thumbnail} alt = {title} />
        <div  className = "p-2">
        <h2   className = "font-bold text-sm text-gray-800 truncate">{title}</h2>
        <p    className = "text-gray-600 text-xs mt-1">{description}</p>
                </div>
                <div className="flex justify-between items-center px-2 pb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded-full">{category}</span>
                    <span className="text-gray-800 font-semibold text-sm">${price}</span>
                </div>
                <div className="flex justify-end px-2 pb-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-1 py-0.5 rounded-full">Rating: {rating}</span>
                </div>
            </div>
        </Link>
    );
}
