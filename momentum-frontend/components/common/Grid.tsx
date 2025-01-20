type GridProps = {
  columns: number;
  gap: number;
  responsive: boolean;
  children: React.ReactNode;
};

const Grid = ({ columns, gap, responsive, children }: GridProps) => {
  const gridClasses = `grid grid-cols-${columns} gap-${gap}`;
  return <div className={gridClasses}>{children}</div>;
};

export default Grid;
