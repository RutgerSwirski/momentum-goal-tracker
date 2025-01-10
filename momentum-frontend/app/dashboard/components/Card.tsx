const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border p-6 rounded-xl bg-white grow flex flex-col gap-4">
      {children}
    </div>
  );
};

export default Card;
