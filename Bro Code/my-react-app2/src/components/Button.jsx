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
		e.target.textContent = e.target.textContent === 'Events handler' ? 'change the text contents' : 'Events handler';
	};

    return (
        <>
            <button onClick = {() => handleClick('Bro')}>Button </button>
            <button onClick = {(e) => handleEvent(e)}>Events handler </button>

        </>
    );
}
