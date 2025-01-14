import clsx from "clsx";

const InputField = ({
  type,
  id,
  placeholder,
  onChange,
  value,
  error,
}: {
  type: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: string | undefined;
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <input
        className={clsx(
          "border w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary_teal focus:outline-none",
          {
            "border-red-500": error,
          }
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
