import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:5000/api/auth/user', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => setUserInfo(response.data))
            .catch(error => console.error('Error fetching user info:', error));
        }
    }, [token]);

    if (!userInfo) return <div>Loading...</div>;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {userInfo.username}!</p>
            <p>Your role: {userInfo.role}</p>
        </div>
    );
};

export default Dashboard;
