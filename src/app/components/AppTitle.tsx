'use client'

type AppTitleProps = {
  name: string
  size: number
}

export default function AppTitle({name, size}: AppTitleProps) {

  return (
    <>
      <p style={{color: 'blue', fontSize: size}}>{name}</p>
    </>
  )
}
