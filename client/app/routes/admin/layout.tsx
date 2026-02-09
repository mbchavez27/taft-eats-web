import { Outlet } from 'react-router'
import AdminNavBar from '~/features/admin/components/organisms/admin-navbar'
import AdminSidebar from '~/features/admin/components/organisms/admin-sidebar'

export default function AdminLayout() {
  return (
    <main className="flex min-h-screen bg-gray-200">
      <AdminSidebar />

      <section className="flex flex-col flex-1">
        <AdminNavBar />

        <section>
          <Outlet />
        </section>
      </section>
    </main>
  )
}
