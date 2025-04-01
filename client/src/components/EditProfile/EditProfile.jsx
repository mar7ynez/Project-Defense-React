import { useActionState, useContext } from 'react';
import { useUpdate } from '../../services/hooks/userApi';
import { UserContext } from '../../contexts/userContext';
import { useForm } from '../../hooks/useForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import * as profileFormConsts from '../../constants/profileFormConsts';

import FormError from '../FormError/FormError';

import './editProfile.css';

const EditProfile = () => {
    const { _id, email, username, about, authHandler } = useContext(UserContext);

    const initialFormData = profileFormConsts.initialFormData(username, email, about);
    const { initialFormErrors, customErrors } = profileFormConsts;

    const { update } = useUpdate();
    const { validate } = useFormValidation(customErrors);
    const { touched, formErrors, changeHandler, blurHandler, isFormValid } = useForm(initialFormData, initialFormErrors, validate);

    const profileUpdateHandler = async (prevState, formData) => {
        const updateData = Object.fromEntries(formData);

        try {
            if (Object.keys(updateData).some(key => !updateData[key] && key !== 'password' && key !== 'about')) {
                throw new Error('Please check your input and try again!');
            }

            const updatedData = await update(_id, updateData);

            authHandler(updatedData);
        } catch (error) {
            alert(error.message);
        }
    };

    const [, formAction, isPending] = useActionState(profileUpdateHandler);

    return (
        <div className='profile-wrapper'>
            <div className='actual-content'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h2>@{username}</h2>
                <p>{email}</p>
                <div className='about-profile'>
                    <h4>About</h4>
                    <p>{about}</p>
                </div>
            </div>
            <div className='profile-form'>
                <form action={formAction}>
                    <h2>Personal Details</h2>
                    <label htmlFor="username">Username</label>
                    <FormError touched={touched} formErrors={formErrors} name='username' />
                    <input type="text" name='username' id='username' defaultValue={username} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="email">Email address</label>
                    <FormError touched={touched} formErrors={formErrors} name='email' />
                    <input type="text" name='email' id='email' defaultValue={email} onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="password">New Password</label>
                    <FormError touched={touched} formErrors={formErrors} name='password' />
                    <input type="password" name='password' id='password' onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="oldPassword">Old password</label>
                    <FormError touched={touched} formErrors={formErrors} name='oldPassword' />
                    <input type="password" name='oldPassword' id='oldPassword' onChange={changeHandler} onBlur={blurHandler} />

                    <label htmlFor="about">About</label>
                    <textarea type="text" name='about' id='about' defaultValue={about} />

                    <div className='edit-button'>
                        <button className={!isFormValid(false) || isPending ? 'disabled' : ''} type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;