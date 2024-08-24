// start at 1:30
// at 1:42 start useStates hook not write code end 1:59
import './App.css';
import Button from './components/Button';
import ColorPicker from './components/ColorPicker'; //2:13
import Form from './components/Form';
import ProfilePicture from './components/ProfilePicture';

function App() {
	return (
		<>
			<Button />
			<ProfilePicture />
			<div id="div">
				<Form />
				<ColorPicker />
			</div>
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

// OnChanges     = Event Handle used primarily with form elements and input elements   1:59
//                 ex. <input>, <select>, <textarea>, <button> and more
//                 Triggers a function every time the value of the element/input  changes
