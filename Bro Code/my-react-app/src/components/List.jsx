import PropTypes from 'prop-types';
function List(props) {
	// const fruits = [
	// 	{ id: 1, name: "Apple", calcories: 95 },
	// 	{ id: 2, name: "Banana", calcories: 105 },
	// 	{ id: 3, name: "Orange", calcories: 45 },
	// 	{ id: 4, name: "Mango", calcories: 55 },
	// 	{ id: 5, name: "Pineapple", calcories: 65 },
	// 	{ id: 6, name: "Watermelon", calcories: 85 },
	// ];

	// Uncomment the desired operation below

	// Sorting examples
	// fruits.sort((a, b) => a.name.localeCompare(b.name));  // NAME SORTING
	// fruits.sort((a, b) => b.name.localeCompare(a.name));  // REVERSE NAME SORTING
	// fruits.sort((a, b) => a.calcories - b.calcories);     // CALCORIES SORTING
	// fruits.sort((a, b) => b.calcories - a.calcories);     // REVERSE CALCORIES SORTING

	// Filtering examples
	// const lowCalFruits = fruits.filter(fruit => fruit.calcories < 100); // LOW CALORIES
	// const highCalFruits = fruits.filter(fruit => fruit.calcories > 100); // HIGH CALORIES

	const { category, items } = props;

	const listItems = items.map((item) => (
		<li key={item.id}>
			{item.name}: <b>{item.calories} calories</b>
		</li>
	));

	return (
		<>
			<h3 className="category">{category}</h3>
			<ul className="list">{listItems}</ul>
		</>
	);
}
List.prototype = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
};

List.defaultProps = {
	category: "catorgies",
	items: [],
};
export default List;
