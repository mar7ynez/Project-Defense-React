import { useEffect, useState } from "react";
import * as requester from "../apiService";

const endpoints = {
    getAll: 'puzzles',
    getMyPuzzles: 'puzzles/my-puzzles',
    getOne: (puzzleId) => `puzzles/${puzzleId}`,
    editPuzzle: (puzzleId) => `puzzles/${puzzleId}`
};

export const usePuzzles = () => {
    const [puzzles, setPuzzles] = useState([]);

    useEffect(() => {
        requester.get(endpoints.getAll).
            then(puzzles => {
                setPuzzles(puzzles);
            });
    }, []);

    return {
        puzzles
    };
};

export const useMyPuzzles = () => {
    const [puzzles, setPuzzles] = useState([]);

    useEffect(() => {
        requester.get(endpoints.getMyPuzzles).
            then(puzzles => {
                setPuzzles(puzzles);
            });
    }, []);

    return {
        puzzles
    };
};

export const usePuzzle = (puzzleId) => {
    const [puzzle, setPuzzle] = useState({});

    useEffect(() => {
        requester.get(endpoints.getOne(puzzleId))
            .then(puzzle => {
                setPuzzle(puzzle);
            });
    }, [puzzleId]);

    return {
        puzzle
    };
};

export const useSharePuzzle = () => {
    const share = (puzzleData) => {
        return requester.post(endpoints.getAll, puzzleData);
    };

    return {
        share,
    };
}

export const useEditPuzzle = () => {
    const edit = (puzzleId, puzzleData) => {
        return requester.put(endpoints.editPuzzle(puzzleId), { ...puzzleData, _id: puzzleId, });
    };

    return {
        edit,
    };
};

export const useDeletePuzzle = () => {
    const remove = (puzzleId) => {
        return requester.remove(endpoints.getOne(puzzleId), { puzzleId });
    };

    return {
        remove,
    };
};