import { Link } from "react-router";

import './explore.css';

const Explore = () => {
    return (
        <>
            <div className='products-wrapper'>
                <div className="product">
                    <Link to={'/details'}>
                        <div className="details-wrapper">
                            <img src="https://www.jigsawpuzzlesdirect.co.uk/cdn/shop/products/educa-wild-animal-collage-500-piece-jigsaw-puzzle-267189-p_grande.jpg?v=1698668012" alt="Puzzle Name" />
                            <p>Пъзел Clementoni от 104 макси части - Спайдърмен</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Explore;