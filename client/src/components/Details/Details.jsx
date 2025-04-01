import { Link, useNavigate, useParams } from 'react-router';
import { useDeletePuzzle, usePuzzle } from '../../services/hooks/puzzleApi';

import DetailsList from './DetailsList/DetailsList';

import './details.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

const Details = () => {
    const navigate = useNavigate();
    const { puzzleId } = useParams();
    const { puzzle } = usePuzzle(puzzleId);
    const { remove } = useDeletePuzzle();
    const { _id, accessToken } = useContext(UserContext);

    const isOwner = puzzle._ownerId === _id;

    const {
        puzzleName,
        brand,
        numOfPieces,
        puzzleThickness,
        puzzleSize,
        material,
        age,
        description,
        imageUrl } = puzzle;

    const detailsContent = {
        Brand: brand,
        Pieces: numOfPieces,
        Thickness: puzzleThickness,
        Size: puzzleSize,
        Material: material,
        Age: age
    }

    const deleteHandler = async () => {
        await remove(puzzleId);

        navigate('/explore');
    }

    return (
        <>
            <section className="details">
                <div className="image">
                    <img src={imageUrl} alt={puzzleName} />
                </div>
                <div className="details-content">
                    <h1>{puzzleName}</h1>

                    <DetailsList detailsContent={detailsContent} />

                    {isOwner && accessToken &&
                        <div className="owner-buttons">
                            <Link to={`/explore/${puzzleId}/edit`}>Edit</Link>
                            <button onClick={deleteHandler}>Delete</button>
                        </div>
                    }
                </div>
            </section>
            <section className='description'>
                <h1>Description</h1>
                <p>{description}</p>
            </section>
        </>
    );
};

export default Details;