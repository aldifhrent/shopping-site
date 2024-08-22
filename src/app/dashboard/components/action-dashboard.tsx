import { deleteProductById } from "@/actions/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import Link from "next/link";

interface ProductActionsProps {
  productId: string;
}

const ActionDashboard = ({ productId }: ProductActionsProps) => {
  const handleDelete = async (productId: string) => {
    await deleteProductById(productId);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1">
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mt-2">
        <Link href={`/dashboard/edit/${productId}`}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDashboard;
