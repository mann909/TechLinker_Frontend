import { Search, Briefcase, Clock, Users, MapPin, Calendar } from 'lucide-react';


const JobCard = ({ job, onApply }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl hover:scale-110 transition-all ">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.post}</h3>
          <p className="text-gray-600 mt-1">{job.organisationDetails.orgName}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {job.employmentType}
        </span>
      </div>
  
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center text-gray-600">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>{job.payroll}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>{job.openings} openings</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.hiringProcess}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(job.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
  
      <div className="mt-4">
        <h4 className="font-medium text-gray-900">Qualifications:</h4>
        <ul className="mt-2 space-y-1">
          {job.qualifications.map((qual, index) => (
            <li key={index} className="text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
              {qual}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-900">Location:</h4>
        <ul className="mt-2 space-y-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
              {job.organisationDetails.city}, {job.organisationDetails.state}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-900">Minimum Experience:</h4>
        <ul className="mt-2 space-y-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
              {job.minExperience || '0'} years
        </ul>
      </div>
  
      <div className="mt-4">
        <h4 className="font-medium text-gray-900">Description:</h4>
        <p className="mt-2 text-gray-600 line-clamp-3">{job.description}</p>
      </div>
  
      <div className="mt-6">
        <button 
          disabled={job.applied}
          onClick={() => onApply(job._id)}
          className={"w-full text-white py-3 rounded-sm"+(job.applied ? " cursor-not-allowed bg-green-400" : " bg-orange-500 hover:bg-orange-600 ")}
        >
          {job.applied ? "Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );

  export default JobCard;