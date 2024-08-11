import Link from 'next/link'
import { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import AppLogo from './components/AppLogo'
import AppTitle from './components/AppTitle'
import AppFruit from './components/AppFruit'

export const metadata: Metadata = {
  title: 'Home',
  description: 'src/app/(main-website)/page.tsx',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function Home() {
  return (
    <>
      <Typography variant="h3" sx={{ color: 'blue' }}>
        Home
      </Typography>
      <div>
        <Link href={{ pathname: '/about' }}>Go to About</Link>
      </div>
      <h3>ENV app name: {process.env.NEXT_PUBLIC_APP_NAME}</h3>
      <h3>ENV DB host: {process.env.DB_HOST}</h3>
      <AppLogo />
      <hr />
      <AppTitle name="Mister" size={35} />
      <AppTitle name="Miss" size={20} />
      <hr />
      <AppFruit />
    </>
  )
}
