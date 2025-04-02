import { Link } from "react-router";
import { useTopPuzzles } from "../../services/hooks/puzzleApi";

import ExploreItem from "../ExploreItem/ExploreItem";

import './home.css';

const Home = () => {
    const { topPuzzles } = useTopPuzzles();

    return (
        <>
            <section className='hero'>
                <h1>Create, Solve, and Connect – The Ultimate Puzzle Community!</h1>
                <div className="hero-content">
                    <p>Turn your ideas into interactive puzzles, challenge others, and engage with a global community of puzzle lovers! Upload, solve, comment, and share every puzzle is a new adventure waiting to be explored.</p>
                </div>

                <div className="hero-btn">
                    <Link to={'/explore'}>Explore now</Link>
                </div>
            </section>
            <div className="top-head">
                <h2>Top Puzzles</h2>
            </div>
            <section className="items-wrapper">
                {topPuzzles.map(puzzle => <ExploreItem key={puzzle._id} {...puzzle} />)}
            </section>
        </>
    );
};

export default Home;