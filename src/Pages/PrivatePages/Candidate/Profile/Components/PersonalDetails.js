import FormField from "./FormDetails";

  // PersonalDetails.jsx
  const PersonalDetails = ({ formData, errors, handleChange }) => {
    const personalFields = [
      { name: 'fullName', label: 'Full Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'mobile', label: 'Mobile', type: 'tel' },
      { 
        name: 'gender', 
        label: 'Gender', 
        type: 'select',
        options: [
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Other', label: 'Other' }
        ]
      },
      { name: 'dob', label: 'Date of Birth', type: 'date' },
      { name: 'subLocation', label: 'Sub Location', type: 'text' },
      { 
        name: 'maritalStatus', 
        label: 'Marital Status', 
        type: 'select',
        options: [
          { value: 'Single', label: 'Single' },
          { value: 'Married', label: 'Married' },
          { value: 'Divorced', label: 'Divorced' },
          { value: 'Widowed', label: 'Widowed' }
        ]
      },
      { name: 'language', label: 'Language', type: 'text' },
      { 
        name: 'englishFluency', 
        label: 'English Fluency', 
        type: 'select',
        options: [
          { value: 'Beginner', label: 'Beginner' },
          { value: 'Intermediate', label: 'Intermediate' },
          { value: 'Advanced', label: 'Advanced' },
          { value: 'Native', label: 'Native' }
        ]
      },
      { name: 'currentAddress', label: 'Current Address', type: 'textarea', className: 'col-span-2' },
      { name: 'permanentAddress', label: 'Permanent Address', type: 'textarea', className: 'col-span-2' }
    ];
  
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalFields.map(field => (
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
  

export default PersonalDetails;