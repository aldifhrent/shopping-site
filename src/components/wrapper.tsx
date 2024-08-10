interface WrapProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapProps) => {
  return <div className={`px-12 py-[23px] ${className}`}>{children}</div>;
};

export default Wrapper;
