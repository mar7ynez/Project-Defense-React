export const initialFormData = {
    puzzleName: '',
    brand: '',
    numOfPieces: '',
    puzzleThickness: '',
    puzzleSize: '',
    material: '',
    age: '',
    imageUrl: '',
    description: '',
}

export const initialFormErrors = {
    puzzleName: 'Name is required!',
    brand: 'Brand is required!',
    numOfPieces: 'Number of pieces is required!',
    puzzleThickness: 'Thickness is required!',
    puzzleSize: 'Size is required!',
    material: 'Material is required!',
    age: 'Age is required!',
    imageUrl: 'Image URL is required!',
    description: 'Description is required!',
}

export const customErrors = (value) => {
    return {
        puzzleName: value.length < 6 ? 'Name must be atleast 6 characters long!' : '',
        brand: value.length < 4 ? 'Brand must be atleast 4 characters long!' : '',
        numOfPieces: value.length < 2 ? 'Pieces must be atleast 2 characters long!' : '',
        puzzleThickness: value.length < 2 ? 'Thickness must be atleast 2 characters long!' : '',
        puzzleSize: value.length < 2 ? 'Size must be atleast 2 characters long!' : '',
        material: value.length < 4 ? 'Material must be atleast 4 characters long!' : '',
        age: value.length < 2 ? 'Age must be atleast 2 characters long!' : '',
        imageUrl: !value.match(/^https?:\/\//g) ? 'Image URL is invalid!' : '',
        description: value.length < 250 ? 'Description must be atleast 250 characters long!' : '',
    };
}