import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Dashboard = () => {
    const [consents, setConsents] = useState([]);
    const [pendingLinks, setPendingLinks] = useState([]);
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    useEffect(() => {
        if (userId) {
            fetchConsents();
            fetchPendingLinks();
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

    const fetchPendingLinks = async () => {
        try {
            const response = await axios.get(`${API_URL}/consents/pending/${userId}`);
            setPendingLinks(response.data);
        } catch (error) {
            console.error('Error fetching pending links:', error);
        }
    };

    const handleRevoke = async (id) => {
        try {
            await axios.put(`${API_URL}/consents/${id}`);
            fetchConsents();
        } catch (error) {
            console.error('Error revoking consent:', error);
        }
    };

    const givenCount = consents.filter(c => c.status === 'given').length;
    const revokedCount = consents.filter(c => c.status === 'revoked').length;

    return (
        <div className="w-full bg-black text-white">
            <section className="min-h-screen flex flex-col justify-center items-center bg-black mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your Consent Dashboard</h1>
                <p className="text-lg text-gray-300 mb-2 text-center max-w-xl">
                    Manage your data consents, view history, and handle pending requests with ease.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 px-6">
                <div className="bg-gray-900 shadow rounded p-6 flex flex-col items-center">
                    <span className="text-4xl font-bold text-green-400">{givenCount}</span>
                    <span className="text-gray-200 mt-2">Consents Given</span>
                </div>
                <div className="bg-gray-900 shadow rounded p-6 flex flex-col items-center">
                    <span className="text-4xl font-bold text-red-400">{revokedCount}</span>
                    <span className="text-gray-200 mt-2">Consents Revoked</span>
                </div>
            </section>

            {/* Consent History Table */}
            <section className="mb-8 px-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Consent History</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-900 shadow rounded text-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-700">Organization</th>
                                <th className="py-2 px-4 border-b border-gray-700">Type of Data</th>
                                <th className="py-2 px-4 border-b border-gray-700">Purpose</th>
                                <th className="py-2 px-4 border-b border-gray-700">Status</th>
                                <th className="py-2 px-4 border-b border-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consents.map((consent) => (
                                <tr key={consent._id}>
                                    <td className="py-2 px-4 border-b border-gray-800">{consent.organizationName}</td>
                                    <td className="py-2 px-4 border-b border-gray-800">{consent.typeOfData}</td>
                                    <td className="py-2 px-4 border-b border-gray-800">{consent.purpose}</td>
                                    <td className="py-2 px-4 border-b border-gray-800 capitalize">{consent.status}</td>
                                    <td className="py-2 px-4 border-b border-gray-800">
                                        {consent.status === 'given' && (
                                            <button
                                                onClick={() => handleRevoke(consent._id)}
                                                className="bg-red-600 text-white py-1 px-3 rounded text-sm"
                                            >
                                                Revoke
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {consents.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="py-4 text-center text-gray-400">No consent history found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Pending Consent Links */}
            <section className="px-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Pending Consent Links</h2>
                <div className="bg-gray-900 shadow rounded p-4">
                    {pendingLinks.length === 0 ? (
                        <p className="text-gray-400">No pending consent links.</p>
                    ) : (
                        <ul className="list-disc pl-5">
                            {pendingLinks.map(link => (
                                <li key={link._id} className="mb-2">
                                    <a href={link.url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                                        {link.organizationName} - {link.purpose}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;