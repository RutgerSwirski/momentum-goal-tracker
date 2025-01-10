const CheckboxWithLabel = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxWithLabel;
