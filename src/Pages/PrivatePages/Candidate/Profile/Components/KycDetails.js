import FormField from "./FormDetails";

  // KYCDetails.jsx
  const KYCDetails = ({ formData, errors, handleChange }) => {
    const documents = [
      {
        title: 'PAN Card Details',
        numberField: 'panCardNumber',
        fileField: 'panCardFile'
      },
      {
        title: 'Driving License Details',
        numberField: 'drivingLicenseNumber',
        fileField: 'drivingLicenseFile'
      },
      {
        title: 'Passport Details',
        numberField: 'passPortNumber',
        fileField: 'passPortFile'
      }
    ];
  
    return (
      <div className="space-y-4">
        <div className="bg-orange-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-orange-700">Please provide at least one valid document from the options below.</p>
        </div>
        
        {documents.map(doc => (
          <div key={doc.title} className="border rounded-lg p-4 space-y-4">
            <h4 className="font-medium">{doc.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                type="text"
                label={`${doc.title.split(' ')[0]} Number`}
                name={doc.numberField}
                value={formData[doc.numberField]}
                error={errors[doc.numberField]}
                onChange={handleChange}
              />
              <FormField
                type="file"
                label={`${doc.title.split(' ')[0]} Image`}
                name={doc.fileField}
                value={formData[doc.fileField]}
                onChange={handleChange}
                error={errors[doc.fileField]}
                accept=".png, .jpg, .jpeg, .webp"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default KYCDetails;