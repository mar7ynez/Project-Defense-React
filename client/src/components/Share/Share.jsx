import { useActionState } from 'react';
import { useNavigate } from 'react-router';
import { useSharePuzzle } from '../../services/hooks/puzzleApi';

import ItemForm from '../ItemForm/ItemForm';

const Share = () => {
    const navigate = useNavigate();
    const { share } = useSharePuzzle();

    const sharePuzzleHandler = async (_, formData) => {
        const formValues = Object.fromEntries(formData);

        try {
            await share(formValues);
        } catch (error) {
            alert(error.message);
        }

        navigate('/explore');
    }

    const [, shareAction, isPending] = useActionState(sharePuzzleHandler);

    return (
        <ItemForm isShare={true} formAction={shareAction} isPending={isPending} />
    );
};

export default Share;