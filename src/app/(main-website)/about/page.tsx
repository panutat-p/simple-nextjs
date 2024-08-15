import Link from 'next/link'
import { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export const metadata: Metadata = {
  title: 'About',
  description: 'src/app/(main-website)/about/page.tsx',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

async function getData() {
  const res = await fetch('https://api.codingthailand.com/api/version')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function AboutPage() {
  const res = await getData()

  return (
    <>
      <Container>
        <Typography variant="h3">About</Typography>
        <Typography>This is the about page</Typography>
        <Typography>Version: {res.data.version}</Typography>
        <div>
          <Button component={Link} href="/" variant="contained" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
            Go to Home
          </Button>
        </div>
      </Container>
    </>
  )
}
