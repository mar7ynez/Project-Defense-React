import { useActionState, useContext, useState } from 'react';
import { useUpdate } from '../../services/hooks/userApi';
import { UserContext } from '../../contexts/userContext';
import { useForm } from '../../hooks/useForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import * as profileFormConsts from '../../constants/profileFormConsts';

import FormError from '../FormError/FormError';
import { toast } from 'react-toastify';

import defaultImage from '/default-profile.png';
import './editProfile.css';

const EditProfile = () => {
    const { userData, _id: userId, email, username, about, image, authHandler } = useContext(UserContext);

    const initialFormData = profileFormConsts.initialFormData(username, email, about);
    const { initialFormErrors, customErrors } = profileFormConsts;

    const { update, updateAvatar } = useUpdate();
    const { validate } = useFormValidation(customErrors);
    const { touched, formErrors, changeHandler, blurHandler, isFormValid } = useForm(initialFormData, initialFormErrors, validate);
    const [avatarUrl, setAvatarUrl] = useState(image || defaultImage);

    const profileUpdateHandler = async (prevState, formData) => {
        const updateData = Object.fromEntries(formData);

        try {
            if (Object.keys(updateData).some(key => !updateData[key] && key !== 'password' && key !== 'about')) {
                throw new Error('Please check your input and try again!');
            }

            const updatedData = await update(userId, updateData);

            authHandler({ ...userData, ...updatedData });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [, formAction, isPending] = useActionState(profileUpdateHandler);

    const uploadImageHandler = async (e) => {
        const uploadedFile = e.target.files[0];

        if (!uploadedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('image', uploadedFile);

        try {
            const updatedProfile = await updateAvatar(userId, formData);

            setAvatarUrl(updatedProfile?.image);

            authHandler({ ...userData, image: updatedProfile.image });
        } catch (error) {
            setAvatarUrl(defaultImage);
            toast.error(error.message);
        }
    };

    return (
        <div className='profile-wrapper'>
            <div className='actual-content'>
                <div className='avatar'>
                    <img src={avatarUrl} alt="" />
                    <form encType='multipart/form-data'>
                        <label htmlFor="image">Change Avatar</label>
                        <input type="file" id='image' onChange={uploadImageHandler} />
                    </form>
                </div>

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