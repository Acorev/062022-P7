import React, { useState, useContext } from 'react';

import './style.scss';
import Field from '../../components/common/Field';
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const [form, setForm] = useState({
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
        return newForm.email.isValid && newForm.password.isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (!isFormValid) {
            return;
        }

        loginUser(form);
    };

    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h1 className='login-form__titre'>Connexion</h1>
            <Field
                label='Adress email'
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
            <div className="login-form__btn">
                <button type='submit'>
                    Validez
                </button>
            </div>
        </form>
    )
}

export default Login