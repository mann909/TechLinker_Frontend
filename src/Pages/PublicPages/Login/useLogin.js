import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../../ApiServices/ApiService';
import { apiPaths } from '../../../ApiServices/ApiPaths';
import { setLoading } from '../../../Store/loader.slice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { setIsLoggedIn, setUser } from '../../../Store/user.slice';

const useLogin = (setRole) => {
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
    const dispatch = useDispatch()
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data on logging in : ",formData)
        try{
            const accountType = formData.accountType.toLowerCase()

            dispatch(setLoading(true));
            const response = await ApiService({
                method: "POST",
                endpoint: apiPaths[accountType].login,
                data: formData,
            })
            dispatch(setIsLoggedIn(true))
            dispatch(setUser(response.response))
            setRole(response?.response?.role)
            console.log("Response after signing in : ",response);
            toast.success("Logged in successfully.");
            navigate('/');
        }catch(error){
            console.log("Error while signing in : ",error);
            toast.error(error?.response?.data?.message);
        }finally{
            dispatch(setLoading(false));
        }

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