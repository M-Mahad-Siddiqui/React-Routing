import { useContext } from "react";
import { UserContext } from "./Component1"; // Updated import path
const divStyle = {
    border      : '2px solid rgb(6, 6, 32)',
    borderRadius: '5px',
    padding     : '30px',                      // Added padding for better visual spacing
    margin      : '10px 200px'                 // Added margin for separation from other elements
};

export default function Component4() {
    const user = useContext(UserContext); // Updated to match context name
    return (
        <div style = {divStyle}>
            <h2>Component D</h2> {/* Updated to match component name */}
            <h3>Hello {user.user}</h3> {/* Updated to match context value */}
        </div>
    );
}
