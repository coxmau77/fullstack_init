// src/controllers/auth.controller.js
import { register } from '../services/auth.service.js';

export const registerUser = async (req, res) => {
    try {
        const user = await register(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) { // Código de error de duplicado en MongoDB
            res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};
