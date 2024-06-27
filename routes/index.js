import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/homeController.js';

const router = express.Router();

// User routes
router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
