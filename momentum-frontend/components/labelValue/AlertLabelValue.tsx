import LabelValue from "./LabelValue";

const AlertLabelValue = ({ label, value }) => (
  <LabelValue
    label={label}
    value={value}
    className="bg-red-100 text-red-700 rounded font-semibold px-2 py-1"
  />
);

export default AlertLabelValue;
