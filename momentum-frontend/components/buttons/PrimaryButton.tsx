type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
};

const PrimaryButton = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=" px-6 py-3 bg-primary_teal rounded-lg text-button text-white"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
