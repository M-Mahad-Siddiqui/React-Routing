// start at 1:30
// at 1:42 start useStates hook not write code
import './App.css';
import Button from './components/Button';
import ProfilePicture from './components/ProfilePicture';

function App() {
	return (
		<>
			<Button />
			<ProfilePicture />
		</>
	);
}

export default App;

// React hooks   = Special function that allow functionl components to have access to state and other React features
//                 to use React features without writing class components, we use React hooks (React v16.8)
//                 (useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect, useImperativeHandle, useDebugValue and more)

// useStates()   = A react hook that allow the creation of stateful variables in functional components
//                 AND a setter function for updating the state its value in the virtual DOM
//                 [name , setterFunction] = useState(initialValue)
