import { Textarea as HeadlessTextarea } from "@headlessui/react";

type TextareaProps = {
  name: string;
  rows?: number;
  placeholder: string;
  [key: string]: any;
};

const Textarea = ({ name, rows = 3, placeholder, ...props }: TextareaProps) => (
  <HeadlessTextarea
    id={name}
    name={name}
    rows={rows}
    placeholder={placeholder}
    className={`block p-4 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
    {...props}
  />
);

export default Textarea;
