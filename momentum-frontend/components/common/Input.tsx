import { Input as HeadlessInput } from "@headlessui/react";

type InputProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <HeadlessInput
      className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
