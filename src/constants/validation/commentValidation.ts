import { CHECK_EMPTY } from './common';

export const COMMENT_VALIDATION ={
  required: "댓글을 작성해주세요",
  maxLength: {
    value: 500,
    message: "최대 500자까지 입력 가능합니다"
  },
  ...CHECK_EMPTY
}