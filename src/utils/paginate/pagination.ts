export const getPaginationParams = (searchParams: URLSearchParams) => {
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "5");

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  return { page, limit, from, to };
};


export const calculateLastPageIndex = (countData: number, option: number = 0) => {
  return Math.ceil((countData + option) / 10) - 1
}