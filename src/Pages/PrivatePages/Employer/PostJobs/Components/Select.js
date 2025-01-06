import { useState } from "react";

const Select = ({ isMulti, value, onChange, options, className, styles }) => {
    const [selectedValues, setSelectedValues] = useState(value || []);
  
    const handleSelectChange = (e) => {
      // Get all selected options from the multiple select
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => ({
        value: option.value,
        label: option.label
      }));
      
      setSelectedValues(selectedOptions);
      onChange(selectedOptions);
    };
  
    return (
      <select
        multiple={isMulti}
        value={selectedValues.map(item => item.value)}
        onChange={handleSelectChange}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
        style={{
          borderColor: styles?.control?.borderColor,
          minHeight: '100px' // Added to make multiple selections more visible
        }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;