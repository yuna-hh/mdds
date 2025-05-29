import Header from "@/components/common/layout/Header";
import AuthProvider from "../_providers/AuthProvider";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Header />
      <div className="flex justify-center min-w-[320px] max-w-[1200px] m-auto">
        {children}
      </div>
    </AuthProvider>
  );
};

export default PageLayout;
