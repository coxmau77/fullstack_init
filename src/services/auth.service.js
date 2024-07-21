// src/services/auth.service.js
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

const MIN_AGE = 18; // Definimos la edad mínima como una constante

export const register = async ({ name, email, dob, age, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('El correo electrónico ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        dob,
        age,
        password: hashedPassword
    });

    await user.save();
    return user;
};
