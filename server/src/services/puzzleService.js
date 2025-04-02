import { Puzzle } from '../models/Puzzle.js';

export const getPuzzles = () => Puzzle.find();
export const getMyPuzzles = (ownerId) => Puzzle.find({ _ownerId: ownerId });
export const getPuzzle = (puzzleId) => Puzzle.findById(puzzleId);
export const sharePuzzle = (puzzleData) => Puzzle.create(puzzleData);
export const editPuzzle = (puzzleId, puzzleData) => Puzzle.findByIdAndUpdate(puzzleId, puzzleData, { new: true, runValidators: true });
export const deletePuzzle = (puzzleId) => Puzzle.findByIdAndDelete(puzzleId);
export const getLikes = (puzzleId) => Puzzle.findById(puzzleId, 'likes');

export const likePuzzle = async (userId, puzzleId) => {
    const hasLiked = await Puzzle.find({ _id: puzzleId, likes: { $in: [userId] } });
    const isOwner = await Puzzle.findOne({ _id: puzzleId, _ownerId: userId });

    if (hasLiked.length) {
        throw new Error('You cannot like the puzzle twice!');
    }

    if (isOwner) {
        throw new Error('Owners cannot like their puzzles!');
    }

    return Puzzle.findByIdAndUpdate(puzzleId, { $push: { likes: [userId] } });
};

export const getTopPuzzles = () => Puzzle.find().sort({ likes: -1 }).limit(5);