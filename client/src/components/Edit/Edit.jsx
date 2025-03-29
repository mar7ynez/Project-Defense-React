import { useActionState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEditPuzzle, usePuzzle } from "../../services/hooks/puzzleApi";

import ItemForm from "../ItemForm/ItemForm";

const Edit = () => {
    const navigate = useNavigate();
    const { puzzleId } = useParams();
    const { puzzle } = usePuzzle(puzzleId);
    const { edit } = useEditPuzzle();

    const editHandler = async (_, formData) => {
        const formValues = Object.fromEntries(formData);

        try {
            await edit(puzzleId, formValues);
        } catch (error) {
            alert(error);
        }

        navigate(`/explore/${puzzleId}/details`);
    }

    const [, editAction, isPending] = useActionState(editHandler);

    return (
        <ItemForm isShare={false} {...puzzle} formAction={editAction} isPending={isPending} />
    );
};

export default Edit;