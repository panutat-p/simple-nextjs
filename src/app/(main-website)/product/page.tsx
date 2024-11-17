import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { getProduct } from './service'

export default async function ProductPage() {
  const res = await getProduct()
  const products = JSON.stringify(res, null, 2)

  return (
    <Container>
      <Typography variant="h3">Product</Typography>
      <Typography variant="body1">{products}</Typography>
      {res.data && (
        <>
          <Grid container marginTop={5} spacing={3}>
            {res.data.map((item: any) => {
              return (
                <Grid lg={3} item key={item.id}>
                  <Paper>📘 {item.title}</Paper>
                </Grid>
              )
            })}
          </Grid>
        </>
      )}
    </Container>
  )
}
