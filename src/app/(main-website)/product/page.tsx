import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { getProduct } from './service'

export default async function ProductPage() {
  const res = await getProduct()
  const products = JSON.stringify(res, null, 2)


  return (
    <Container>
      <Typography variant="h3">Product</Typography>
      <Typography variant="body1">{products}</Typography>
    </Container>
  )
}
