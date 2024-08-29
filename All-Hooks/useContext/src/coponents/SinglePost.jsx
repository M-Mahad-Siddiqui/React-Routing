import React, { useContext } from 'react';
import { LoginContext } from '../context/loginContext';  // Ensure the import path matches

const SinglePost = () => {
	const login = useContext(LoginContext);
	console.log(login); // this will give us the value of the context object
	return (
		<div>
			<h2>Single Post</h2>
		</div>
	);
};

export default SinglePost;
