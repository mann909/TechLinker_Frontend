import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../../ApiServices/ApiService';
import { apiPaths } from '../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../Store/loader.slice';

const useSignUp = () => {
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

    const [fieldErrors, setFieldErrors] = useState({});
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isVerifyOtpOpen, setIsVerifyOtpOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
            case 'orgName':
                return value.trim() ? '' : 'This field is required';
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? '' : 'Please enter a valid email address';
            case 'password':
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                return passwordRegex.test(value) 
                    ? '' 
                    : 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character';
            case 'mobile':
                const phoneRegex = /^\d{10}$/;
                return phoneRegex.test(value) ? '' : 'Please enter a valid 10-digit mobile number';
            case 'website':
                if (!value) return '';
                const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
                return urlRegex.test(value) ? '' : 'Please enter a valid website URL';
            case 'city':
            case 'state':
                return value.trim() ? '' : 'This field is required';
            case 'about':
                return value.trim().length >= 50 ? '' : 'Please enter at least 50 characters';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Validate field on change
        const error = validateField(name, value);
        setFieldErrors(prev => ({
            ...prev,
            [name]: error,
        }));

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
            setFieldErrors({});
        }
    };

    const validateForm = () => {
        const currentFields = formData.accountType === 'Candidate' ? candidateFields : employerFields;
        const errors = {};
        let isValid = true;

        currentFields.forEach(field => {
            const error = validateField(field.name, formData[field.name]);
            if (error) {
                errors[field.name] = error;
                isValid = false;
            }
        });

        setFieldErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        try {
            const response = await ApiService({
                method: "POST",
                endpoint: apiPaths.sendOtp,
                data: { email: formData.email },
            });
            setIsVerifyOtpOpen(true);
            toast.success("OTP sent to your email successfully");
        } catch (error) {
            console.log("Error while sending OTP : ",error)
            toast.error(error?.response?.data?.message || 'Failed to send OTP');
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp.trim()) {
            setOtpError('Please enter the OTP');
            return;
        }

        try {

            const accountType = formData.accountType.toLowerCase()
            // console.log("account : ", accountType)
            // console.log("Endpoint : ",apiPaths[accountType].register)

            await ApiService({
                method: "POST",
                endpoint: apiPaths[accountType].register,
                data: { ...formData, otp }
            });
            toast.success("Account created successfully");
            navigate('/login');
        } catch (error) {
            console.log("Error while verifying OTP : ",error)
            setOtpError(error?.response?.data?.message || 'Invalid OTP')
            toast.error(error?.response?.data?.message || 'Failed to create account');
        }
    };


    const closeVerifyOtpModal = () => {
        setIsVerifyOtpOpen(false);
        setOtp('');
        setOtpError('');
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
        fieldErrors,
        showPassword,
        isVerifyOtpOpen,
        otpError,
        otp,
        setOtp,
        handleChange,
        handleSubmit,
        handleVerifyOtp,
        navigateToLogin,
        togglePasswordVisibility,
        inputElements,
        closeVerifyOtpModal,
    };
};

export default useSignUp;