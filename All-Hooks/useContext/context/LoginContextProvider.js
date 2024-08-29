import { createContext, default as React, default as React } from 'react';

export const LoginContext   = createContext();  // 1- creating a context object
const LoginContextProvider = ({ childern }) => {
    const [userDetails, setUserDetails] = useState(true);
  return (
   
      
      <LoginContext.Provider value = {userDetails}>
        {childern}
      </LoginContext.Provider>
  )
  
}

export default LoginContextProvider
