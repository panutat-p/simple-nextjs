export async function getProduct() {
  const res = await fetch('https://api.codingthailand.com/api/course')

  if (!res.ok) {
    throw new Error('Failed to GET /api/course')
  }

  return res.json()
}
