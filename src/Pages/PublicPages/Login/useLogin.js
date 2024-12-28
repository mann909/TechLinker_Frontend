import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const accountTypes = ['Candidate', 'Employer', 'University'];
    const inputElements = [
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
    ]
    const [formData, setFormData] = useState({
        accountType: 'Candidate',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        // If there's an error, set it using setError
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {
        accountTypes,
        formData,
        error,
        handleChange,
        handleSubmit,
        navigateToSignup,
        inputElements,
        showPassword,
        togglePasswordVisibility,
    };
};

export default useLogin;