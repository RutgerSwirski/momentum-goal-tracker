const LabelValue = ({ label, value, className = "" }) => (
  <div className={`flex items-center justify-between mb-2 ${className}`}>
    <span className="font-medium text-gray-600">{label}:</span>
    <span>{value}</span>
  </div>
);

export default LabelValue;
