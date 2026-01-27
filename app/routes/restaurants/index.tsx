import { useParams } from 'react-router'
import type { Route } from '../+types/restaurants'

export function meta({ params }: Route.MetaArgs) {
  const restaurant_id = params.restaurant
  return [
    { title: 'Taft Eats ' + restaurant_id },
    { name: 'description', content: 'Taft Eats' },
  ]
}

export default function Restaurant() {
  const { restaurant } = useParams()

  return <></>
}
