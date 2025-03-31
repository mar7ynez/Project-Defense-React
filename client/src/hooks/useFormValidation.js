export const useFormValidation = (customErrors) => {
    const validate = (name, value, formData, initialErrors) => {
        let errors = customErrors(value);

        if (name === 'rePassword' && formData.password !== value) {
            return "Confirm password does not match!";
        }

        if (value) {
            return errors[name];
        }

        return initialErrors[name];
    }

    return {
        validate,
    };
};