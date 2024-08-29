


  // export const LoginContext = createContext();  // 1- creating a context object
import LoginContextProvider from '../context/LoginContextProvider';
import './App.css';

function App() {
  return (
       {/* 2- providing the context value */}
		<LoginContextProvider> 
				<MainComponents />
		</LoginContextProvider>
	);
}

export default App;
