import { Label as HeadlessLabel } from "@headlessui/react";

type LabelProps = {
  children: React.ReactNode;
};

const Label = ({ children }: LabelProps) => {
  return (
    <HeadlessLabel className="text-sm/6 font-medium text-gray-900">
      {children}
    </HeadlessLabel>
  );
};

export default Label;
