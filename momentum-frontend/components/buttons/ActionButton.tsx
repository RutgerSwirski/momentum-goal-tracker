const ActionButton = ({ text, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`mt-2 bg-blue-500 text-white py-1 px-4 rounded ${className}`}
  >
    {text}
  </button>
);

export default ActionButton;
