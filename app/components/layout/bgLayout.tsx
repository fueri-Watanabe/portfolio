const BgLayout = ({
  children,
  bgClass,
}: {
  children: React.ReactNode;
  bgClass: string;
}) => {
  return <div className={bgClass}>{children}</div>;
};
export default BgLayout;
