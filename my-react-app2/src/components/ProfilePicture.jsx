import React from 'react';

export default function ProfilePicture() {
    
    const imageUrl = "https://via.placeholder.com/150";

    const handleClick = (e) => {
        console.log('image clicked');
        e.target.style.display = 'none';
    }

    return (
    <>
            <h1>Profile Picture</h1>
            <img onClick = {(e)=>{handleClick(e)}} src = {imageUrl} alt = "Profile Picture" />
    </>
  )
}
