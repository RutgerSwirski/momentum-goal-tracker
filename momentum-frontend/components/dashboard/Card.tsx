const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border p-4 rounded-md bg-white h-full grow flex flex-col gap-2">
      {children}
    </div>
  );
};

export default Card;
