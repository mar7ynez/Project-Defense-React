import { usePuzzles } from '../../services/hooks/puzzleApi';

import ExploreItem from '../ExploreItem/ExploreItem';

import './explore.css';

const Explore = () => {
    const { puzzles } = usePuzzles();

    return (
        <div className='items-wrapper'>
            {puzzles.map(puzzle => <ExploreItem key={puzzle._id} {...puzzle} />)}
        </div>
    );
}

export default Explore;