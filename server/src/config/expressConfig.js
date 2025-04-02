import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { auth } from '../middlewares/authMiddleware.js';

export const configExpress = (app) => {
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }));
    app.use('/images', express.static(path.resolve('images')));
    app.use(express.json());
    app.use(cookieParser());
    app.use(auth);
}