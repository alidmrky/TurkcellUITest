import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@/components/mui/Table';
import { mockFinancialData } from '../../src/data/mockFinancialData';

const meta: Meta<typeof DataTable> = {
  title: 'mui/Table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: mockFinancialData.slice(0, 10),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableSelection: false,
  },
};

export const WithSorting: Story = {
  args: {
    data: mockFinancialData.slice(0, 15),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableSelection: false,
  },
};

export const WithPagination: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: true,
    enableFiltering: false,
    enableSelection: false,
    pageSize: 5,
  },
};

export const WithFiltering: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: false,
    enableFiltering: true,
    enableSelection: false,
    searchPlaceholder: 'Search accounts...',
  },
};

export const WithSelection: Story = {
  args: {
    data: mockFinancialData.slice(0, 10),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableSelection: true,
  },
};

export const Striped: Story = {
  args: {
    data: mockFinancialData.slice(0, 15),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableSelection: false,
    striped: true,
  },
};

export const Dense: Story = {
  args: {
    data: mockFinancialData.slice(0, 20),
    enableSorting: false,
    enablePagination: false,
    enableFiltering: false,
    enableSelection: false,
    dense: true,
  },
};

export const Complete: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search financial accounts...',
    pageSize: 8,
  },
};

export const ActiveAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.status === 'active'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search active accounts...',
    pageSize: 6,
  },
};

export const InvestmentAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'investment'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search investment accounts...',
    pageSize: 5,
  },
};

export const HighBalanceAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.balance > 100000),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search high balance accounts...',
    pageSize: 4,
  },
};

export const CreditAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'credit'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search credit accounts...',
    pageSize: 5,
  },
};

export const BusinessAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'business'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableSelection: true,
    striped: true,
    searchPlaceholder: 'Search business accounts...',
    pageSize: 5,
  },
};
