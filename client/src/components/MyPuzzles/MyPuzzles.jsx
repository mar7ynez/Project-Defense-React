import { useMyPuzzles } from '../../services/hooks/puzzleApi';

import ExploreItem from '../ExploreItem/ExploreItem';

import './myPuzzles.css';

const MyPuzzles = () => {
    const { puzzles } = useMyPuzzles();

    return (
        <div className="my-puzzles">
            <h2>My Puzzles</h2>
            <div className='items-wrapper'>
                {puzzles.map(puzzle => <ExploreItem key={puzzle._id} {...puzzle} />)}
            </div>
        </div>
    );
};

export default MyPuzzles;