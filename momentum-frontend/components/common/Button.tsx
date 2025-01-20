type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-primary_teal rounded-lg text-button text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
