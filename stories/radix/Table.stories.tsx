import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../../src/components/radix/Table';
import { ColumnDef } from '@tanstack/react-table';
import { mockFinancialData, FinancialAccount } from '../../src/data/mockFinancialData';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

const meta: Meta<typeof DataTable> = {
  title: 'radix/Table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Badge component for status
const Badge = ({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'secondary' }) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  const variantStyles = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800'
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};

// Button component for sorting
const Button = ({ 
  children, 
  onClick, 
  variant = 'ghost',
  disabled = false,
  className = ''
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'ghost' | 'outline';
  disabled?: boolean;
  className?: string;
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors';
  const variantStyles = {
    ghost: 'hover:bg-gray-100 text-gray-700',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

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
      const getStatusVariant = (status: string) => {
        switch (status) {
          case 'active':
            return 'active';
          case 'inactive':
            return 'inactive';
          case 'pending':
            return 'pending';
          case 'suspended':
            return 'suspended';
          default:
            return 'secondary';
        }
      };
      return (
        <Badge variant={getStatusVariant(status)}>
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
      const getStatusVariant = (status: string) => {
        switch (status) {
          case 'active':
            return 'active';
          case 'inactive':
            return 'inactive';
          case 'pending':
            return 'pending';
          case 'suspended':
            return 'suspended';
          default:
            return 'secondary';
        }
      };
      return (
        <Badge variant={getStatusVariant(status)}>
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
        <div className="relative">
          <button className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md flex items-center justify-center">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
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
