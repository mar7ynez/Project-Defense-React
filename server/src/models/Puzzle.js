import mongoose from "mongoose";

const puzzleSchema = new mongoose.Schema({
    puzzleName: {
        type: String,
        required: [true, 'Puzzle name is required!'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
    },
    numOfPieces: {
        type: Number,
        required: [true, 'Number of pieces is required!'],
    },
    puzzleThickness: {
        type: Number,
        required: [true, 'Puzzle thickness is required!'],
    },
    puzzleSize: {
        type: Number,
        required: [true, 'Puzzle size is required!'],
    },
    material: {
        type: String,
        required: [true, 'Material is required!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?:\/\//g, 'Incorrect image URL!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

export const Puzzle = mongoose.model('Puzzle', puzzleSchema);