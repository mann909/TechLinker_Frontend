import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {

    //add university later 
    const accountTypes = ['Candidate', 'Employer'];

    const candidateFields = [
        { label: 'Full Name', type: 'text', name: 'fullName', placeholder: 'Enter your full name' },
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
        { label: 'Mobile', type: 'tel', name: 'mobile', placeholder: 'Enter your mobile number' },
    ];

    const employerFields = [
        { label: 'Organisation Name', type: 'text', name: 'orgName', placeholder: 'Enter organisation name' },
        { label: 'City', type: 'text', name: 'city', placeholder: 'Enter city' },
        { label: 'State', type: 'text', name: 'state', placeholder: 'Enter state' },
        { label: 'Mobile', type: 'tel', name: 'mobile', placeholder: 'Enter mobile number' },
        { label: 'Website', type: 'url', name: 'website', placeholder: 'Enter website URL' },
        { label: 'About', type: 'textarea', name: 'about', placeholder: 'Tell us about your organization' },
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email' },
        { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter password' },
    ];

    const [formData, setFormData] = useState({
        accountType: 'Candidate',
        fullName: '',
        orgName: '',
        city: '',
        state: '',
        mobile: '',
        website: '',
        about: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear the form fields that are not relevant to the selected account type
        if (name === 'accountType') {
            const newFormData = {
                accountType: value,
                ...Object.fromEntries(
                    Object.entries(formData).filter(([key]) => 
                        value === 'Candidate' ? 
                            candidateFields.some(field => field.name === key) : 
                            employerFields.some(field => field.name === key)
                    )
                )
            };
            setFormData(newFormData);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        // If there's an error, set it using setError
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputElements = formData.accountType === 'Candidate' ? candidateFields : employerFields;

    return {
        accountTypes,
        formData,
        error,
        showPassword,
        handleChange,
        handleSubmit,
        navigateToLogin,
        togglePasswordVisibility,
        inputElements,
    };
};

export default useSignUp;