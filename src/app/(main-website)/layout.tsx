import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import theme from '../theme'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Main Website',
  description: 'src/app/(main-website)/layout.tsx',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppHeader />
            {children}
            <AppFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
