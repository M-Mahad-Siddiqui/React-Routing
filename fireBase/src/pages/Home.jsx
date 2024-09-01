import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
function Home() {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading]         = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));
                const users = [];
                querySnapshot.forEach((doc) => {
                    users.push(doc.data());
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
          ))};
          <button onClick={() => auth.signOut(), window.location.reload()}>Sign Out</button>
   
    </div>
  )
}

export default Home
