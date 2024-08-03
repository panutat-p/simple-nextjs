import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page',
  keywords: ['Next.js', 'React', 'TypeScript'],
}

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}
