import DailyReviews from "~/features/admin/containers/dashboard/daily-reviews";
import type { Route } from "./+types/admin/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taft Eats: Admin" },
    { name: "description", content: "Taft Eats" },
  ];
}

export default function AdminPage() {
  return (
    <>
      <DailyReviews />
    </>
  );
}
