import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { findAllCompany } from '../service/company'

export default async function ContactPage() {
  const companies = await findAllCompany()

  return (
    <Container>
      <Typography variant="h3">Contact</Typography>
      <p>{JSON.stringify(companies)}</p>
    </Container>
  )
}
