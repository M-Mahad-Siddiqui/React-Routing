import React from 'react';

export default function CategoriesChip({ category, isSelected, onClick }) {
    const { name } = category;
    return (
        <div onClick   = {onClick} className = "max-w-sm rounded overflow-hidden shadow-lg m-2 bg-blue-500 cursor-pointer hover:bg-pink-500 hover:border-purple-600">
        <div className = {`${isSelected ? "bg-purple-800 text-white" : "bg-white-100"} inline-block rounded px-3 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2 hover:text-white hover:bg-purple-600`}>
                {name}
            </div>
        </div>
    );
}
