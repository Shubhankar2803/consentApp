import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const LogsPage = () => {
    const [logs, setLogs] = useState([]);
    const userId = "USER_ID"; // Replace with actual user ID from Firebase

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get(`${API_URL}/logs/${userId}`);
                setLogs(response.data);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchLogs();
    }, [userId]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Action History</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Date</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Action</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <tr key={log._id}>
                            <td className="border-b border-gray-300 px-4 py-2">{new Date(log.date).toLocaleString()}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{log.action}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{log.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LogsPage;