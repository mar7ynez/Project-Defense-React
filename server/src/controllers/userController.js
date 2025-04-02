import { Router } from "express";
import * as userService from '../services/userService.js';
import { getErrorMessage } from "../utils/utils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { storage } from "../helpers/storage.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    try {
        const userData = req.body;

        const registeredUser = await userService.register(userData);
        const { accessToken } = registeredUser;

        res.cookie('auth', accessToken, { httpOnly: true });
        res.status(201).json(registeredUser);

    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) || 'Failed to register user. Please check your input and try again.' });
    }
});

userController.post('/login', async (req, res) => {
    try {
        const userData = req.body;

        const loggedInUser = await userService.login(userData);
        const { accessToken } = loggedInUser;

        res.cookie('auth', accessToken, { httpOnly: true });
        res.status(200).json(loggedInUser);
    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) || 'Failed to log in. Please check your input and try again.' });
    }
});

userController.put('/:userId/image', storage, isAuth, async (req, res) => {
    try {
        const { userId } = req.params;
        const image = `http://localhost:3030/images/${req.file.filename}`;

        const updatedProfile = await userService.updateAvatar(userId, image);

        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update profile image. Please try again later.' });
    };
});

userController.put('/:userId', async (req, res) => {
    try {
        const updateData = req.body;
        const { userId } = req.params;

        const updatedData = await userService.updateProfile(userId, updateData);

        res.cookie('auth', accessToken, { httpOnly: true });
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Check your input and try again!' });
    };
});

userController.get('/:userId/profile', async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userService.getUser(userId);

        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) || 'Failed to fetch' });
    }
});

userController.get('/logout', async (req, res) => {
    res.clearCookie('auth');
    res.status(200).json({ message: 'Log out successful.' });
});

export { userController };