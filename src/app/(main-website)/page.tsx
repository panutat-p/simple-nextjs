import { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import AppFruit from './components/AppFruit'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Container from '@mui/material/Container'

export const metadata: Metadata = {
  title: 'Home',
  description: 'src/app/(main-website)/page.tsx',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h3">Home</Typography>
        <Typography>ENV app name: {process.env.NEXT_PUBLIC_APP_NAME}</Typography>
        <Typography>ENV DB host: {process.env.DB_HOST}</Typography>
        <AppFruit />
        <div>
          <Button
            component={Link}
            href="/about"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            Go to About
          </Button>
        </div>
      </Container>
    </>
  )
}
