export async function getProduct() {
  const res = await fetch('https://api.codingthailand.com/api/course', { next: { revalidate: 10 } })

  if (!res.ok) {
    throw new Error('Failed to GET /api/course')
  }

  return res.json()
}
