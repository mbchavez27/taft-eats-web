import { Outlet } from 'react-router'
import NavBar from '~/components/organisms/navbar'

export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen w-full bg-[url('/background/background2.png')]">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}
