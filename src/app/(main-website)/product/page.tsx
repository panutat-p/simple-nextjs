import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import fruitLogo from './asset/fruit.png'
import { getProduct } from './service'
import { Margin } from '@mui/icons-material'

export default async function ProductPage() {
  const res = await getProduct()

  return (
    <>
      <Container>
        <Typography variant="h3">Product</Typography>
        <Box marginTop={5}>
          <Image src={fruitLogo} alt="fruit logo" width={150} height={150} priority />
        </Box>
        {res.data && (
          <>
            <Grid container marginTop={1}>
              {res.data.map((item: any) => {
                return (
                  <Grid container spacing={2} xs={12} sm={6} md={4} lg={3} item key={item.id}>
                    <Paper sx={{ mt: 5 }}>
                      <Image src={item.picture} alt={item.detail} width={250} height={175} priority />
                      <Typography align="center">{item.title}</Typography>
                    </Paper>
                  </Grid>
                )
              })}
            </Grid>
          </>
        )}
      </Container>
      <Container sx={{ mt: 15 }}>
        {res.data && (
          <ul>
            {res.data.map((item: any) => (
              <li key={item.id}>
                <Typography variant="body2">{item.title}</Typography>
                <Typography variant="body2">{item.detail}</Typography>
                <Typography variant="body2">Date: {item.date}</Typography>
                <Typography variant="body2">Views: {item.view}</Typography>
                <Link href={item.picture} target="_blank" rel="noopener noreferrer" underline="hover">
                  {item.picture}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  )
}
