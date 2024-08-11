'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function AppHeader() {
  const pathname = usePathname()

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            🦊 Fox
          </Typography>
          <nav>
            <Link
              underline={pathname == '/' ? 'always' : 'none'}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/"
              replace
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              underline={pathname == '/about' ? 'always' : 'none'}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              underline={pathname == '/contact' ? 'always' : 'none'}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/contact"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Us
            </Link>
            <Link
              underline={pathname == '/product' ? 'always' : 'none'}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/product"
              sx={{ my: 1, mx: 1.5 }}
              // prefetch={false}
            >
              Product
            </Link>
          </nav>
          <Button LinkComponent={NextLink} href="/login" variant="outlined" color="inherit" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
