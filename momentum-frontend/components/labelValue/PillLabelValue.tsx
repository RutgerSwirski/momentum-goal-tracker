import LabelValue from "./LabelValue";

const PillLabelValue = ({ label, value }) => (
  <LabelValue
    label={label}
    value={value}
    className="bg-blue-100 text-blue-700 rounded-full px-2 py-1"
  />
);

export default PillLabelValue;
