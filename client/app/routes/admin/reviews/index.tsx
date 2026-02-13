import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Checkbox } from "~/components/ui/checkbox";
import type { Route } from "./+types/admin/index";
import { reviews } from "~/features/admin/data/reviews";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taft Eats: Admin - Reviews" },
    { name: "description", content: "Manage Reviews" },
  ];
}

export default function ReviewsPage() {
  return (
    <div className="p-8 w-full">
      <div className="rounded-md border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="w-[50px] text-center">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[40px] font-bold text-black text-center">
                #
              </TableHead>
              <TableHead className="font-bold text-black max-w-[300px]">
                BODY
              </TableHead>
              <TableHead className="font-bold text-black text-center">
                RATING
              </TableHead>
              <TableHead className="font-bold text-black">USER #</TableHead>
              <TableHead className="font-bold text-black">
                RESTAURANT #
              </TableHead>
              <TableHead className="font-bold text-black">OWNER #</TableHead>
              <TableHead className="font-bold text-black">RESPONSE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id} className="align-top">
                <TableCell className="text-center py-4">
                  <div className="flex justify-center items-center">
                    <Checkbox />
                  </div>
                </TableCell>

                <TableCell className="text-center py-4 font-medium">
                  {review.id}
                </TableCell>

                <TableCell className="py-4 text-slate-600 text-sm leading-relaxed max-w-[350px] whitespace-normal break-words">
                  {review.body}
                </TableCell>

                <TableCell className="py-4 text-center font-medium text-slate-900">
                  {review.rating}
                </TableCell>

                <TableCell className="py-4 text-slate-600 font-medium text-sm">
                  {review.userId}
                </TableCell>

                <TableCell className="py-4 min-w-[150px]">
                  <div className="flex flex-col whitespace-normal break-words">
                    <span className="text-slate-900 font-medium text-sm">
                      {review.restaurant}
                    </span>
                    <span className="text-xs text-slate-400 italic">
                      {review.restaurantId}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-sm">
                  {review.ownerId ? (
                    <span className="text-slate-900">{review.ownerId}</span>
                  ) : (
                    <span className="text-slate-400 font-mono text-xs">
                      NULL
                    </span>
                  )}
                </TableCell>

                <TableCell className="py-4 text-sm">
                  {review.response ? (
                    <span className="text-slate-900">{review.response}</span>
                  ) : (
                    <span className="text-slate-400 font-mono text-xs">
                      NULL
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
