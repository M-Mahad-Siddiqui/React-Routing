import React from 'react';

export default function Button() {


    let count = 0;
    const handleClick = (name) => {
        if (count < 5) {
            count+=1;
            console.log(`${name} you click me ${count} times`);
        } else {
            console.log(`${name} stop clicking me its to much`);
        }
    }

    const handleEvent = (e) => {
        console.log(e);
        e.target.textContent = 'change the text contents';
    }

    return (
        <>
            <button onClick = {() => handleClick('Bro')}>Button </button>
            <button onClick = {(e) => handleEvent(e)}>Events handler </button>

        </>
    );
}
