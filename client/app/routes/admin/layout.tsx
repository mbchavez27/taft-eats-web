import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <>
      <main className="min-h-screen w-full bg-gray-200">
        <Outlet />
      </main>
    </>
  )
}
