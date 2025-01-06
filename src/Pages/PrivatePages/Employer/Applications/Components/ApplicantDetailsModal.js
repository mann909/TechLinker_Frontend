import { X} from 'lucide-react';

const ApplicantDetailsModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto mx-4 shadow-2xl transform transition-all duration-300 ease-out">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-3 hover:bg-orange-50 rounded-full transition-all duration-300 group"
        >
          <X className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
        </button>
        <div className="p-8 sm:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetailsModal;