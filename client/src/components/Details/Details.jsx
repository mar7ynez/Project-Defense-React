import { Link, useParams } from 'react-router';
import { usePuzzle } from '../../services/hooks/puzzleApi';

import DetailsList from './DetailsList/DetailsList';

import './details.css';

const Details = () => {
    const { puzzleId } = useParams();
    const { puzzle } = usePuzzle(puzzleId);

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

    return (
        <>
            <section className="details">
                <div className="image">
                    <img src={imageUrl} alt={puzzleName} />
                </div>
                <div className="details-content">
                    <h1>{puzzleName}</h1>

                    <DetailsList detailsContent={detailsContent} />

                    <div className="owner-buttons">
                        <Link to={`/explore/${puzzleId}/edit`}>Edit</Link>
                        <Link>Delete</Link>
                    </div>
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