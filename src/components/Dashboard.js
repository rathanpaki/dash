import React from 'react';
import { FaEnvelope, FaBookmark, FaStar, FaHotel, FaCar, FaPlane, FaShip } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>
            <div className="row my-4">
                <div className="col-md-2">
                    <div className="card bg-primary text-white text-center p-3">
                        <FaEnvelope size={30} />
                        <h5>10 New Messages</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card bg-success text-white text-center p-3">
                        <FaBookmark size={30} />
                        <h5>6 New Bookmarks</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card bg-danger text-white text-center p-3">
                        <FaStar size={30} />
                        <h5>10 New Reviews</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card bg-warning text-white text-center p-3">
                        <FaHotel size={30} />
                        <h5>10 New Bookings</h5>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-2">
                    <FaHotel size={40} className="text-danger" />
                    <h6>10 New Hotel Listings</h6>
                </div>
                <div className="col-md-2">
                    <FaShip size={40} className="text-primary" />
                    <h6>16 New Cruise Listings</h6>
                </div>
                <div className="col-md-2">
                    <FaCar size={40} className="text-warning" />
                    <h6>22 New Car Listings</h6>
                </div>
                <div className="col-md-2">
                    <FaPlane size={40} className="text-danger" />
                    <h6>12 New Flight Listings</h6>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
