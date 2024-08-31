import React from 'react';
import './MyObj.css';
export default function CarManager() {
	const [cars, setCars] = React.useState([]); // array
	const [carYear, setCarYear] = React.useState(new Date().getFullYear()); // number
	const [carMaker, setCarMaker] = React.useState(''); // string
	const [carModel, setCarModel] = React.useState(''); // string

	function handleAddCar() {
		setCars([...cars, { year: carYear, maker: carMaker, model: carModel }]);
		// reset input fields to empty
		setCarYear(new Date().getFullYear());
		setCarMaker('');
		setCarModel('');
	}

	function handleRemoveCar(index) {
		setCars(cars.filter((_, i) => i !== index));
	}

	function handleYearChange(event) {
		setCarYear(Number(event.target.value));
	}

	function handleMakerChange(event) {
		setCarMaker(event.target.value);
	}

	function handleModelChange(event) {
		setCarModel(event.target.value);
	}

	return (
		<div className = "car-container">
      <h1>Car Manager</h1>
			<input  type      = "number" value = {carYear} onChange  = {handleYearChange}  />
			<input  type      = "text" value   = {carMaker} onChange = {handleMakerChange} placeholder = "Enter Car Maker" required />
			<input  type      = "text" value   = {carModel} onChange = {handleModelChange} placeholder = "Enter Car Model" required/>
			<button onClick   = {handleAddCar}>Add Car</button>
			<ul     className = "car-list">
				{cars.map((car, index) => (
					<li key={index} onClick={() => handleRemoveCar(index)}>
						{car.year} {car.maker} {car.model}
					</li>
				))}
			</ul>
		</div>
	);
}
