import Select from "react-select";

type SelectPickerProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

const SelectPicker = ({
  options,
  value,
  onChange,
  ...props
}: SelectPickerProps) => {
  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={(option) => onChange(option.value)}
      {...props}
    />
  );
};

export default SelectPicker;
