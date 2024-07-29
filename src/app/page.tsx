import AppFruit from './components/AppFruit'
import AppLogo from './components/AppLogo'
import AppTitle from './components/AppTitle'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <AppLogo />
      <hr />
      <AppTitle name="Mister" size={35} />
      <AppTitle name="Miss" size={20} />
      <hr />
      <AppFruit />
    </main>
  )
}
