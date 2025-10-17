import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { mockFinancialData, FinancialAccount } from '../../src/data/mockFinancialData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const meta: Meta<typeof DataTable> = {
  title: 'shadcn/Table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Column definitions
const basicColumns: ColumnDef<FinancialAccount>[] = [
  {
    accessorKey: 'accountNumber',
    header: 'Account Number',
  },
  {
    accessorKey: 'accountHolder',
    header: 'Account Holder',
  },
  {
    accessorKey: 'balance',
    header: 'Balance',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('balance'));
      const formatted = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge variant={status === 'active' ? 'default' : 'secondary'}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
];

const sortableColumns: ColumnDef<FinancialAccount>[] = [
  {
    accessorKey: 'accountNumber',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Account Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'accountHolder',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Account Holder
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'balance',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Balance
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('balance'));
      const formatted = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge variant={status === 'active' ? 'default' : 'secondary'}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];

const columnsWithActions: ColumnDef<FinancialAccount>[] = [
  ...sortableColumns,
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const account = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit account</DropdownMenuItem>
            <DropdownMenuItem>Transfer funds</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Close account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const Basic: Story = {
  args: {
    columns: basicColumns,
    data: mockFinancialData.slice(0, 10),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
  },
};

export const WithSorting: Story = {
  args: {
    columns: sortableColumns,
    data: mockFinancialData.slice(0, 15),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
  },
};

export const WithPagination: Story = {
  args: {
    columns: basicColumns,
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: true,
    enableFiltering: false,
    enableColumnVisibility: false,
    pageSize: 5,
  },
};

export const WithFiltering: Story = {
  args: {
    columns: basicColumns,
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: false,
    enableFiltering: true,
    enableColumnVisibility: false,
    searchPlaceholder: 'Search accounts...',
  },
};

export const WithSelection: Story = {
  args: {
    columns: columnsWithActions,
    data: mockFinancialData.slice(0, 10),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
    enableSelection: true,
  },
};

export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: mockFinancialData.slice(0, 15),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
    striped: true,
  },
};

export const Dense: Story = {
  args: {
    columns: basicColumns,
    data: mockFinancialData.slice(0, 20),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
    dense: true,
  },
};

export const Complete: Story = {
  args: {
    columns: columnsWithActions,
    data: mockFinancialData,
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search financial accounts...',
    pageSize: 8,
  },
};

export const ActiveAccounts: Story = {
  args: {
    columns: sortableColumns,
    data: mockFinancialData.filter(account => account.status === 'active'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    striped: true,
    searchPlaceholder: 'Search active accounts...',
    pageSize: 6,
  },
};

export const InvestmentAccounts: Story = {
  args: {
    columns: sortableColumns,
    data: mockFinancialData.filter(account => account.type === 'investment'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    striped: true,
    searchPlaceholder: 'Search investment accounts...',
    pageSize: 5,
  },
};

export const HighBalanceAccounts: Story = {
  args: {
    columns: sortableColumns,
    data: mockFinancialData.filter(account => account.balance > 100000),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    striped: true,
    searchPlaceholder: 'Search high balance accounts...',
    pageSize: 4,
  },
};
