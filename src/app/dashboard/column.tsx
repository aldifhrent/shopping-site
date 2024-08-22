import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Status",
    header: "Status",
  },
];
