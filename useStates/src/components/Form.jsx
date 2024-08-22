import React from "react";

function Form({ user, handleChange, handleSubmit }) {
	return (
		<div className="form">
			<div className="container">
				<h1>User Form</h1>
				<label htmlFor="name">Name : </label>
				<input type="text" name="name" id="name" value={user.name} onChange={handleChange} />
				<label htmlFor="lastName">Last Name : </label>
				<input type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleChange} />
				<label htmlFor="email">Email : </label>
				<input type="email" name="email" id="email" value={user.email} onChange={handleChange} />
				<label htmlFor="rollNumber">Roll Number :</label>
				<input type="text" name="rollNumber" id="rollNumber" value={user.rollNumber} onChange={handleChange} />
				<label htmlFor="gender">Gender :</label>
				<select name="gender" id="gender" value={user.gender} onChange={handleChange}>
					<option value="">Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				<button onClick={handleSubmit}>Submit</button>
			</div>

			<div className="display">
				<h1>User Details</h1>
				<span>
					Name : <b>{user.name}</b>
				</span>
				<span>
					Last Name : <b>{user.lastName}</b>
				</span>
				<span>
					Email : <b>{user.email}</b>
				</span>
				<span>
					Roll Number : <b>{user.rollNumber}</b>
				</span>
				<span>
					Gender: <b>{user.gender}</b>
				</span>
			</div>
		</div>
	);
}

export default Form;
