import React from 'react';
import useViewApplications from './useViewApplications';
import { Search, Briefcase, Users, Calendar,Trash2, MapPin, Loader2 } from 'lucide-react';
import ConfirmationModal from '../../../../../Components/ConfirmationModal';

const ViewApplications = () => {
  const {
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
  } = useViewApplications();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border border-green-200';
      default:
        return 'bg-red-100 text-red-800 border border-red-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 to-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-orange-100">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Job Applications Dashboard
            </h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title, type, or description..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Searching State */}
        {loading && searchQuery && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
            <p className="mt-4 text-gray-600 font-medium">Searching for matches...</p>
          </div>
        )}

        {/* Jobs Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {!(searchQuery && loading) && jobs.map((item, index) => {
            const isLastElement = index === jobs.length - 1;
            
            return (
              <div
                key={item.job._id}
                ref={isLastElement ? lastJobElementRef : null}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-orange-100 transform hover:-translate-y-1"
              >                              
                <div className="flex justify-between items-start mb-6">
                  <div className="flex justify-between items-start w-full">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.job.post}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusStyle(item.job.status)}`}>
                        {item.job.status}
                      </span>
                      <button
                        onClick={() => handleDelete(item.job._id)}
                        className="p-2 lg:ml-6 bg-red-100 hover:bg-red-200 rounded-lg  duration-300 group"
                      >
                        <Trash2 className="w-5 h-5  text-red-500 " />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{item.job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{item.job.openings} openings</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{formatDate(item.job.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{item.job.hiringProcess}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-lg">
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-600">Qualifications:</span>{' '}
                    {item.job.qualifications.join(', ')}
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-600">Min. Experience:</span>{' '}
                    {item.job.minExperience} years
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-orange-100">
                  <div className="text-lg font-bold text-orange-600">
                    {item.job.payroll}
                  </div>
                  <button 
                    onClick={() => handleViewApplications(item.job._id)}
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    View Applications ({item.count})
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loading State */}
        {loading && hasMore && !searchQuery && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
            <p className="mt-4 text-gray-600 font-medium">Loading more jobs...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-xl mt-8 text-center border border-red-100 shadow-lg">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && jobs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">No Jobs Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or check back later</p>
          </div>
        )}
      </div>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={openDeleteModal}
          onClose={()=>setOpenDeleteModal(false)}
          onConfirm={deleteJob}
          />
      
    </div>
  );
};

export default ViewApplications;