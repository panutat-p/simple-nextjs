import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <Link href={{ pathname: '/' }}>Go to Home</Link>
      </div>
      <p>This is the about page</p>
    </>
  )
}
