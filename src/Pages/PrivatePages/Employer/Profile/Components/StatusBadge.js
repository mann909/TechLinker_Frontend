import { Check, AlertCircle, Clock } from 'lucide-react';


const StatusBadge = ({ status }) => {
    const statusConfig = {
      approved: {
        icon: Check,
        text: 'Approved',
        className: 'bg-green-100 text-green-800'
      },
      rejected: {
        icon: AlertCircle,
        text: 'Rejected',
        className: 'bg-red-100 text-red-800'
      },
      pending: {
        icon: Clock,
        text: 'Pending Approval',
        className: 'bg-yellow-100 text-yellow-800'
      }
    };
  
    const config = statusConfig[status];
    const Icon = config.icon;
  
    return (
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${config.className}`}>
        <Icon className="w-4 h-4" />
        <span className="font-medium">{config.text}</span>
      </div>
    );
  };

  export default StatusBadge;