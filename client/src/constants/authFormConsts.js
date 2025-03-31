export const initialFormData = {
    email: '',
    username: '',
    password: '',
    rePassword: '',
}

export const initialFormErrors = {
    email: 'Email is required!',
    username: 'Username is required!',
    password: 'Password is required!',
    rePassword: 'Confirm password is required!',
}

export const customErrors = (value) => {
    return {
        email: value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/) ? '' : 'Invalid email address!',
        username: value.length < 6 ? 'Username must be atleast 6 characters long!' : '',
        password: value.length < 6 ? 'Password must be atleast 6 characters long!' : '',
    };
}