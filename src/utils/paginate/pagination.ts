export const getPaginationParams = (searchParams: URLSearchParams) => {
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "5");

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  return { page, limit, from, to };
};

export const calculatePageIndex = (countData: number, isTotal: boolean = false) => {
  if(countData === 0) return 0
  const totalPage = Math.ceil(countData / 10)
  return isTotal ? totalPage : totalPage - 1
}