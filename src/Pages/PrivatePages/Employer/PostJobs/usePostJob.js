// usePostJob.js
import { useState, useEffect } from 'react';
import ApiService from '../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';
// import Select from 'react-select/creatable';
// import ApiService from '@/service/ApiService';

const usePostJob = () => {
  const [employerStatus, setEmployerStatus] = useState('pending');
  const [showStatusModal, setShowStatusModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  const initialFormData = {
    post: '',
    payroll: '',
    qualifications: [],
    openings: '',
    minExperience: '',
    description: '',
    employmentType: '',
    hiringProcess: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const employmentTypes = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' }
  ];

  const hiringProcesses = [
    { value: 'Walk In', label: 'Walk In' },
    { value: 'Online', label: 'Online' }
  ];

  // Suggested qualifications for the dropdown
  const suggestedQualifications = [
    { value: "B.Tech", label: "B.Tech"},
    { value: "M.Tech", label: "M.Tech" },
    { value: 'Diploma', label: 'Diploma' },
    { value: 'HSC', label: 'HSC' },
    { value: 'SSC', label: 'SSC' },
  ];

  useEffect(() => {
    checkEmployerStatus();
  }, []);

  const checkEmployerStatus = async () => {
    try {
        const response = await ApiService({
            method: 'GET',
            endpoint: apiPaths.employer.getProfile,
          });
      setEmployerStatus(response.response.status);
    } catch (error) {
      console.error('Error checking status:', error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.post.trim()) {
      newErrors.post = 'Job post title is required';
    }

    if (!formData.payroll.trim()) {
      newErrors.payroll = 'Payroll information is required';
    }

    if (formData.qualifications.length === 0) {
      newErrors.qualifications = 'At least one qualification is required';
    }

    if (!formData.openings || formData.openings < 1) {
      newErrors.openings = 'Number of openings must be at least 1';
    }

    if (!formData.minExperience || formData.minExperience < 0) {
      newErrors.minExperience = 'Minimum Experience must be at least 0';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Job description is required';
    }

    if (!formData.employmentType) {
      newErrors.employmentType = 'Employment type is required';
    }

    if (!formData.hiringProcess) {
      newErrors.hiringProcess = 'Hiring process is required';
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitLoading(true);
    try {
      await ApiService({
        method: 'POST',
        endpoint: apiPaths.jobs.listJob,
        data: formData
      });
      toast.success('Job posted successfully');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error('Error posting job');
    } finally {
      setSubmitLoading(false);
    }
  };

  return {
    employerStatus,
    showStatusModal,
    setShowStatusModal,
    setFormData,
    setErrors,
    loading,
    submitLoading,
    formData,
    errors,
    employmentTypes,
    hiringProcesses,
    suggestedQualifications,
    handleChange,
    handleSubmit
  };
};

export default usePostJob;
