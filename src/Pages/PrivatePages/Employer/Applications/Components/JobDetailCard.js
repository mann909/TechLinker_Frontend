const JobDetailCard = ({ icon: Icon, label, value }) => (
  value && (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-300">
      <div className="p-2 bg-orange-50 rounded-lg">
        <Icon className="w-5 h-5 text-orange-500" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  )
);
export default JobDetailCard;