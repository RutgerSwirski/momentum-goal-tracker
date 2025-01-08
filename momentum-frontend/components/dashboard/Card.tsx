const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border p-6 rounded-md bg-white grow flex flex-col gap-2">
      {children}
    </div>
  );
};

export default Card;
