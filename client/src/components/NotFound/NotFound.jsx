import { Link } from 'react-router';

import './notFound.css';

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <h1>404</h1>
                <h2>Whoops, that page is gone.</h2>
                <p>The page you were looking for does not exist.</p>

                <div className='home-button'>
                    <Link to={'/'}>Back to home</Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;