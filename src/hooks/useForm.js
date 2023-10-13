import { useState, useEffect } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {

        createValidators();

    }, [formState])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {

        //Creamos otro objeto resultado de la validaciones con el nombre + 'Valid' concatenado
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'This field is required'] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;

        }

        setFormValidation(formCheckedValues);

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
    }
}