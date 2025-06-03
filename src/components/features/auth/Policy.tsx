type PolicyPropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Policy = ({ isOpen, setIsOpen }: PolicyPropsType) => {
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute left-0 sm:fixed top-0 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:bg-black/70 sm:backdrop-blur-md">
      <div className="w-auto sm:w-[542px] overflow-y-scroll sm:overflow-y-hidden">
        <div className="py-[50px] sm:py-[70px] px-[40px] text-sm bg-white">
          <p>
            &quot;회사명&quot;(이하 &apos;회사&apos;라 함)은고객님의 개인정보를
            중요시하며, &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한
            법률을 준수하고 있습니다.
          </p>
          <br />
          <h3>[개인정보의 수집 및 이용목적]</h3>
          <p>
            &quot;개인정보&quot;라 함은 생존하는 개인에 관한 정보로서 당해
            정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 당해
            개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수
            없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를
            말합니다.
          </p>
          <br />
          <p>
            대부분의 회사 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수
            있습니다. 그러나 회사는 회원서비스를 통하여 이용자들에게 맞춤식
            서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여
            이용자 개인의 정보를 수집하고 있습니다.
          </p>
          <br />
          <h3>[개인정보의 보유 및 이용기간]</h3>
          <p>
            이용자가 회사의 회원으로서 회사에 제공하는 서비스를 이용하는 동안
            회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을
            위해 이용합니다. 다만, 아래의 &quot;마. 이용자 자신의 개인정보
            관리(열람,정정,삭제 등)에 관한 사항&quot; 에서 설명한 절차와 방법에
            따라 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한
            경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며
            추후 열람이나 이용이 불가능한 상태로 처리됩니다.
          </p>
          <br />
          <h3>[개인정보의 파기절차 및 방법]</h3>
          <p>
            회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 해당 정보를 지체없이 파기합니다.
            <br />
            개인정보 파기절차 및 방법은 다음과 같습니다.
          </p>
          <br />
          <h3>1. 파기절차</h3>
          <p>
            회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
            보호책임자의 승인을 받아 개인정보를 파기합니다.
          </p>
          <h3>2. 파기방법</h3>
          <p>
            회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없도록
            파기합니다.
          </p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="w-full py-[17px] font-bold text-lg text-white bg-main-1"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Policy;
