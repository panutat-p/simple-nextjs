import Link from 'next/link'
import AppFruit from './components/AppFruit'
import AppLogo from './components/AppLogo'
import AppTitle from './components/AppTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is the home page',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
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
