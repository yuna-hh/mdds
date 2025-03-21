import Input from "@/components/common/form/Input";
import AuthPage from "@/components/common/layout/page/AuthPage";

const JoinPage = () => {
  return (
    <AuthPage>
      <Input
        label="이름"
        type="text"
        placeholder="홍길동"
        required
        variant="default"
        name="username"
      />
    </AuthPage>
  );
};

export default JoinPage;
