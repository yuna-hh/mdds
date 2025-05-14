import { Notify } from 'notiflix'

export const TITLE_VALIDATION ={
  required: "제목을 입력해주세요",
  maxLength: {
    value: 70,
    message: "최대 70자까지 입력 가능합니다"
  }
}

export const USAGE_DETAIL_VALIDATION ={
  required: "사용 항목을 입력해주세요",
  maxLength: {
    value: 500,
    message: "최대 500자까지 입력 가능합니다"
  }
}

export const USER_LIST_VALIDATION ={
  required: "명단을 입력해주세요",
  maxLength: {
    value: 100,
    message: "최대 100자까지 입력 가능합니다"
  }
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
  maxLength: {
    value: 50,
    message: "최대 50자까지 입력 가능합니다"
  }
}


export const fileExtension = [".jpeg", ".jpg", ".png", ".webp"];

export const IMAGE_VALIDATION ={
  required: "이미지를 첨부해주세요",
  validate: (value: string) => {
    if(!fileExtension.some(ext => value.endsWith(ext))) return "지원되는 이미지 파일 형식은 jpg, jpeg, png, heic, webp입니다"
  }
}

export const extensionValidation = (file: File) => {
  const extensions = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
  if(!extensions.includes(file.type)) {
    Notify.failure("지원되는 이미지 파일 형식은 jpg, jpeg, png, heic, webp입니다")
    return false
  }
  return true
}

export const TEAM_VALIDATION ={
  required: "팀을 선택해주세요"
}