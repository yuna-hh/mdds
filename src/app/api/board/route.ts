import { createClient } from '@/supabase/server';
import { handleError, handleSuccess } from '@/utils/response/api';

export async function GET() {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(`*, teams(team)`)
      .order("created_at", { ascending: false });

    if(error) {
      return handleError("정보를 가져오는데 실패했습니다.")
    }
    return handleSuccess(data)

  } catch (error) {
    console.error(error)
    return handleError("실패하였습니다")
  }
}