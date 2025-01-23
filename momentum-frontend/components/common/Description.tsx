import { Description as HeadlessDescription } from "@headlessui/react";

const Description = ({ children }) => {
  return (
    <HeadlessDescription className="text-sm/6 text-gray-600">
      {children}
    </HeadlessDescription>
  );
};

export default Description;
