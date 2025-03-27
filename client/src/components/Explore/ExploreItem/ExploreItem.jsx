import { Link } from "react-router";

const ExploreItem = ({ _id, puzzleName, imageUrl }) => {
    return (
        <div className="item">
            <Link to={`/explore/${_id}/details`}>
                <div className="details-wrapper">
                    <img src={imageUrl} alt="Puzzle Name" />
                    <p>{puzzleName}</p>
                </div>
            </Link>
        </div>
    );
}

export default ExploreItem;