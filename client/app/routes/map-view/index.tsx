import { Suspense, lazy } from 'react'
import type { Route } from './+types/index'
const MapView = lazy(() => import('~/features/map/containers/MapView'))

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Taft Eats' }, { name: 'description', content: 'Taft Eats' }]
}

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row py-12 px-10 gap-8">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-1/4"></div>

      {/* Main content */}
      <div className="w-full lg:w-3/4 flex flex-col gap-6 md:gap-8">
        <Suspense
          fallback={
            <div className="text-white font-climate text-2xl animate-pulse">
              Loading...
            </div>
          }
        >
          <MapView />
        </Suspense>
      </div>
    </main>
  )
}
