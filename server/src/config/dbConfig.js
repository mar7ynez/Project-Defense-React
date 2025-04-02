import mongoose from "mongoose";
import 'dotenv/config';

const dbUri = process.env.DB_URI;

export const connectDb = () => {
    try {
        mongoose.connect(dbUri);
        console.log('DB Connected!\n', dbUri);
    } catch (error) {
        console.log('Error connecting DB!\n', error);
    }
}