import { useForm } from "../../hooks/useForm";
import { useFormValidation } from "../../hooks/useFormValidation";
import * as itemFormConsts from '../../constants/itemFormConsts';

import FormError from "../FormError/FormError";

import "./itemForm.css";

const ItemForm = ({ isShare,
    puzzleName,
    brand,
    numOfPieces,
    puzzleThickness,
    puzzleSize,
    material,
    age,
    imageUrl,
    description,
    formAction,
    isPending }) => {
    const { initialFormData, initialFormErrors, customErrors } = itemFormConsts;

    const { validate } = useFormValidation(customErrors);
    const { touched, formErrors, changeHandler, blurHandler, isFormValid } = useForm(initialFormData, initialFormErrors, validate);

    return (
        <div className="wrapper">
            <div className="item-form-wrapper">
                <h1>{isShare ? 'Share puzzle' : 'Edit Details'}</h1>
                <form className='item-form' action={formAction}>
                    <label htmlFor="name">Puzzle Name</label>
                    <FormError touched={touched} formErrors={formErrors} name='puzzleName' />
                    <input type="text" name="puzzleName" id="name" defaultValue={puzzleName} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="brand">Brand</label>
                    <FormError touched={touched} formErrors={formErrors} name='brand' />
                    <input type="text" name="brand" id="brand" defaultValue={brand} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="pieces">Pieces</label>
                    <FormError touched={touched} formErrors={formErrors} name='numOfPieces' />
                    <input type="text" name="numOfPieces" id="pieces" defaultValue={numOfPieces} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="thickness">Thickness</label>
                    <FormError touched={touched} formErrors={formErrors} name='puzzleThickness' />
                    <input type="text" name="puzzleThickness" id="thickness" defaultValue={puzzleThickness} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="size">Size</label>
                    <FormError touched={touched} formErrors={formErrors} name='puzzleSize' />
                    <input type="text" name="puzzleSize" id="size" defaultValue={puzzleSize} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="material">Material</label>
                    <FormError touched={touched} formErrors={formErrors} name='material' />
                    <input type="text" name="material" id="material" defaultValue={material} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="age">Age</label>
                    <FormError touched={touched} formErrors={formErrors} name='age' />
                    <input type="text" name="age" id="age" defaultValue={age} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="imageUrl">Image URL</label>
                    <FormError touched={touched} formErrors={formErrors} name='imageUrl' />
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue={imageUrl} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="description">Description</label>
                    <FormError touched={touched} formErrors={formErrors} name='description' />
                    <textarea name="description" id="description" defaultValue={description} onChange={changeHandler} onBlur={blurHandler} />

                    <button className={isShare && !isFormValid(false) || isPending ? 'disabled' : ''} type="submit">{isShare ? 'Share' : 'Edit'}</button>
                </form>
            </div>
        </div>
    );
};

export default ItemForm;