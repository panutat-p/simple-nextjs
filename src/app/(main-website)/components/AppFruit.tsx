'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function AppFruit() {
  const fruits = ['🍎', '🍊', '🍌', '🍉', '🍇']
  const [fruit, setFruit] = React.useState(fruits[0])

  function onClick() {
    const index = Math.floor(Math.random() * fruits.length)
    setFruit(fruits[index])
  }

  return (
    <>
      <h1 style={{ color: 'green', fontSize: 25 }}>Fruit</h1>
      <Typography>{fruit}</Typography>
      <Button variant="contained" onClick={onClick}>
        random
      </Button>
    </>
  )
}