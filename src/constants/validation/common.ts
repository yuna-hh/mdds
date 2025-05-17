export const CHECK_EMPTY = {
  validate: {
    check: (value: string) => {
      return value.trim().length > 0 || "내용을 작성해주세요"
    }
  }
} 