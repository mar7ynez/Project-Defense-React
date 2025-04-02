import { useEffect, useState } from "react";
import * as requester from "../apiService";

const endpoints = {
    getAll: 'puzzles',
    getMyPuzzles: 'puzzles/my-puzzles',
    getOne: (puzzleId) => `puzzles/${puzzleId}`,
    editPuzzle: (puzzleId) => `puzzles/${puzzleId}`,
    likePuzzle: (puzzleId) => `puzzles/${puzzleId}/like`,
    getLikes: (puzzleId) => `puzzles/${puzzleId}/likes`,
    getTopPuzzles: 'puzzles/top',
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
    const [puzzle, setPuzzle] = useState({});  // Start with null, not an empty object
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        requester.get(endpoints.getOne(puzzleId))
            .then((puzzle) => {
                setPuzzle(puzzle);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.message);
            });
    }, [puzzleId]);

    return {
        puzzle,
        isLoading,
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

export const useLike = (puzzleId) => {
    const [likes, setLikes] = useState([]);
    const [isLiking, setIsLiking] = useState(false);

    useEffect(() => {
        requester.get(endpoints.getLikes(puzzleId))
            .then(allLikes => {
                const { likes } = allLikes;
                setLikes(likes);
            });
    }, [puzzleId]);

    const like = (userId, puzzleId) => {
        setIsLiking(true);
        return requester.post(endpoints.likePuzzle(puzzleId), { userId })
            .then(() => {
                requester.get(endpoints.getLikes(puzzleId))
                    .then(allLikes => {
                        const { likes } = allLikes;

                        setLikes(likes);
                        setIsLiking(false);
                    })
                    .catch(error => {
                        console.log(error);

                        setLikes((prevState) => prevState.filter(id => id !== userId));
                        setIsLiking(false);
                    });
            });
    };

    return {
        like,
        likes,
        isLiking
    };
};

export const useTopPuzzles = () => {
    const [topPuzzles, setTopPuzzles] = useState([]);

    useEffect(() => {
        requester.get(endpoints.getTopPuzzles)
            .then(topPuzzles => {
                setTopPuzzles(topPuzzles)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return {
        topPuzzles,
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