import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

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
        <Typography variant="subtitle1">/about</Typography>
        <Typography variant="h3">About</Typography>
        <Box marginTop={5} marginBottom={3}>
          <Image
            src="/next.svg"
            alt="next logo SVG"
            priority
            width={0}
            height={0}
            style={{ width: 160, height: '100%' }}
          />
        </Box>
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
