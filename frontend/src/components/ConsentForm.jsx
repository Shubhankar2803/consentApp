import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const ConsentForm = () => {
    const [organizationName, setOrganizationName] = useState('');
    const [dataType, setDataType] = useState('');
    const [purpose, setPurpose] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post(`${API_URL}/consents`, {
                organizationName,
                dataType,
                purpose,
            });
            setSuccess('Consent given successfully!');
            // Clear the form fields
            setOrganizationName('');
            setDataType('');
            setPurpose('');
        } catch (err) {
            setError('Failed to give consent. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Give Consent</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizationName">
                        Organization Name
                    </label>
                    <input
                        type="text"
                        id="organizationName"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataType">
                        Type of Data
                    </label>
                    <input
                        type="text"
                        id="dataType"
                        value={dataType}
                        onChange={(e) => setDataType(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
                        Purpose
                    </label>
                    <input
                        type="text"
                        id="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConsentForm;