//useState() vs useRef()
//useState() = Re-Render the Component every time the state changes

//  useRef() = "use Reference" Does not Re-Render the Component every time the state changes.it returns a single mutable ref object that only updates its value when it changes.
// It is used to access DOM elements and to store mutable values that do not cause a re-render when updated.
//1.    Accessing/Interacting with DOM Elements
//2.    Handling Events, focus, Animation, Transtions, etc.
//3.    Managing Timers and Intervals

import { useEffect, useRef } from 'react';

export default function UseRef() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("components rendered")
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    const styleDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: '5px'
    }
    return (
        <div style={styleDiv}>
            <button onClick={handleClick1}>Focus Input 1</button>
            <input type="text" ref={inputRef1} />
            <button onClick={handleClick2}>Focus Input 2</button>
            <input type="text" ref={inputRef2} />
            <button onClick={handleClick3}>Focus Input 3</button>
            <input type="text" ref={inputRef3} />
        </div>
    )
}
