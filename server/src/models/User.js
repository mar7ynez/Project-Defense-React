import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/, 'Invalid email adress!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    image: {
        type: String,
    },
    about: {
        type: String,
    }
});

export const User = mongoose.model('User', userSchema);