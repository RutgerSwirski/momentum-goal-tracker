type GridProps = {
  columns: number;
  gap: number;
  children: React.ReactNode;
};

const Grid = ({ columns, gap, children }: GridProps) => {
  const gridClasses = `grid grid-cols-1  md:grid-cols-${columns} gap-${gap} grid-rows-${columns}`;

  return <div className={gridClasses}>{children}</div>;
};

export default Grid;
