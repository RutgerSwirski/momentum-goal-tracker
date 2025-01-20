type BadgeProps = {
  text: string;
  className?: string;
};

const Badge = ({ text, className = "bg-blue-500 text-white" }: BadgeProps) => {
  return <span className={`px-2 py-1 rounded-full ${className}`}>{text}</span>;
};

export default Badge;
