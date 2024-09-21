import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { thumbnail, description, category, title, price, rating,id } = product;

    return (
        <Link
                 to        = {`/product/${id}`}>
            <div className = "max-w-sm rounded overflow-hidden shadow-lg m-1">
            <img className = "w-full w-[200px] mx-auto" src = {thumbnail} alt = {title} />
            <div className = "px-6 py-4">
            <div className = "font-bold text-xl mb-2">{title}</div>
            <p   className = "text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">rating :{rating}</span>
                </div>
            </div>
        </Link>
    );
}
