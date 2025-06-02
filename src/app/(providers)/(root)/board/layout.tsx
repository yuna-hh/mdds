const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center max-w-[860px] min-w-[320px] w-full my-[40px] sm:my-[73px] px-[30px] sm:px-[60px]">
      {children}
    </div>
  );
};

export default BoardLayout;
