import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';

function Home() {
	const [userDetails, setUserDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'users'));
				const users = [];
				querySnapshot.forEach((doc) => {
					users.push({ id: doc.id, ...doc.data() });
				});
				setUserDetails(users);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching users:', error);
				setLoading(false);
			}
		};
		fetchUsers();
	}, []);

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			window.location.href = '/';
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Home Page</h1>
			{userDetails.map((user) => (
				<div key={user.id}>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
				</div>
			))}
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	);
}

export default Home;
