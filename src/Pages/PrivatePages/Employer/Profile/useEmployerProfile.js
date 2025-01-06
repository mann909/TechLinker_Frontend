// useProfile.js
import { useState, useEffect } from 'react';
import { Check, AlertCircle, Clock } from 'lucide-react';
import ApiService from '../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';
// import ApiService from '@/service/ApiService';

const useEmployerProfile = () => {
  const initialFormData = {
    orgName: '',
    city: '',
    state: '',
    mobile: '',
    email: '',
    website: '',
    about: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('pending');
  const [errors, setErrors] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    fetchEmployerProfile();
  }, []);

  const fetchEmployerProfile = async () => {
    try {
      const response = await ApiService({
        method: 'GET',
        endpoint: apiPaths.employer.getProfile,
      });

    //   console.log("Employer Profile Get response",response)
      
      setFormData({
        orgName: response.response.orgName || '',
        city: response.response.city || '',
        state: response.response.state || '',
        mobile: response.response.mobile || '',
        email: response.response.email || '',
        website: response.response.website || '',
        about: response.response.about || ''
      });
      setStatus(response.response.status);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.orgName.trim()) {
      newErrors.orgName = 'Organization name is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.website.trim()) {
      newErrors.website = 'Website is required';
    } else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website)) {
      newErrors.website = 'Invalid website URL';
    }

    if (!formData.about.trim()) {
      newErrors.about = 'About section is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitLoading(true);
    try {
      await ApiService({
        method: 'POST',
        endpoint: apiPaths.employer.updateProfile,
        data: formData
      });

      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    } finally {
      setSubmitLoading(false);
    }
  };

  return {
    formData,
    loading,
    status,
    errors,
    submitLoading,
    handleChange,
    handleSubmit
  };
};

export default useEmployerProfile;