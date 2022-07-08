import React from 'react'

import './Field.scss'

const Field = ({
    name,
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    error = ''
}) => (
    <div className='form__group'>
        <label htmlFor={name}>{label}</label>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder || label}
            name={name}
            id={name}
            className={'form__control' + (error && ' is-invalid')}
        />
        {error && <p className='error'>{error}</p>}
    </div>
)

export default Field;