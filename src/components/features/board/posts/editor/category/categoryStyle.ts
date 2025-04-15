import { StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
}

const colors = {
  main1: '#5b79c7',
  main2: '#a4b1d3',
  main3: '#f8faff',
  red: '#fd5a0f',
  gray1: '#cbcccb',
  gray2: '#e2e3e1',
  gray3: '#f9faf9',
};

export const categoryStyle: StylesConfig<Option, false> = {
  control: () => ({ // form에서 바로 노출되는 카테고리 input
    display: 'flex',
    flexDirection: "row",
    width: "225px",
    minHeight: "48px",
    borderRadius: "8px",
    border: `1px solid ${colors.main1}`,
    boxShadow: "none",
    backgroundColor: "transparent",
    padding:"29px 4px 4px 0px",
  }),
  placeholder: (base) => ({
    ...base,
    color: `${colors.main2}`,
    fontSize: "18px",
    fontWeight: 700,
  }),
  valueContainer: (base) => ({ // 카테고리 input 부분
    ...base,
    padding:"0px 0px 0px 10px",
    color: `${colors.main1}`,
  }),
  singleValue: (base) => ({ // 선택된 값
    ...base,
    color: `${colors.main1}`,
    fontSize: "18px",
    fontWeight: 600,
  }),
  dropdownIndicator: (base, state) => ({ // 화살표
    ...base,
    color: `${colors.main1}`,
    transition: "transform 0.2s",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
  indicatorSeparator: () => ({ // input과 화살표 사이의 구분선
    display: "none",
  }),
  menu: (base) => ({ // option을 묶는 박스
    ...base,
    width: "225px",
    height: "auto",
    boxShadow: "none",
    border: "none",
    margin: "0px",
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "none",
    overflowY: "visible"
  }),
  option: (base, state) => ({   // 카테고리 메뉴
    backgroundColor: state.isSelected
    ? "rgba(125, 146, 219, 0.2)"
    : "white",
    color: `${colors.main1}`,
    fontSize: "18px",
    fontWeight: 600,
    padding: "10px 12px",
    borderRadius: "8px",
    border: `1px solid ${colors.main1}`,
    marginBottom: "4px",
    boxSizing: "border-box",
    "&:hover": {
    backgroundColor: !state.isSelected
      ? `${colors.main3}`
      : "rgba(125, 146, 219, 0.2)",
  },
  }),
};