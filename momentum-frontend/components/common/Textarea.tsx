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
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    {...props}
  />
);

export default Textarea;
