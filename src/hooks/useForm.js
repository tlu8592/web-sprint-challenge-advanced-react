// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initialFormValues, initialBoolean) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(initialBoolean);
    const [values, setValues] = useState(initialFormValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(!showSuccessMessage);
    };

    return [values, showSuccessMessage, handleChanges, handleSubmit];
}

export default useForm;