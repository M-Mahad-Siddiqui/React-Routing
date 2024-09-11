
import { createContext, useState } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();
export default function Component1() {

  const divStyle = {
    border: '2px solid rgb(6, 6, 32)',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '10px 200px'
  };

  const [user, setUser] = useState('Mahad Siddiqui');

  return (
    <div style = {divStyle}>
      
      <h2>Component B</h2>
      <h3>Hello {user}</h3>
      <UserContext.Provider value = {{user}} >
        <Component2 />
      </UserContext.Provider>

    </div>
  )
}
// useContext() = React Hook that allows you to share values between multiple level of components
//                without passing props through each and every level.


// PROVIDER COMPONENTS
//1.    import { createContext } from "react";
//2.    export const GlobalContext = createContext();
//3.         <GlobalContext.Provider value={{ state, dispatch } or value }>
//              <child>
//           </GlobalContext.Provider>


//  CONSUMER COMPONENTS
//1.    import { useContext } from "react";
//2.    import { GlobalContext } from "../context/index";
//3.    const { state, dispatch } or value  = useContext(GlobalContext);
//4.    <div>{state}</div>