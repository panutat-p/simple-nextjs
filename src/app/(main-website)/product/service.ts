export async function getProduct() {
  const res = await fetch('https://api.codingthailand.com/api/course', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to GET /api/course')
  }

  return res.json()
}

export async function getProductCache() {
  const res = await fetch('https://api.codingthailand.com/api/course', { next: { revalidate: 10 } })

  if (!res.ok) {
    throw new Error('Failed to GET /api/course')
  }

  return res.json()
}

export async function getProductStatic() {
  const res = await fetch('https://api.codingthailand.com/api/course')

  if (!res.ok) {
    throw new Error('Failed to GET /api/course')
  }

  return res.json()
}
