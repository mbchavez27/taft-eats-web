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
import { establishments } from "~/features/admin/data/establishments";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taft Eats: Admin - Establishments" },
    { name: "description", content: "Manage Establishments" },
  ];
}

export default function EstablishmentsPage() {
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
              <TableHead className="font-bold text-black">NAME</TableHead>
              <TableHead className="font-bold text-black max-w-[400px]">
                DESCRIPTION
              </TableHead>
              <TableHead className="font-bold text-black text-right whitespace-nowrap">
                PRICE RANGE
              </TableHead>
              <TableHead className="font-bold text-black">TAGS</TableHead>
              <TableHead className="font-bold text-black">LOCATION</TableHead>
              <TableHead className="font-bold text-black text-center">
                RATING
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {establishments.map((item) => (
              <TableRow key={item.id} className="align-top group">
                <TableCell className="text-center py-4">
                  <div className="flex justify-center items-center h-full">
                    <Checkbox />
                  </div>
                </TableCell>

                <TableCell className="text-center py-4 font-medium text-slate-900">
                  {item.id}
                </TableCell>

                <TableCell className="py-4 min-w-[160px]">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 leading-tight">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">
                      {item.cuisine}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-slate-600 text-sm leading-relaxed max-w-[400px] whitespace-normal break-words">
                  {item.description}
                </TableCell>

                <TableCell className="py-4 text-right min-w-[120px]">
                  <div className="flex flex-col items-end">
                    <span className="text-slate-700 font-medium text-sm">
                      {item.priceRange}
                    </span>
                    <span className="text-xs text-slate-400 font-bold tracking-widest mt-0.5">
                      {item.priceSymbol}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="py-4 min-w-[140px]">
                  <span className="text-slate-600 text-sm">{item.tags}</span>
                </TableCell>

                <TableCell className="py-4 text-slate-500 text-xs font-mono max-w-[150px] break-all">
                  {item.location}
                </TableCell>

                <TableCell className="py-4 text-center font-medium text-slate-900">
                  {item.rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
