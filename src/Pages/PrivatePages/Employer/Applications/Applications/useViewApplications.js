// useViewJobs.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import ApiService from '../../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';

const useViewApplications = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(null);
  const lastJobElementRef = useRef(null);

  const [openDeleteModal,setOpenDeleteModal] = useState(false)
  const [selectedId,setSelectedId] = useState(null)

  const fetchJobs = async (pageNum, search = '') => {
    try {
      setLoading(true);
      const response = await ApiService({
        method: 'GET',
        endpoint: `${apiPaths.application.getApplications}?page=${pageNum}&search=${search}`
        });
      
      console.log("Response for view applications : ",response)
      setJobs(prev => pageNum === 1 ? response?.response?.docs: [...prev, ...response?.response?.docs]);
      setHasMore(response.response.hasNextPage
      );
    } catch (err) {
      setError('Failed to fetch jobs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      setJobs([]);
      setPage(1);
      setHasMore(true);
      fetchJobs(1, query);
    }, 1000),
    []
  );

  const handleSearchChange = (e) => {
    setLoading(true)
    // setJobs([]);
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleViewApplications = (jobId) => {
    navigate(`/employer/applicant/${jobId}`);
  };

  useEffect(() => {
    const options = {
      root: null, //root null is viewport
      // rootMargin: '2px', 
      threshold: 0.01,
    };

    observer.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        setPage(prev => prev + 1);
      }
    }, options);

    if (lastJobElementRef.current) {
      observer.current.observe(lastJobElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore, loading]);

  useEffect(() => {
    fetchJobs(page, searchQuery);
  }, [page]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDelete =(jobId)=>{
    setOpenDeleteModal(true)
    setSelectedId(jobId)
  }

  const deleteJob = async() => {
    console.log('Delete Job with ID: ', selectedId);

    try{
      setLoading(true);
      await ApiService({
        method: 'DELETE',
        endpoint: `${apiPaths.jobs.deleteJob}/${selectedId}`
      });

      setJobs(prev => prev.filter(job => job.job._id !== selectedId));
      toast.success('Job deleted successfully');

    }catch(err){
      toast.error('Error while deleting job');
      console.error('Error while deleting job', err);
    }finally{
      setLoading(false);
      setOpenDeleteModal(false)
    }
  }

  return {
    jobs,
    loading,
    error,
    searchQuery,
    lastJobElementRef,
    openDeleteModal,
    deleteJob,
    setOpenDeleteModal,
    handleSearchChange,
    handleViewApplications,
    formatDate,
    handleDelete,
    hasMore
  };
};

export default useViewApplications;