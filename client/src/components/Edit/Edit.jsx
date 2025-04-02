import { useActionState, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router";
import { useEditPuzzle, usePuzzle } from "../../services/hooks/puzzleApi";
import { UserContext } from "../../contexts/userContext";

import ItemForm from "../ItemForm/ItemForm";
import { toast } from 'react-toastify';

const Edit = () => {
    const { _id: userId } = useContext(UserContext);
    const navigate = useNavigate();
    const { puzzleId } = useParams();
    const { puzzle, isLoading } = usePuzzle(puzzleId); // Fetching puzzle with loading and error states
    const { edit } = useEditPuzzle();

    const editHandler = async (_, formData) => {
        const formValues = Object.fromEntries(formData);

        if (Object.values(formValues).some(value => !value)) {
            return;
        }

        try {
            await edit(puzzleId, formValues);
            navigate(`/explore/${puzzleId}/details`);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [, editAction, isPending] = useActionState(editHandler);

    if (isLoading) {
        return <p>Loading puzzle...</p>;
    }

    const isOwner = userId === puzzle._ownerId;

    if (!isOwner) {
        return <Navigate to={'/explore'} />;
    }

    return (
        <ItemForm isShare={false} {...puzzle} formAction={editAction} isPending={isPending} />
    );
};

export default Edit;