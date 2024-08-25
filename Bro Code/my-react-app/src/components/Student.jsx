// function Student(props) {
// 	return (
// 		<>
// 			<h2 className="info">Basic Information</h2>
// 			<div className="student">
// 				<p> Name : {props.name}</p>
// 				<p> Age : {props.age}</p>
// 				<p> Is Student : {props.isStudent ? "Yes" : "NO"}</p>
// 				<p> Email : {props.email}</p>
// 				<p> Phone : {props.phone}</p>
// 				<p> Gender : {props.gender}</p>
// 			</div>
// 		</>
// 	);
// }

// export default Student;
import PropTypes from 'prop-types';

function Student({ name, age, isStudent, email, phone, gender }) {
	return (
		<section>
			<h2 className="info">Basic Information</h2>
			<div className="student">
				<p>Name: {name}</p>
				<p>Age: {age}</p>
				<p>Is Student: {isStudent ? "Yes" : "No"}</p>
				<p>Email: {email}</p>
				<p>Phone: {phone}</p>
				<p>Gender: {gender}</p>
			</div>
		</section>
	);
}

Student.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	isStudent: PropTypes.bool.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	gender: PropTypes.string.isRequired
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
    email: "a@a.com",
    phone: "0300-0000000",
    gender: "custom"
}

export default Student;
