import * as jwt from '../lib/jwt.js';
import { getPuzzle } from '../services/puzzleService.js';

export const auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    const jwtSecret = process.env.JWT_KEY;

    try {
        const decodedToken = await jwt.verify(token, jwtSecret);

        req.user = decodedToken;

        next();
    } catch (error) {
        res.clearCookie('auth');

        next();
    }
};

export const isOwner = async (req, res, next) => {
    try {
        const puzzleId = req.params.puzzleId;
        const ownerId = req.user._id;

        const puzzle = await getPuzzle(puzzleId);

        if (!puzzle) {
            return res.status(404).json({ message: 'Puzzle not found!, The puzzle with the specified ID does not exist' });
        }

        if (ownerId !== String(puzzle._ownerId)) {
            return res.status(403).json({ message: 'Unauthorized action. You must be the owner of this puzzle to perform this action.' })
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: 'An unexpected error occurred while verifying ownership. Please try again later.' });
    }
};

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: User is not logged in.' });
    }

    next();
};