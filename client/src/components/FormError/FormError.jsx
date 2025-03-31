const FormError = ({ touched, formErrors, name }) => {
    const isTouched = !!touched[name] && !!formErrors[name];

    return isTouched && < small className='form-error' > {formErrors[name]}</small >
};

export default FormError;