  // App.js
import React, { createContext } from 'react';
import './App.css';
import MainComponents from './MainComponents';

export const LoginContext = createContext();  // 1- creating a context object

function App() {
  return (
    <LoginContext.Provider value="Hello">{/* 2- providing the context value */}
      <div>
        <MainComponents />
      </div>
    </LoginContext.Provider>
  );
}

export default App;



  // MainComponents.js
import React from 'react';
import SinglePost from './SinglePost';

const MainComponents = () => {
  return (
    <div>
      <SinglePost />
    </div>
  );
}

export default MainComponents;

    // SinglePost.js
  import React, { useContext } from 'react';
import { LoginContext } from './App'; // Ensure the import path matches

const SinglePost = () => {
  const login = useContext(LoginContext);
  console.log(login);  // this will give us the value of the context object
  return (
    <div>
      <h2>Single Post</h2>
    </div>
  );
}

export default SinglePost;
