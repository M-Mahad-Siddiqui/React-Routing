import Body from "./components/Body.jsx";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Student from "./components/Student.jsx";
import UserGreeting from "./components/UserGreeting";

const fruits = [
	{ id: 1, name: "Apple", calories: 95 },
	{ id: 2, name: "Banana", calories: 105 },
	{ id: 3, name: "Orange", calories: 45 },
	{ id: 4, name: "Mango", calories: 55 },
	{ id: 5, name: "Pineapple", calories: 65 },
	{ id: 6, name: "Watermelon", calories: 85 },
];

const vegetables = [
	{ id: 1, name: "Potato", calories: 200 },
	{ id: 2, name: "Carrot", calories: 100 },
	{ id: 3, name: "Cucumber", calories: 50 },
	{ id: 4, name: "Broccoli", calories: 300 },
	{ id: 5, name: "Onion", calories: 150 },
];

function App() {
	return (
		<>
			<Header />
			<Body />
			<Card />
			<Card />
			<Card />
			<Card />
			<Student name="Aliza Ahmed " age={21} isStudent={true} email="a@a.com" phone="0300-0000000" gender="Female" />
			<UserGreeting isLogging={true} username="Mahad Siddiqui" />
			{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
			{vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
			<Button />
			<Footer />
		</>
	);
}

export default App;

// HOW TO STYLE REACT COMPONENTS WITH CSS
// ------------------------------------------
//   (not including including external frameworks or preprocessors)

// 1. EXTERNAL   -> we style the component with external file(index.css)
// 2. MODULES    -> we style the component with modules
// 3. INLINE     -> we style the component with inline css

//41 props  =  read-only properties that are share between all components
//             A parent component can pass(send) props(data) to its child components
//             component key=value/>    eg:student

//48 propTypes = a mechanism to validate(ensures) that the props passed to a component are correct data types
//               age: PropTypes.number.isRequired   eg:student

//53conditional rendering = a component can render another component based on a condition
//                          eg: if(isStudent) return <Student /> else return <Guest />
//                          allows you to control what gets rendered in your app based on certain conditions
//                          (show, hide, or change components)
