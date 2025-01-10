const InputField = ({
  type,
  id,
  placeholder,
}: {
  type: string;
  id: string;
  placeholder: string;
}) => {
  return (
    <input
      className="border w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary_teal focus:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputField;
