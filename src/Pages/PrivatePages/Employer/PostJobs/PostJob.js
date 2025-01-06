import React from 'react';
import usePostJob from './usePostJob';
import StatusModal from './Components/StatusModal';
import Select from './Components/Select';
import InputField from '../Profile/Components/InputField';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const {
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
  } = usePostJob();

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent shadow-lg" />
      </div>
    );
  }

  if (employerStatus !== 'approved' && showStatusModal) {
    return <StatusModal status={employerStatus} onClose={() => {setShowStatusModal(false); navigate('/');}} />;
  }

  if (employerStatus !== 'approved') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-600">
            <h2 className="text-3xl font-bold text-white">Post a New Job</h2>
            <p className="text-orange-100 mt-2">Create an attractive job posting to find the perfect candidate</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <InputField
                  label="Job Title"
                  name="post"
                  value={formData.post}
                  onChange={handleChange}
                  error={errors.post}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                />
                <InputField
                  label="Number of Openings"
                  name="openings"
                  type="number"
                  value={formData.openings}
                  onChange={handleChange}
                  error={errors.openings}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Employment Type
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 hover:border-orange-300 ${
                      errors.employmentType ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select Type</option>
                    {employmentTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.employmentType && (
                    <p className="text-sm text-red-500 mt-1">{errors.employmentType}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <InputField
                  label="Payroll"
                  name="payroll"
                  value={formData.payroll}
                  onChange={handleChange}
                  error={errors.payroll}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                />
                <InputField
                  label="Minimum Experience (in years)"
                  name="minExperience"
                  type="number"
                  value={formData.minExperience}
                  onChange={handleChange}
                  error={errors.minExperience}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Hiring Process
                  </label>
                  <select
                    name="hiringProcess"
                    value={formData.hiringProcess}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 hover:border-orange-300 ${
                      errors.hiringProcess ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select Process</option>
                    {hiringProcesses.map(process => (
                      <option key={process.value} value={process.value}>
                        {process.label}
                      </option>
                    ))}
                  </select>
                  {errors.hiringProcess && (
                    <p className="text-sm text-red-500 mt-1">{errors.hiringProcess}</p>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Qualifications (Ctrl+Click for multiselect)
                </label>
                <Select
                  isMulti
                  options={suggestedQualifications}
                  value={formData?.qualifications &&
                     Array.isArray(formData?.qualifications) &&
                     formData?.qualifications.map(q => ({ value: q, label: q }))}
                  onChange={(selected) => {
                    setFormData(prev => ({
                      ...prev,
                      qualifications: selected.map(item => item.value)
                    }));
                    if (errors.qualifications) {
                      setErrors(prev => ({ ...prev, qualifications: '' }));
                    }
                  }}
                  className={errors.qualifications ? 'border-red-500' : ''}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.qualifications ? '#f56565' : '#e2e8f0',
                      '&:hover': {
                        borderColor: '#ed8936'
                      }
                    })
                  }}
                />
                {errors.qualifications && (
                  <p className="text-sm text-red-500 mt-1">{errors.qualifications}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 hover:border-orange-300 ${
                  errors.description ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Describe the role, responsibilities, and requirements..."
              />
              {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
            </div>

            <p className="text-red-600 text-lg mt-2">Note : You cannot edit this job later , please double check the data that you've entered !</p>
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={submitLoading}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
              >
                {submitLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Posting Job...</span>
                  </div>
                ) : (
                  'Post Job'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;