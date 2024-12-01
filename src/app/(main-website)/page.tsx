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

function concatDSN(host: string, port: string, username: string, password: string) {
  return `mongodb://${username}:${password}@${host}:${port}/admin`
}

export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h3">Home</Typography>
        <Typography>ENV app name: {process.env.NEXT_PUBLIC_APP_NAME}</Typography>
        <Typography>ENV DB host: {process.env.DB_HOST}</Typography>
        <Typography>ENV MONGODB_HOST: {process.env.MONGODB_HOST}</Typography>
        <Typography>ENV MONGODB_PORT: {process.env.MONGODB_PORT}</Typography>
        <Typography>ENV MONGODB_USERNAME: {process.env.MONGODB_USERNAME}</Typography>
        <Typography>ENV MONGODB_PASSWORD: {process.env.MONGODB_PASSWORD}</Typography>
        <Typography>ENV MONGODB_DB_NAME: {process.env.MONGODB_DB_NAME}</Typography>
        <Typography>
          MongoDB DSN:
          {concatDSN(
            process.env.MONGODB_HOST || '',
            process.env.MONGODB_PORT || '',
            process.env.MONGODB_USERNAME || '',
            process.env.MONGODB_PASSWORD || ''
          )}
        </Typography>
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
