import AppFruit from './components/AppFruit'
import AppLogo from './components/AppLogo'
import AppTitle from './components/AppTitle'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <h3>ENV app name: {process.env.NEXT_PUBLIC_APP_NAME}</h3>
      <h3>ENV DB host: {process.env.DB_HOST}</h3>
      <AppLogo />
      <hr />
      <AppTitle name="Mister" size={35} />
      <AppTitle name="Miss" size={20} />
      <hr />
      <AppFruit />
    </main>
  )
}
