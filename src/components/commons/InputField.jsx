import React from 'react';

const InputField = ({
    id,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    disabled,
    maxLength,
    required,
    readOnly,
    className,
    style,
    errorMessage,
    type

}) => {
    return (
        <>
            <input
                type={type ? type : "text"}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                disabled={disabled}
                maxLength={maxLength}
                required={required}
                readOnly={readOnly}
                className={`form-control form-control-sm ${className}`}
                style={style}
                autoComplete='off'
            />
            {errorMessage &&
                <div className="required-input">
                    {errorMessage}
                </div>
            }
        </>
    );
};

export default InputField;