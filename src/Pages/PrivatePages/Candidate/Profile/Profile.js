// Profile.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import useProfile from './useProfile';
import PersonalDetails from './Components/PersonalDetails';
import KYCDetails from './Components/KycDetails';
import JobProfile from './Components/JobProfile';
import EducationDetails from './Components/EducationalDetials';
import ProgressIndicator from './Components/ProgressIndicator';
  
  const Profile = () => {
    const {
      formData,
      errors,
      isLoading,
      activeSection,
      isProfileCompleted,
      handleChange,
      handleNext,
      handlePrevious,
      handleSubmit,
      setActiveSection,
      validateSection,
    } = useProfile();
  
    const sections = [
      {
        title: "Personal Details",
        component: <PersonalDetails formData={formData} errors={errors} handleChange={handleChange} />
      },
      {
        title: "KYC Details",
        component: <KYCDetails formData={formData} errors={errors} handleChange={handleChange} />
      },
      {
        title: "Job Profile",
        component: <JobProfile formData={formData} errors={errors} handleChange={handleChange} />
      },
      {
        title: "Education Details",
        component: <EducationDetails formData={formData} errors={errors} handleChange={handleChange} />
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50  rounded-xl shadow-2xl p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Profile Details</h1>
            
            <ProgressIndicator currentStep={activeSection}
             isProfileCompleted={isProfileCompleted}
              setActiveSection={setActiveSection}
               validateSection={validateSection} />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {sections[activeSection].component}
              
              <div className="flex justify-between pt-4">
                {activeSection > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Previous
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={activeSection < sections.length - 1 ? handleNext : handleSubmit}
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 ml-auto"
                  disabled={isLoading}
                >
                  {activeSection < sections.length - 1 ? 'Next' : (isLoading ? 'Submitting...' : 'Submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;