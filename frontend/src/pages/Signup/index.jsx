import React, { useState, useContext } from 'react';

import './style.scss';
import Field from '../../components/common/Field';
import AuthContext from '../../context/AuthContext';

const Signup = () => {
    const { signupUser } = useContext(AuthContext);

    const [form, setForm] = useState({
        pseudo: { value: '' },
        email: { value: '' },
        password: { value: '' },
    });

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };

        setForm({ ...form, ...newField });
    }

    const validateForm = () => {
        let newForm = form;
        // Validateur pseudo
        if (form.pseudo.value.length < 3) {
            const errorMsg = 'Votre pseudo doit faire au moins 3 caractères de long.';
            const newField = { value: form.pseudo.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ pseudo: newField } };
        } else {
            const newField = { value: form.pseudo.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ pseudo: newField } };
        }

        // Validateur email
        if (form.email.value.length < 3) {
            const errorMsg = 'Votre email doit faire au moins 3 caractères de long.';
            const newField = { value: form.email.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ email: newField } };
        } else {
            const newField = { value: form.email.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ email: newField } };
        }

        // Validateur password
        if (form.password.value.length < 6) {
            const errorMsg = 'Votre mot de passe doit faire au moins 6 caractères de long.';
            const newField = { value: form.password.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ password: newField } };
        } else {
            const newField = { value: form.password.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ password: newField } };
        }

        setForm(newForm);
        return newForm.pseudo.isValid && newForm.email.isValid && newForm.password.isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (!isFormValid) {
            return;
        }
        signupUser(form);
    };

    return (
        <form onSubmit={handleSubmit} className='signup-form'>
            <h1 className='signup-form__titre'>S'enregistrer</h1>

            <Field
                label='Pseudo'
                name='pseudo'
                type='text'
                value={form.pseudo.value}
                onChange={e => handleChange(e)}
                error={form.pseudo.error}
            />

            <Field
                label='Adresse email'
                name='email'
                type='email'
                value={form.email.value}
                onChange={e => handleChange(e)}
                error={form.email.error}
            />

            <Field
                label='Password'
                name='password'
                type='password'
                value={form.password.value}
                onChange={e => handleChange(e)}
                error={form.password.error}
            />
            <div className="signup-form__btn">
                <button type='submit'>
                    Enregistrer
                </button>
            </div>
        </form>
    )
}

export default Signup;