import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import theme from '../theme'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Main Dashboard',
  description: '/src/app/(main-dashboard)/layout.tsx',
}

export default function MainDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
