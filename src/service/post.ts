import { createClient } from '@/supabase/server';

export async function getPosts() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("posts")
    .select(`*, teams(team)`)
    .order("created_at", { ascending: false })
    if (error) {
      console.error("Supabase query error:", error);
      return [];
    }
    return posts || [];
};