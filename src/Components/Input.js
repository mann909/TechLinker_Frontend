import React from 'react';

const Input = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    disabled = false,
    error = '',
    className = '',
    ...props
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    error ? 'border-red-500' : ''
                }`}
                {...props}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default Input;