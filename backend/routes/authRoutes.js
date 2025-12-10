import express from 'express';
import { register, login, dashboard } from '../controllers/authController.js';

const router = express.Router();

// Register and Login routes
router.post('/register', register);
router.post('/login', login);

// Dashboard route (added)
router.get('/dashboard', dashboard);

export default router;
