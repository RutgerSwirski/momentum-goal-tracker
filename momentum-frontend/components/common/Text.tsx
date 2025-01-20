type TextProps = {
  type: "heading" | "subheading" | "paragraph";
  className?: string;
  children: React.ReactNode;
};

const Text = ({
  type,
  className = "",
  children,
}: React.PropsWithChildren<TextProps>) => {
  return <p className={`text-${type} ${className}`}>{children}</p>;
};

export default Text;
