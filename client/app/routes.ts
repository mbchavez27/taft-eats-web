import {
  type RouteConfig,
  route,
  index,
  prefix
} from "@react-router/dev/routes";

export default [
  index("./routes/index.tsx"),

    ...prefix("restaurants", [
      route("/owner/", "./routes/restaurants/owner/index.tsx"),
    route(":restaurant", "./routes/restaurants/index.tsx"),
  ]),

    ...prefix("user", [
    route("/", "./routes/user-page/index.tsx"),
  ]),

    ...prefix("maps", [
    route("/", "./routes/map-view/index.tsx"),
  ]),
] satisfies RouteConfig;
