import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Dashboard = () => {
    const [consents, setConsents] = useState([]);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    useEffect(() => {
        if (userId) {
            fetchConsents();
        }
    }, [userId]);

    const fetchConsents = async () => {
        try {
            const response = await axios.get(`${API_URL}/consents/${userId}`);
            setConsents(response.data);
        } catch (error) {
            console.error('Error fetching consents:', error);
        }
    };

    const handleRevoke = async (id) => {
        try {
            await axios.put(`${API_URL}/consents/${id}`);
            fetchConsents(); // Refresh the consent list
        } catch (error) {
            console.error('Error revoking consent:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Consents</h1>
            <div className="grid grid-cols-1 gap-4">
                {consents.map((consent) => (
                    <div key={consent._id} className="border p-4 rounded">
                        <h2 className="font-semibold">{consent.organizationName}</h2>
                        <p>Type of Data: {consent.typeOfData}</p>
                        <p>Purpose: {consent.purpose}</p>
                        <button
                            onClick={() => handleRevoke(consent._id)}
                            className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
                        >
                            Revoke Consent
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;