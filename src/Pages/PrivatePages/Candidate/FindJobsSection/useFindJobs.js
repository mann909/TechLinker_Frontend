// useFindJobs.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';

const useFindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search:'',
    employmentType: '',
    hiringProcess: '',
    post:'',
    qualification:'',
    countryId:'',
    country:'',
    stateId:'',
    state:'',
    city:'',
    search: ''
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);
  const [search,setSearch] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
    fetchJobs();
  }, [filters]);

  const fetchProfile = async () => {
    try {
      const response = await ApiService({
        method: 'GET',
        endpoint: apiPaths.candidate.getProfile
      });
      console.log("profile Response for find jobs : ",response)
      setIsProfileCompleted(response?.response?.profile?.isProfileCompleted);
      setShowProfileModal(!response?.response?.profile?.isProfileCompleted);
    } catch (error) {
      console.error('Error checking profile status:', error);
    }
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        ...filters,
        search: search
      }).toString();

      const response = await ApiService({
        method: 'GET',
        endpoint: `${apiPaths.jobs.fetchJobs}?${queryParams}`
      });

      console.log("Jobs Response : ",response.response.jobs)
      setJobs(response.response.jobs);
      setError('')

    } catch (err) {
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId) => {
    if (!isProfileCompleted) {
      setShowProfileModal(true);
      return;
    }

    try {
      await ApiService({
        method: 'POST',
        endpoint: apiPaths.application.createApplication,
        data: { jobId }
      });
      
      setJobs((prev) =>
        prev.map((job) =>
          job._id === jobId ? { ...job, applied: true } : job
        )
      );

      toast.success('Applied successfully');
    } catch (error) {
      console.error('Error applying for job:', error);
      toast.error('Failed to apply for job. Please try again later.');
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange =( search )=>{
    setSearch(search)
  }

  const handleSearch = ()=>{
    if(!search){
        setFilters(prev => ({ ...prev }))
    }
    else{
        setFilters(prev => ({ ...prev, search:search }))
    }
  }

  return {
    jobs,
    loading,
    error,
    filters,
    showProfileModal,
    isProfileCompleted,
    search,
    handleSearchChange,
    handleSearch,
    handleApply,
    handleFilterChange,
    setShowProfileModal
  };
};

export default useFindJobs;