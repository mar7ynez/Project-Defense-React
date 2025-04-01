export const initialFormData = (username, email, about) => {
    return {
        username,
        email,
        password: '',
        oldPassword: '',
        about
    };
};

export const initialFormErrors = {
    oldPassword: 'Enter your old password to confirm your profile update!',
}

export const customErrors = (value) => {
    return {
        email: value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/) ? '' : 'Invalid email address!',
        username: value.length < 6 ? 'Username must be atleast 6 characters long!' : '',
        password: value.length < 6 && value.length > 0 ? 'Password must be atleast 6 characters long!' : '',
        oldPassword: value.length < 6 ? 'Password must be atleast 6 characters long!' : '',
    };
}