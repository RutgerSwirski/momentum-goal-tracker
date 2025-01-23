import ReactDatePicker from "react-datepicker";

type DatePickerProps = {
  value: Date;
  onChange: (date: Date) => void;
};

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  );
};

export default DatePicker;
