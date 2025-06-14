import mongoose from "mongoose";

const consentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    dataType: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['given', 'revoked'],
        default: 'given'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Consent = mongoose.model('Consent', consentSchema);

export default Consent;