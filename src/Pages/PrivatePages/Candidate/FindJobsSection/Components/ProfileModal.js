import { Search, Briefcase, Clock, Users, MapPin, Calendar } from 'lucide-react';
import Modal from '../../../../../Components/Modal';


const ProfileModal = ({ isOpen, onClose, onCompleteProfile }) => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Complete Your Profile"
      description="You need to complete your profile before applying for jobs. This helps employers better understand your qualifications and experience."
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Later
          </button>
          <button
            onClick={onCompleteProfile}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          >
            Complete Profile
          </button>
        </>
      }
    >
      <div className="grid gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-3">
            <Briefcase className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="font-medium">Professional Info</h4>
            <p className="text-sm text-gray-500">Add your work experience and skills</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-3">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="font-medium">Quick Process</h4>
            <p className="text-sm text-gray-500">Takes only a few minutes to complete</p>
          </div>
        </div>
      </div>
    </Modal>
  );
  
  export default ProfileModal;