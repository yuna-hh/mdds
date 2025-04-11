export const CATEGORY_VALIDATION ={
  required: "항목을 선택해주세요",
}
export const TITLE_VALIDATION ={
  required: "제목을 입력해주세요",
}

export const USAGE_DETAIL_VALIDATION ={
  required: "사용 항목을 입력해주세요",
}

export const USER_LIST_VALIDATION ={
  required: "명단을 입력해주세요",
}

export const PRICE_VALIDATION ={
  required: "청구 금액을 입력해주세요",
  validate: (value: number) => {
    if(value <= 0) return "금액은 0원 이상이어야 합니다"
    if(10000000 < value) return "최대 1,000만원까지 입력 가능합니다"
    return true
  }
}

export const ACCOUNT_VALIDATION ={
  required: "입금 계좌를 입력해주세요",
}