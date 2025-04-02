import { User } from "../models/User.js";

import * as jwt from '../lib/jwt.js';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const generateJwt = (userData) => {
    const payload = {
        email: userData.email,
        username: userData.username,
        _id: userData._id
    };

    const jwtSecret = process.env.JWT_KEY;
    return jwt.sign(payload, jwtSecret, { expiresIn: '10h' })
}

export const register = async (userData) => {
    const { email, username, password, rePassword } = userData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error('The email address or username you entered is already associated with an existing account.');
    };

    if (password !== rePassword) {
        throw new Error('Passwords do not match: The password and confirm password fields must be identical.');
    };

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ ...userData, password: hashedPassword });
    const accessToken = await generateJwt(newUser);

    return {
        email,
        username,
        _id: newUser._id,
        accessToken,
    };
};

export const login = async (userData) => {
    const { email, password } = userData;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new Error('Invalid credentials. Please try again.');
    };

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        throw new Error('Invalid credentials. Please try again.');
    };

    const accessToken = await generateJwt(existingUser);

    return {
        email,
        username: existingUser.username,
        _id: existingUser._id,
        about: existingUser.about,
        image: existingUser.image,
        accessToken
    }
};

export const updateProfile = async (userId, updateData) => {
    const { username, email, password, oldPassword, about } = updateData;

    const user = await User.findOne({ _id: userId });

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isOldPasswordValid) {
        throw new Error('Old password do not match!');
    };

    const passwordToProceed = password.length <= 0 ? oldPassword : password;

    const hashedPassword = await bcrypt.hash(passwordToProceed, 12);
    const updatedData = await User.findByIdAndUpdate(userId, { username, email, password: hashedPassword, about }, { new: true, runValidators: true });

    const accessToken = await generateJwt(updatedData);

    return {
        email,
        username,
        _id: updatedData._id,
        about,
        accessToken
    }
};

export const updateAvatar = async (userId, imagePath) => {
    await User.findByIdAndUpdate(userId, { image: imagePath });

    return User.findById(userId);
};

export const getUser = (userId) => User.findById(userId);