"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataType } from "./mockTableData";
import { BsThreeDots } from "react-icons/bs";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<DataType>[] = [
  {
    header: "Transaction type",
    accessorKey: "transaction_type",
  },
  {
    header: "Amount",
    cell: ({ row }) => {
      const data = row.original;
      const currency = data.currency;

      return (
        <div className="row-flex !justify-start">
          <span className="inline-flex">
            <PiCurrencyNgnLight size={16} className="mt-[2px] text-[#666]" />
          </span>
          <p className="">{data.amount}</p>
        </div>
      );
    },
  },
  {
    header: "Description",
    cell: ({ row }) => {
      const data = row.original;

      return <p className="capitalize">{data.description}</p>;
    },
  },
  {
    header: "Status",
    cell: ({ row }) => {
      const data = row.original;
      const status = data.status;

      const color =
        status === "success"
          ? "green"
          : status === "pending"
            ? "yellow"
            : "red";

      return (
        <p
          className={twMerge(
            "text-base font-medium",
            status === "success" && "text-emerald-500",
            status === "failed" && "text-red-500",
            status === "pending" && "text-yellow-500",
          )}
        >
          {data.status}
        </p>
      );
    },
  },
  {
    header: "Date",
    cell: ({ row }) => {
      const data = row.original;

      const dob = data.date;
      const time = data.time;

      const value = `${dob} ${time}`;
      // const formatted = new Date(dob as string).toLocaleDateString();

      return <p className="">{value}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-6 w-6 p-0">
              <span className="sr-only">Open menu</span>
              <BsThreeDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(data.description as string)
              }
            >
              Copy Description
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
