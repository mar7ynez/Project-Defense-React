import { MongooseError } from "mongoose";

export const getErrorMessage = (error) => {
    if (error instanceof MongooseError) {
        return Object.values(error.errors).at(0).message;
    }

    return error.message;
}