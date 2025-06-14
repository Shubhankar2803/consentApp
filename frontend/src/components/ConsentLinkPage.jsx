import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const ConsentLinkPage = () => {
    const { token } = useParams();
    const [consentDetails, setConsentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConsentDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/consents/${token}`);
                setConsentDetails(response.data);
            } catch (err) {
                setError('Failed to fetch consent details.');
            } finally {
                setLoading(false);
            }
        };

        fetchConsentDetails();
    }, [token]);

    const handleAccept = async () => {
        try {
            await axios.put(`${API_URL}/consents/${token}`, { status: 'accepted' });
            alert('Consent accepted successfully!');
        } catch (err) {
            setError('Failed to accept consent.');
        }
    };

    const handleReject = async () => {
        try {
            await axios.put(`${API_URL}/consents/${token}`, { status: 'rejected' });
            alert('Consent rejected successfully!');
        } catch (err) {
            setError('Failed to reject consent.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Consent Details</h1>
            {consentDetails ? (
                <div>
                    <p><strong>Organization:</strong> {consentDetails.organizationName}</p>
                    <p><strong>Type of Data:</strong> {consentDetails.typeOfData}</p>
                    <p><strong>Purpose:</strong> {consentDetails.purpose}</p>
                    <div className="mt-4">
                        <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 mr-2">Accept</button>
                        <button onClick={handleReject} className="bg-red-500 text-white px-4 py-2">Reject</button>
                    </div>
                </div>
            ) : (
                <p>No consent details found.</p>
            )}
        </div>
    );
};

export default ConsentLinkPage;