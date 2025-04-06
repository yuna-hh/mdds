import { createClient } from '@/supabase/client';
import { LoginType } from '@/types/auth';

export async function handleJoin({
  email,
  password,
  name,
  phone,
}: {
  email: string;
  password: string;
  name: string;
  phone?: string;
}) {
  const response = await fetch("/api/auth/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password, name, phone})
  })
  return response.json()
}

export async function handleLogin({email, password}: LoginType) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password}),
  })
  return response.json()
}

export async function getUserInfo() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function logout() {
  const response = await fetch("/api/auth/logout",{
    method: "DELETE"
  })
  return response.json()
}