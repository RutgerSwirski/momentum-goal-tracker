type SecondaryButtonProps = {
  text: string;
};

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
  return (
    <button className="px-6 py-3 bg-primary_sky_blue rounded-lg text-button">
      {text}
    </button>
  );
};

export default SecondaryButton;
