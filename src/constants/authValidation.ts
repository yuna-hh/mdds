export const EMAIL_VALIDATION = {
  required: "이메일을 입력해주세요",
}


export const PASSWORD_VALIDATION = {
  required: "비밀번호를 입력해주세요",
  minLength: {
    value: 6,
    message: "비밀번호는 최소 6자 이상 입력해주세요"
  },
  maxLength: {
    value: 20,
    message: "비밀번호는 최대 20자까지 입력 가능합니다"
  }
}

export const PASSWORD_CONFIRM_VALIDATION = (password: string) => ({
  required: "비밀번호가 일치하지 않습니다",
  validate: (value: string) => value === password ? true : "비밀번호가 일치하지 않습니다"
})

export const USER_NAME_VALIDATION = {
  required: "실명을 입력해주세요",
  minLength: {
    value: 2,
    message: "실명을 입력해주세요"
  },
}

export const PHONE_NUMBER_VALIDATION = {
  validate: (value: string | undefined) => {
    if(!value) return true;
    return (/^\d+$/.test(value)) || "숫자만 입력해주세요"
    // 숫자만 입력 가능하게
  }
}