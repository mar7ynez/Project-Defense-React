import './about.css';

const About = () => {
    return (
        <>
            <section className='about-welcome'>
                <h1>About us</h1>
                <p>Puzzle Hub is a community-driven platform where puzzle lovers can create, share, and discuss puzzles like never before! Whether you enjoy solving unique challenges or crafting your own, our app lets you connect with like-minded enthusiasts. Upload your puzzles, challenge others, and engage with the community through comments and reactions.</p>
            </section>
            <section className="about-img" />
            <section className='about-content'>
                <div className='content'>
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <h3>Create & Share Puzzles</h3>
                    <p>Design your own puzzles using your favorite images or creative ideas, then share them with a vibrant community of puzzle enthusiasts!</p>
                </div>
                <div className='content'>
                    <i className="fa-solid fa-comment"></i>
                    <h3>Engage with the Community</h3>
                    <p>Comment, react, and discuss puzzles with fellow users. Share solving strategies, tips, and feedback!</p>
                </div>
                <div className='content'>
                    <i className="fa-solid fa-earth-americas"></i>
                    <h3>Discover Endless Puzzles</h3>
                    <p>Explore a constantly growing collection of puzzles from creators worldwide. Find new challenges every day!</p>
                </div>
            </section>
        </>
    );
};

export default About;