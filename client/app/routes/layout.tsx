import { Outlet } from 'react-router'
import NavBar from '~/components/organisms/navbar'

export default function RootLayout() {
  return (
    <>
      <main className="min-h-screen w-full bg-[url('/background/background.png')]">
        <NavBar />
        <Outlet />
      </main>
    </>
  )
}
