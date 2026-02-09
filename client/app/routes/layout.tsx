import { Outlet } from 'react-router'
import NavBar from '~/components/organisms/navbar'

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
