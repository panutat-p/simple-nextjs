import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { getProduct } from './service'

export default async function ProductPage() {
  const res = await getProduct()

  return (
    <>
      <Container>
        <Typography variant="h3">Product</Typography>
        {res.data && (
          <>
            <Grid container marginTop={5} spacing={3}>
              {res.data.map((item: any) => {
                return (
                  <Grid container spacing={2} lg={3} item key={item.id}>
                    <Paper>
                      <Image src={item.picture} alt={item.detail} priority width={250} height={175} />
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
