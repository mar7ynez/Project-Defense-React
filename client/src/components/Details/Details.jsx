import { Link, useNavigate, useParams } from 'react-router';
import { useDeletePuzzle, useLike, usePuzzle } from '../../services/hooks/puzzleApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import DetailsList from './DetailsList/DetailsList';
import { toast } from 'react-toastify';

import './details.css';

const Details = () => {
    const navigate = useNavigate();
    const { puzzleId } = useParams();
    const { puzzle } = usePuzzle(puzzleId);
    const { remove } = useDeletePuzzle();
    const { _id: userId, accessToken } = useContext(UserContext);
    const { like, likes, isLiking } = useLike(puzzleId);

    const isOwner = puzzle._ownerId === userId;
    const hasLiked = likes.includes(userId);

    const detailsContent = {
        Brand: puzzle.brand,
        Pieces: puzzle.numOfPieces,
        Thickness: puzzle.puzzleThickness,
        Size: puzzle.puzzleSize,
        Material: puzzle.material,
        Age: puzzle.age
    };

    const deleteHandler = async () => {
        try {
            await remove(puzzleId);

            navigate('/explore');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const likeHandler = async () => {
        try {
            if (!userId) {
                return;
            }

            await like(userId, puzzleId);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <section className="details">
                <div className="image">
                    <img src={puzzle.imageUrl} alt={puzzle.puzzleName} />
                    <div className='like-content'>
                        {!hasLiked && !isOwner && accessToken &&
                            <button className={isLiking ? 'disabled' : ''} onClick={likeHandler}><i className="fa-solid fa-thumbs-up"></i></button>
                        }
                        <i className="fa-solid fa-heart">{likes.length}</i>
                    </div>
                </div>
                <div className="details-content">
                    <h1>{puzzle.puzzleName}</h1>

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
                <p>{puzzle.description}</p>
            </section>
        </>
    );
};

export default Details;