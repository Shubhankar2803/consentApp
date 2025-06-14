import Consent from '../models/consent.js';


// Save new consent
export const saveConsent = async (req, res) => {
    try {
        const { userId, organizationName, typeOfData, purpose } = req.body;
        const newConsent = new Consent({ userId, organizationName, typeOfData, purpose });
        await newConsent.save();
        res.status(201).json({ message: 'Consent saved successfully', consent: newConsent });
    } catch (error) {
        res.status(500).json({ message: 'Error saving consent', error: error.message });
    }
};

// Get consents for user
export const getUserConsents = async (req, res) => {
    try {
        const { userId } = req.params;
        const consents = await Consent.find({ userId });
        res.status(200).json(consents);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching consents', error: error.message });
    }
};

// Revoke consent
export const revokeConsent = async (req, res) => {
    try {
        const { id } = req.params;
        const consent = await Consent.findByIdAndUpdate(id, { revoked: true }, { new: true });
        if (!consent) {
            return res.status(404).json({ message: 'Consent not found' });
        }
        res.status(200).json({ message: 'Consent revoked successfully', consent });
    } catch (error) {
        res.status(500).json({ message: 'Error revoking consent', error: error.message });
    }
};

// Placeholder for getUserLogs
export const getUserLogs = async (req, res) => {
    res.status(200).json({ message: 'Logs endpoint not implemented yet.' });
};