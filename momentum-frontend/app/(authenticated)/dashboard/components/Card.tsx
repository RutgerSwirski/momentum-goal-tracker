const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border p-6 rounded-xl bg-white grow flex flex-col gap-4 h-auto max-w-full break-inside-avoid ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
