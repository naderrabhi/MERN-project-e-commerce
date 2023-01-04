import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../../controllers/user.controller.js';
import { authMiddleware } from '../../lib/utils.js';

// @route    POST /api/users/register
router.post('/', registerUser);
// @route    POST /api/users/login
router.post('/login', authUser);
// @route    POST /api/users/profile
router.get('/profile',authMiddleware, getUserProfile)
// @route    PUT /api/users/profile
router.put('/profile',authMiddleware, updateUserProfile)

export default router;
