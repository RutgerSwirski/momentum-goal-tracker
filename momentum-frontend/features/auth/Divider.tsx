const Divider = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="h-px bg-gray-300 flex-1"></div>
      <span className="px-2 text-center text-sm text-gray-600">{text}</span>
      <div className="h-px bg-gray-300 flex-1"></div>
    </div>
  );
};

export default Divider;
