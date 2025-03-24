import { NextResponse } from 'next/server';

// export function handleError(message: string): never {
//   console.error("데이터 조회 실패:");
//   throw new Error(`데이터를 가져오는데 실패했습니다: ${message}`);
// }


// export function handleSuccess<T>(data: T): T {
//   return data;
// }

export function handleSuccess(data?: unknown, message?: string) {
  return NextResponse.json({ data, message })
}

export function handleError(message: string) {
  return NextResponse.json({ message })
}

export function handleNetworkError() {
  return NextResponse.json({ error: "네트워크 오류가 발생하였습니다" })
}