// FormField.jsx
const FormField = ({ type = "text", label, name, value, error, onChange, options = [], ...props }) => (
    <div className={props.className || "w-full"}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

    {type==='file' && (
       (value instanceof File) ? <p className="text-sm text-green-500">File selected</p>
    :
        (value && value.includes("https://res.cloudinary.com")) && <a href={value} target="_blank" className="text-sm text-green-500">View File</a>
    )}

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
          } px-3 py-2 focus:border-orange-500 focus:ring-orange-500`}
          {...props}
        >
          <option value="">Select {label}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
          } px-3 py-2 focus:border-orange-500 focus:ring-orange-500`}
          {...props}
        />
      ) : type==='file' ? ( 
        <input
            type={type}
            name={name}
            onChange={onChange}
            className={`mt-1 block w-full rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 focus:border-orange-500 focus:ring-orange-500`}
            {...props}
      />
      ): (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
          } px-3 py-2 focus:border-orange-500 focus:ring-orange-500`}
          {...props}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
  
export default FormField;