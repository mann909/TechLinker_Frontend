import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Modal from '../../../../../Components/Modal';


const StatusModal = ({ status, onClose }) => {
    const statusConfig = {
      pending: {
        icon: Clock,
        title: 'Account Pending Approval',
        description: 'Your request is still pending. Please try again later.',
        color: 'text-yellow-500'
      },
      rejected: {
        icon: AlertTriangle,
        title: 'Account Rejected',
        description: 'Your request has been rejected. Please signup again.',
        color: 'text-red-500'
      }
    };
  
    const config = statusConfig[status];
    const Icon = config.icon;
  
    return (
      <Modal
        isOpen={true}
        onClose={onClose}
        title={config.title}
        description={config.description}
        footer={
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Close
          </button>
        }
      >
        <div className="flex justify-center py-6">
          <Icon className={`w-16 h-16 ${config.color}`} />
        </div>
      </Modal>
    );
  };

export default StatusModal;