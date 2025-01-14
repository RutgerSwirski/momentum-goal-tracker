import LabelValue from "./LabelValue";

const BadgeLabelValue = ({ label, value }) => (
  <LabelValue
    label={label}
    value={value}
    className="bg-green-100 text-green-700 rounded px-2 py-1"
  />
);

export default BadgeLabelValue;
