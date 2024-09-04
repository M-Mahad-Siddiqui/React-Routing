
  // useEffect (function, [dependencies])

// 1. useEffect is a hook that allows you to perform side effects in your components.
// 2. The first parameter is a function that will be executed after the component is rendered.
// 3. The second parameter is an array of dependencies. If any of the dependencies change, the effect will be re-executed.
// 4. If the second parameter is an empty array, the effect will only be executed once, when the component is first rendered.

// useEffect( () => {} )               // Runs After every re-render
// useEffect( () => {}, [] )           // Runs Only Once(mount)
// useEffect( () => {}, [dep1, dep2] )  // Runs on mount + when any of the dependency changes

//   USES
// 1. To run side effects after every render
// 2. To run side effects only once(mount)
// 3. To run side effects on mount + when any of the dependency changes
// 4. To clean up side effects when the component is unmounted
// 5. To fetch data from an API
// 6. To subscribe to a websocket (e.g. for real-time updates)
// 7. Event listners
// 8. DOM manupulation
// 9. Timers

import { useEffect, useState } from "react";
export default function Example1() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `count ${count} color ${color} `;
    }, [count, color])
    const addCount = () => {
        setCount(count + 1);
    }
    const subCount = () => {
        setCount(count - 1);
    }

    const changeColor = () => {
        setColor(color === 'red' ? 'green' : 'red');
    }

    return (
        <div>
            <h3 style={{ color: color }} >You clicked {count} times</h3>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button>
            <button onClick={changeColor} >Change Color</button>
        </div>
    )
}
