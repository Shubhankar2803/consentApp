import React from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const RevokeButton = ({ consentId, onRevoke }) => {
    const handleRevoke = async () => {
        try {
            await axios.put(`${API_URL}/consents/${consentId}`);
            onRevoke(consentId);
        } catch (error) {
            console.error('Error revoking consent:', error);
        }
    };

    return (
        <button
            onClick={handleRevoke}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Revoke Consent
        </button>
    );
};

export default RevokeButton;