'use client'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function AppLogo() {
  const subTitle = 'This is a subtitle'
  const now = new Date()
  const item = <Typography>{now.toLocaleDateString()}</Typography> // React component
  const isShow = true

  function onClick() {
    alert('🟢 onClick')
  }

  return (
    <>
      <p style={{ color: 'green' }}>hello</p>
      <small>{subTitle}</small> <small>{now.toLocaleDateString()}</small>
      {item}
      {isShow && <div>👉 isShow is true</div>}
      {isShow ? <div>🐵</div> : <div>🦊</div>}
      <Button variant="contained" onClick={onClick}>
        alert
      </Button>
    </>
  )
}
