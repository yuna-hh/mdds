import { createClient } from '@/supabase/server';
import { getPaginationParams } from '@/utils/paginate/pagination';
import { handleError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const searchParams = request.nextUrl.searchParams;
  const { page, limit, from, to } = getPaginationParams(searchParams);

  try {
    const { data, error, count } = await supabase
      .from("posts")
      .select(`*, teams(team), user(name)`, {count: "exact"})
      .order("created_at", { ascending: false })
      .range(from, to);

    if(error) {
      return handleError("정보를 가져오는데 실패했습니다.")
    }
    return handleSuccess({data, page, limit, count}, undefined)

  } catch (error) {
    console.error(error)
    return handleError("실패하였습니다")
  }
}