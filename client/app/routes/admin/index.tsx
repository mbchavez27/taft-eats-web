import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import type { Route } from "./+types/admin/index";
import { users } from "~/features/admin/data/users";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taft Eats: Admin" },
    { name: "description", content: "Taft Eats" },
  ];
}

export default function AdminPage() {
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
              <TableHead className="font-bold text-black">EMAIL</TableHead>
              <TableHead className="font-bold text-black">BIO</TableHead>
              <TableHead className="font-bold text-black text-center">
                ROLE
              </TableHead>
              <TableHead className="font-bold text-black">BOOKMARKS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                {/* Center Checkbox */}
                <TableCell className="text-center py-4">
                  <div className="flex justify-center items-center">
                    <Checkbox />
                  </div>
                </TableCell>

                <TableCell className="text-center py-4 font-medium">
                  {user.id}
                </TableCell>

                <TableCell className="py-4 min-w-[150px]">
                  <div className="flex flex-col whitespace-normal break-words">
                    <span className="font-bold text-slate-900 leading-tight">
                      {user.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {user.handle}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-slate-600 break-all min-w-[180px]">
                  {user.email}
                </TableCell>

                <TableCell className="py-4 text-slate-600 text-sm leading-relaxed max-w-[300px] whitespace-normal break-words align-top">
                  {user.bio}
                </TableCell>

                <TableCell className="py-4 text-center">
                  <div className="flex justify-center items-center">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 hover:bg-green-100 font-normal border-none"
                    >
                      {user.role}
                    </Badge>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-sm min-w-[150px]">
                  {user.bookmarks ? (
                    <div className="flex flex-col whitespace-normal break-words">
                      <span className="text-slate-900 font-medium">
                        {user.bookmarks}
                      </span>
                      <span className="text-xs text-slate-400 italic">
                        {user.bookmarkId}
                      </span>
                    </div>
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
