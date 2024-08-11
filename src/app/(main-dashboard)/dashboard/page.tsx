import Typography from '@mui/material/Typography'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'src/app/(main-dashboard)/dashboard/page.tsx',
}

export default function DashboardIndex() {
  return (
    <>
      <Typography variant="h5">Dashboard</Typography>
    </>
  )
}
