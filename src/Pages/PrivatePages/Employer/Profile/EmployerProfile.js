// Profile.js
import React from 'react';
import StatusBadge from './Components/StatusBadge';
import InputField from './Components/InputField';
import useEmployerProfile from './useEmployerProfile';

const EmployerProfile = () => {
  const {
    formData,
    loading,
    status,
    errors,
    submitLoading,
    handleChange,
    handleSubmit
  } = useEmployerProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with Status */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Company Profile</h2>
            <StatusBadge status={status} />
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Organization Name"
                name="orgName"
                value={formData.orgName}
                onChange={handleChange}
                error={errors.orgName}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                error={errors.mobile}
              />
              <InputField
                label="Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                error={errors.website}
              />
              <InputField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                error={errors.city}
              />
              <InputField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About Organization
              </label>
              <textarea
                id="about"
                name="about"
                rows={4}
                value={formData.about}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.about ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.about && <p className="text-sm text-red-500">{errors.about}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitLoading}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {submitLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Updating...</span>
                  </div>
                ) : (
                  'Update Profile'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;