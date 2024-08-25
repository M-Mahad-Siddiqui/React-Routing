import React from 'react';

export default function ColorPicker() {
	const [color, setColor] = React.useState('red');
	return (
		<div className="color-picker-container">
			<h1>Color Picker</h1>
			<div className="color-display" style={{ backgroundColor: color }}>
				<p>Selcted Color: {color}</p>
			</div>
			<label> Select a Color: </label>
			<input type="color" value={color} onChange={(e) => setColor(e.target.value)} id="color-picker" />
		</div>
	);
}
