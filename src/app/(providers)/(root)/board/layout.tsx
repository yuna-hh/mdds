const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center max-w-[800px] w-full mb-[96px] mt-[73px] mx-[60px]">
      {children}
    </div>
  );
};

export default BoardLayout;
