import FormField from "./FormDetails";

  // JobProfile.jsx
  const JobProfile = ({ formData, errors, handleChange }) => {
    const jobFields = [
      { name: 'workExperience', label: 'Work Experience (in years)', type: 'number' },
      { name: 'resumeFile', label: 'Resume', type: 'file', accept: '.pdf,.doc,.docx' },
      { name: 'currentCompany', label: 'Current Company', type: 'text' },
      { name: 'previousCompany', label: 'Previous Company', type: 'text' },
      { name: 'role', label: 'Role', type: 'text' },
      { name: 'subRole', label: 'Sub Role', type: 'text' },
      { name: 'industry', label: 'Industry', type: 'text' },
      { name: 'jobType', label: 'Job Type', type: 'text' },
      { name: 'prefferedLocation', label: 'Preferred Location', type: 'text' }
    ];
  
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobFields.map(field => (
            <FormField
              key={field.name}
              {...field}
              value={formData[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
    );
  };

  export default JobProfile;