import React from 'react';

export default function ProfilePicture() {
    
    const imageUrl = "https://via.placeholder.com/150";

    const handleClick = (e) => {
        console.log('image clicked');
        e.target.style.display = 'none';
    }

    return (
    <>
        <b style={{
          fontSize: '30px',
          margin  : '10px',
          display : 'block'
            }}>Profile Picture</b>
            <img onClick = {(e)=>{handleClick(e)}} src = {imageUrl} alt = "Profile Picture" />
    </>
  )
}
