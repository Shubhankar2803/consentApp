import express from 'express';
const router = express.Router();
import { saveConsent, getUserConsents, revokeConsent, getUserLogs } from "../controllers/consentController.js";
router.post('/consents', saveConsent);

router.get('/consents/:userId', getUserConsents);

router.put('/consents/:id', revokeConsent);

router.get('/logs/:userId', getUserLogs);

export default router;