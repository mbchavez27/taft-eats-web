import {
  type RouteConfig,
  route,
  index,
  prefix,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./routes/layout.tsx', [
    index('./routes/index.tsx'),

    ...prefix('restaurants', [
      route('owner', './routes/restaurants/owner/index.tsx'),
      route(':restaurant', './routes/restaurants/index.tsx'),
    ]),

    ...prefix('user', [route('/', './routes/user-page/index.tsx')]),

    ...prefix('maps', [route('/', './routes/map-view/index.tsx')]),
  ]),

  ...prefix('admin', [
    layout('./routes/admin/layout.tsx', [index('./routes/admin/index.tsx')]),
  ]),
] satisfies RouteConfig
