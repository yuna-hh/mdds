import { NextResponse } from 'next/server';

export function handleSuccess(data?: unknown, message?: string) {
  return NextResponse.json({ data, message })
}

export function handleError(message: string) {
  return NextResponse.json({ message })
}

export function handleNetworkError() {
  return NextResponse.json({ error: "네트워크 오류가 발생하였습니다. 다시 시도해주세요" })
}