export function handleError(message: string): never {
  console.error("데이터 조회 실패:");
  throw new Error(`데이터를 가져오는데 실패했습니다: ${message}`);
}

export function handleSuccess<T>(data: T): T {
  return data;
}