import { useNavigate } from "react-router-dom";
import ProfileModal from "./Components/ProfileModal";
import useFindJobs from "./useFindJobs";
import { Search, Briefcase, Clock, Users, MapPin, Calendar } from 'lucide-react';
import Select from "../../../../Components/Select";
import JobCard from "./Components/JobCard";
import {CitySelect, CountrySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const FindJobs = () => {
    const navigate = useNavigate();
    const {
      jobs,
      loading,
      error,
      search,
      filters,
      showProfileModal,
      isProfileCompleted,
      handleApply,
      handleSearchChange,
      handleSearch,
      handleFilterChange,
      setShowProfileModal
    } = useFindJobs();
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-6">

            <span className=" w-full flex justify-center p-2 m-2 mb-7 bg-orange-500 text-white text-lg">Filters</span>

            <div className="relative w-full mb-10">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />

                  <button 
                  onClick={handleSearch}
                  className="absolute right-6 top-1/2 -translate-y-1/2 hover:bg-orange-500 bg-orange-400 px-10 py-1 rounded-md text-white">Search</button>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <Select
                  value={filters.employmentType}
                  onChange={(value) => handleFilterChange('employmentType', value)}
                  placeholder="Employment Type"
                  options={[
                    { value: 'Full-time', label: 'Full-time' },
                    { value: 'Part-time', label: 'Part-time' },
                  ]}
                />
                <Select
                  value={filters.hiringProcess}
                  onChange={(value) => handleFilterChange('hiringProcess', value)}
                  placeholder="Hiring Process"
                  options={[
                    { value: 'Walk In', label: 'Walk In' },
                    { value: 'Online', label: 'Online' }
                  ]}
                />
                <Select
                  value={filters.post}
                  onChange={(value) => handleFilterChange('post', value)}
                  placeholder="Post"
                  options={[
                    { value: 'Project Manager', label: 'Project Manager' },
                    { value: 'Backend Developer', label: 'Backend Developer' },
                    { value: 'Software Developer', label: 'Software Developer' },
                    { value: 'Graphic Designer', label: 'Graphic Designer' },
                  ]}
                />
                <Select
                  value={filters.qualification}
                  onChange={(value) => handleFilterChange('qualification', value)}
                  placeholder="Qualification"
                  options={[
                    { value: 'B.E', label: 'B.E' },
                    { value: 'B.Tech', label: 'B.Tech' },
                    { value: 'Diploma', label: 'Diploma' },
                  ]}
                />
                <CountrySelect
                    onChange={(value) => {
                        handleFilterChange('countryId', value.id)
                        handleFilterChange('country', value.name)
                    }}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeHolder="Select Country"
                />
                <StateSelect
                    countryid={filters.countryId}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(value) => {
                        handleFilterChange('stateId', value.id)
                        handleFilterChange('state', value.name)
                    }}
                    placeHolder="Select State"
                />
                <CitySelect
                    countryid={filters.countryId}
                    stateid={filters.stateId}
                    className="outline:none w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(value) => handleFilterChange('city', value.name)}
                    placeHolder="Select City"
                />
              </div>
            </div>
  
            {/* Job Listings */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto" />
                <p className="mt-4 text-gray-600">Loading jobs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No jobs found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    onApply={handleApply}
                  />
                ))}
              </div>
            )}
          </div>
  
          <ProfileModal
            isOpen={showProfileModal}
            onClose={() => setShowProfileModal(false)}
            onCompleteProfile={() => navigate('/candidate/profile')}
          />
        </div>
      </div>
    );
  };
  
  export default FindJobs;