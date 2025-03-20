import { createClient } from '@/supabase/server';
import { handleError, handleSuccess } from '@/utils/error/api';

export async function getPosts() {
  try {
    const supabase = await createClient();
    const { data: posts, error } = await supabase
      .from("posts")
      .select(`*, teams(team)`)
      .order("created_at", { ascending: false });
      
    if (error) {
      return handleError("실패하였습니다")
    }
    return handleSuccess(posts || [])

  } catch (err) {
    return handleError("실패하였습니다")
  }
}