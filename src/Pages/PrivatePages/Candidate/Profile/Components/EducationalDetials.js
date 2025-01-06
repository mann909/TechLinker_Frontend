import FormField from "./FormDetails";

  // EducationDetails.jsx
  const EducationDetails = ({ formData, errors, handleChange }) => {
    const educationFields = [
      { name: 'course', label: 'Course', type: 'text' },
      { name: 'passingYear', label: 'Passing Year', type: 'number' },
      { name: 'marks', label: 'Marks', type: 'text' }
    ];
  
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationFields.map(field => (
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

  export default EducationDetails;