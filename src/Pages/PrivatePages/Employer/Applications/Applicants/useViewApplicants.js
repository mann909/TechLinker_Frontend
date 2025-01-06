import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import debounce from 'lodash/debounce';
import ApiService from '../../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';

const useViewApplicants = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async (search = '') => {
    try {
      setLoading(true);
      const response = await ApiService({
        method: 'GET',
        endpoint: `${apiPaths.application.getApplicantDetails}/?jobId=${id}&search=${search}`
      });
      
        console.log("Response for view applicants Details  : ",response)
      setJobDetails(response.response.job);
      setApplicants(response.response.candidates || []);
    } catch (err) {
        if (err.response.data.message){
            setError(err.response.data.message);
            toast.error(err.response.data.message);
        }else{
            setError('Failed to fetch data');
        }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      fetchData(query);
    }, 500),
    []
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return {
    jobDetails,
    applicants,
    loading,
    error,
    searchQuery,
    handleSearchChange,
    formatDate
  };
};

export default useViewApplicants;