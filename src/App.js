import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Navbar />
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
