// import React from 'react';

// export default function CategoriesChip({ category, isSelected, onClick }) {
//     const { name } = category;
//     return (
//         <div onClick   = {onClick} className = "max-w-sm rounded overflow-hidden shadow-lg m-2 bg-blue-500 cursor-pointer hover:bg-pink-500 hover:border-purple-600">
//         <div className = {`${isSelected ? "bg-purple-800 text-white" : "bg-white-100"} inline-block rounded px-3 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2 hover:text-white hover:bg-purple-600`}>
//                 {name}
//             </div>
//         </div>
//     );
// }
import React from 'react';

export default function CategoriesChip({ category, isSelected, onClick }) {
    const { name } = category;

    return (
        <div 
            onClick={onClick} 
            className={`max-w-sm rounded-lg overflow-hidden shadow-md m-2 cursor-pointer 
                        transition-transform duration-300 transform hover: scale-105
                        ${isSelected ? 'bg-purple-700 border-2 border-purple-900 shadow-lg' : 'bg-blue-500'}`
            }
        >
            <div className={`inline-block rounded-full px-4 py-2 text-sm font-bold 
                            ${isSelected ? 'bg-purple-800 text-white' : 'bg-white text-gray-800'} 
                            transition-colors duration-300 
                            hover:bg-purple-600 hover:text-white`}
            >
                {name}
            </div>
        </div>
    );
}
