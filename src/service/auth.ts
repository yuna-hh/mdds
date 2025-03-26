export async function handleJoin({
  email,
  password,
  name,
  phone,
}: {
  email: string;
  password: string;
  name: string
  phone?: number
}) {
  const response = await fetch("/api/auth/join", {
    method: "POST",
    headers: {
      "ContentType": "application/json",
    },
    body: JSON.stringify({email, password, name, phone})
  })
  return response.json()
}