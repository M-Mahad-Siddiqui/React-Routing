import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
	const [user, setUser] = useState({
		name      : '',
		lastName  : '',
		email     : '',
		rollNumber: '',
		gender    : ''
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({
	...prevUser,
			[name]: value
		}));
	};

	const handleSubmit = () => {
		console.log('User Details Submitted:', user);
		// You can perform form submission or other actions here
	};

	return (
		<>
			<Form user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
		</>
	);
}

export default App;
