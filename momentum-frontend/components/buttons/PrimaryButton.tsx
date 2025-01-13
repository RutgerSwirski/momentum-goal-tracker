type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const PrimaryButton = ({
  text,
  onClick,
  type,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className=" px-6 py-3 bg-primary_teal rounded-lg text-button text-white"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
