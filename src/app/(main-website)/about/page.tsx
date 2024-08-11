import Link from 'next/link'
import { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export const metadata: Metadata = {
  title: 'About',
  description: 'src/app/(main-website)/about/page.tsx',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function AboutPage() {
  return (
    <>
      <Typography variant="h3" sx={{ color: 'green' }}>
        About
      </Typography>
      <div>
        <Link href={{ pathname: '/' }}>Go to Home</Link>
      </div>
      <div>
        <Button component={Link} href="/" variant="contained" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
          Go to Home
        </Button>
      </div>
      <Typography>This is the about page</Typography>
    </>
  )
}
