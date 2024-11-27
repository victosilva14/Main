import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <div>
                <h1>My Application</h1>
                <Routes>
                    <Route path="/" element={<Login setToken={setToken} />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard token={token} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
