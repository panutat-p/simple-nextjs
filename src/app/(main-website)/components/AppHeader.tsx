'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function AppHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function toggleDrawer(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setOpen(open)
    }
  }

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            🦊 Fox
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
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
          </Box>
          <Button LinkComponent={NextLink} href="/login" variant="outlined" color="inherit" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ p: 2, width: '20rem', height: 1, backgroundColor: '#2A9BF3' }}>
          <IconButton>
            <CloseIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <ListItemButton component={NextLink} href="/" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/about" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/contact" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/product" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
