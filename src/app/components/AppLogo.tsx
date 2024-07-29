'use client'

export default function AppLogo() {
  const subTitle = 'This is a subtitle'
  const now = new Date()
  const item = <p>{now.toLocaleDateString()}</p> // React component
  const isShow = true

  function onClick() {
    alert('🟢 onClick')
  }

  return (
    <>
      <p style={{ color: 'green' }}>hello</p>
      <small>{subTitle}</small>
      {' '}
      <small>{now.toLocaleDateString()}</small>

      {item}

      {
        isShow && <div>👉 isShow is true</div>
      }
      {
        isShow 
        ? <div>🐵</div>
        : <div>🦊</div>
      }
      <button onClick={onClick}>click</button>
    </>
  )
}
