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
    return (
        <div className="wrapper">
            <div className="item-form-wrapper">
                <h1>{isShare ? 'Share puzzle' : 'Edit Details'}</h1>
                <form className='item-form' action={formAction}>
                    <label htmlFor="name">Puzzle Name</label>
                    <input type="text" name="puzzleName" id="name" defaultValue={puzzleName} />

                    <label htmlFor="brand">Brand</label>
                    <input type="text" name="brand" id="brand" defaultValue={brand} />

                    <label htmlFor="pieces">Pieces</label>
                    <input type="text" name="numOfPieces" id="pieces" defaultValue={numOfPieces} />

                    <label htmlFor="thickness">Thickness</label>
                    <input type="text" name="puzzleThickness" id="thickness" defaultValue={puzzleThickness} />

                    <label htmlFor="size">Size</label>
                    <input type="text" name="puzzleSize" id="size" defaultValue={puzzleSize} />

                    <label htmlFor="material">Material</label>
                    <input type="text" name="material" id="material" defaultValue={material} />

                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" defaultValue={age} />

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue={imageUrl} />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" defaultValue={description} />

                    <button type="submit" disabled={isPending}>{isShare ? 'Share' : 'Edit'}</button>
                </form>
            </div>
        </div>
    );
};

export default ItemForm;