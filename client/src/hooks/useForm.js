import { useState } from "react";

export const useForm = (initialFormData, initialFormErrors, validate) => {
    const [formData, setFormData] = useState(initialFormData);
    const [touched, setTouched] = useState({ oldPassword: true });
    const [formErrors, setError] = useState(initialFormErrors);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setTouched({ ...touched, [name]: true });

        validateField(name, value);
    };

    const blurHandler = (e) => {
        const { name, value } = e.target;

        setTouched({ ...touched, [name]: true });

        validateField(name, value);
    }

    const validateField = (name, value) => {
        let error = validate(name, value, formData, initialFormErrors);

        setError({ ...formErrors, [name]: error });
    };

    const isFormValid = (isLogin) => {
        const isFormValid = Object.values(formErrors).every(value => !value);
        const isLoginValid = !formErrors.email && !formErrors.password ? true : false;

        if (isLogin && isLoginValid && formData.password.length >= 6) {
            return true;
        }

        if (isFormValid) {
            return true;
        }

        return false
    };

    return {
        formData,
        touched,
        formErrors,
        changeHandler,
        blurHandler,
        isFormValid,
    };
}