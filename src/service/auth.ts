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