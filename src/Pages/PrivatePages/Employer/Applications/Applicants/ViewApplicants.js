import React, { useState } from 'react';
import { Search, X,User,Home,Heart, Mail, Phone,Percent ,MessageSquare ,UserCheck ,UserPlus ,
     Calendar, Briefcase, Users, Clock, Building, MapPin, GraduationCap, Languages } from 'lucide-react';
import ApplicantDetailsModal from '../Components/ApplicantDetailsModal';
import JobDetailCard from '../Components/JobDetailCard';
import useViewApplicants from './useViewApplicants';

// Percentage,
// Chat,Work,Role,SubRole,School,
const ViewApplicants = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const {
    jobDetails,
    applicants,
    loading,
    error,
    searchQuery,
    handleSearchChange,
    formatDate,
  } = useViewApplicants();

  if (error) return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-red-600 bg-red-50 text-3xl p-6 rounded-lg">{error}</div>
    </div>
  );

  if (!jobDetails && loading) return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Job Details Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{jobDetails?.post}</h1>
              <span className={`px-6 py-2 rounded-full text-sm font-semibold ${
                jobDetails?.status === 'pending' ? 'bg-orange-100 text-orange-800' : 
                'bg-green-100 text-green-800'
              }`}>
                {jobDetails?.status}
              </span>
            </div>
            <div className="mt-4 lg:mt-0 text-3xl font-bold text-orange-500">{jobDetails?.payroll}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-orange-100 shadow-sm hover:border-orange-200 transition-all duration-300">
              <Briefcase className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Employment Type</p>
                <p className="font-bold text-gray-900">{jobDetails?.employmentType}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-orange-100 shadow-sm hover:border-orange-200 transition-all duration-300">
              <Users className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Openings</p>
                <p className="font-bold text-gray-900">{jobDetails?.openings}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-orange-100 shadow-sm hover:border-orange-200 transition-all duration-300">
              <Clock className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Min Experience</p>
                <p className="font-bold text-gray-900">{jobDetails?.minExperience} years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applicants Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">Applicants ({applicants.length})</h2>
            <div className="w-full lg:w-64">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search applicants..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {applicants.map((candidate) => (
              <div key={candidate._id} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-orange-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-600">
                        {candidate.fullName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{candidate.fullName}</h3>
                      <p className="text-gray-500">{candidate.profile?.currentCompany || 'Not specified'}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                    {candidate.profile?.resumeFile && (
                      <a
                        href={candidate.profile.resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                      >
                        View Resume
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCandidate(candidate)}
                      className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors text-sm font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ApplicantDetailsModal
            isOpen={!!selectedCandidate}
            onClose={() => setSelectedCandidate(null)}
          >
            {selectedCandidate && (
              <div className="space-y-8">
                <div className="text-center pb-8 border-b">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-orange-600">
                      {selectedCandidate.fullName.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{selectedCandidate.fullName}</h3>
                  <p className="text-gray-500 text-lg">Curent Company : {selectedCandidate.profile?.currentCompany || 'Not specified'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <JobDetailCard icon={User} label="Full Name" value={selectedCandidate.fullName} />
                    <JobDetailCard icon={Mail} label="Email" value={selectedCandidate.email} />
                    <JobDetailCard icon={Phone} label="Phone" value={selectedCandidate.mobile} />
                    <JobDetailCard icon={MapPin} label="Preferred Location" value={selectedCandidate.profile?.prefferedLocation} />
                    <JobDetailCard icon={Home} label="Current Address" value={selectedCandidate.profile?.currentAddress} />
                    <JobDetailCard icon={Home} label="Permanent Address" value={selectedCandidate.profile?.permanentAddress} />
                    <JobDetailCard icon={Building} label="Current Company" value={selectedCandidate.profile?.currentCompany} />
                    <JobDetailCard icon={Building} label="Previous Company" value={selectedCandidate.profile?.previousCompany} />
                    <JobDetailCard icon={GraduationCap} label="Education" value={selectedCandidate.profile?.course} />
                    <JobDetailCard icon={Clock} label="Experience" value={`${selectedCandidate.profile?.workExperience} years`} />
                    <JobDetailCard icon={Calendar} label="Date of Birth" value={selectedCandidate.profile?.dob} />
                    <JobDetailCard icon={User} label="Gender" value={selectedCandidate.profile?.gender} />
                    <JobDetailCard icon={Heart} label="Marital Status" value={selectedCandidate.profile?.maritalStatus} />
                    <JobDetailCard icon={Languages} label="Languages" value={selectedCandidate.profile?.language?.join(', ')} />
                    <JobDetailCard icon={MessageSquare} label="English Fluency" value={selectedCandidate.profile?.englishFluency} />
                    <JobDetailCard icon={Briefcase} label="Industry" value={selectedCandidate.profile?.industry} />
                    <JobDetailCard icon={Briefcase} label="Job Type" value={selectedCandidate.profile?.jobType} />
                    <JobDetailCard icon={UserCheck} label="Role" value={selectedCandidate.profile?.role} />
                    <JobDetailCard icon={UserPlus} label="Sub Role" value={selectedCandidate.profile?.subRole} />
                    <JobDetailCard icon={Briefcase} label="Resume" value={<a href={selectedCandidate.profile?.resumeFile} target="_blank" rel="noopener noreferrer">View Resume</a>} />
                    <JobDetailCard icon={GraduationCap} label="Passing Year" value={selectedCandidate.profile?.passingYear} />
                    <JobDetailCard icon={Percent} label="Marks" value={`${selectedCandidate.profile?.marks}`} />
                    </div>


                {selectedCandidate.profile?.resumeFile && (
                  <div className="flex justify-center pt-8">
                    <a
                      href={selectedCandidate.profile.resumeFile}
                      download
                      className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-semibold"
                    >
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            )}
          </ApplicantDetailsModal>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicants;