import { Router } from 'express';
import * as puzzleService from '../services/puzzleService.js';
import { isAuth, isOwner } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/utils.js';

const puzzleController = Router();


puzzleController.get('/top', async (req, res) => {
    try {
        const topPuzzles = await puzzleService.getTopPuzzles();

        res.status(200).json(topPuzzles);
    } catch (error) {
        res.status(500).json({ message: getErrorMessage(error) || 'Failed to fetch puzzles. Please try again later!' });
    };
});

puzzleController.get('/', async (req, res) => {
    try {
        const puzzles = await puzzleService.getPuzzles();

        res.status(200).json(puzzles);
    } catch (error) {
        res.status(500).json({ message: getErrorMessage(error) || 'Failed to fetch puzzles. Please try again later!' });
    };
});

puzzleController.get('/my-puzzles', isAuth, async (req, res) => {
    try {
        const ownerId = req.user._id;
        const puzzles = await puzzleService.getMyPuzzles(ownerId);

        res.status(200).json(puzzles);
    } catch (error) {
        res.status(500).json({ message: getErrorMessage(error) || 'Failed to fetch puzzles. Please try again later!' });
    };
});

puzzleController.get('/:puzzleId', async (req, res) => {
    try {
        const { puzzleId } = req.params;

        const puzzle = await puzzleService.getPuzzle(puzzleId);

        res.status(200).json(puzzle);
    } catch (error) {
        res.status(500).json({ message: getErrorMessage(error) || 'Failed to fetch puzzle details. Please try again later.' });
    };
});

puzzleController.post('/', isAuth, async (req, res) => {
    try {
        const puzzleData = req.body;
        const ownerId = req.user._id;

        const postedData = await puzzleService.sharePuzzle({ ...puzzleData, _ownerId: ownerId });

        res.status(200).json(postedData);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Failed to post data. Please check your input and try again' });
    };
});

puzzleController.put('/:puzzleId', isAuth, isOwner, async (req, res) => {
    try {
        const { puzzleId } = req.params;
        const puzzleData = req.body;

        const editedData = await puzzleService.editPuzzle(puzzleId, puzzleData);

        res.status(200).json({ message: 'Puzzle was updated successfully!', editedData });
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Failed to update. Please check your input and try again.' });
    };
});

puzzleController.delete('/:puzzleId', isAuth, isOwner, async (req, res) => {
    try {
        const { puzzleId } = req.params;

        await puzzleService.deletePuzzle(puzzleId);
        res.status(200).json({ message: "Puzzle was deleted successfully!" });
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Failed to delete. Please try again.' });
    };
});

puzzleController.post('/:puzzleId/like', async (req, res) => {
    try {
        const { puzzleId } = req.params;
        const { userId } = req.body

        await puzzleService.likePuzzle(userId, puzzleId);

        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Failed to like the puzzle, try again later!' });
    };
});

puzzleController.get('/:puzzleId/likes', async (req, res) => {
    try {
        const { puzzleId } = req.params;

        const likes = await puzzleService.getLikes(puzzleId);

        res.status(200).json(likes);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) || 'Failed to get likes, try again later!' });
    };
});

export { puzzleController };

