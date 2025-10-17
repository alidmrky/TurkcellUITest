import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from '@/components/mui/DataGrid';
import { mockFinancialData } from '@/src/data/mockFinancialData';

const meta: Meta<typeof DataGrid> = {
  title: 'mui/DataGrid',
  component: DataGrid,
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
    enableColumnVisibility: false,
    enableSelection: false,
    enableExport: false,
    enableDensity: false,
    height: 400,
  },
};

export const WithSorting: Story = {
  args: {
    data: mockFinancialData.slice(0, 15),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
    enableSelection: false,
    enableExport: false,
    enableDensity: false,
    height: 400,
  },
};

export const WithPagination: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: true,
    enableFiltering: false,
    enableColumnVisibility: false,
    enableSelection: false,
    enableExport: false,
    enableDensity: false,
    pageSize: 5,
    height: 400,
  },
};

export const WithFiltering: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: false,
    enablePagination: false,
    enableFiltering: true,
    enableColumnVisibility: false,
    enableSelection: false,
    enableExport: false,
    enableDensity: false,
    height: 400,
  },
};

export const WithSelection: Story = {
  args: {
    data: mockFinancialData.slice(0, 10),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: false,
    enableSelection: true,
    enableExport: false,
    enableDensity: false,
    height: 400,
  },
};

export const WithColumnVisibility: Story = {
  args: {
    data: mockFinancialData.slice(0, 15),
    enableSorting: true,
    enablePagination: false,
    enableFiltering: false,
    enableColumnVisibility: true,
    enableSelection: false,
    enableExport: false,
    enableDensity: false,
    height: 400,
  },
};

export const WithExport: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: false,
    enableExport: true,
    enableDensity: false,
    pageSize: 8,
    height: 400,
  },
};

export const Complete: Story = {
  args: {
    data: mockFinancialData,
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 8,
    height: 500,
  },
};

export const ActiveAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.status === 'active'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 6,
    height: 450,
  },
};

export const InvestmentAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'investment'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 5,
    height: 400,
  },
};

export const HighBalanceAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.balance > 100000),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 4,
    height: 400,
  },
};

export const CreditAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'credit'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 5,
    height: 400,
  },
};

export const BusinessAccounts: Story = {
  args: {
    data: mockFinancialData.filter(account => account.type === 'business'),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 5,
    height: 400,
  },
};

export const CompactView: Story = {
  args: {
    data: mockFinancialData.slice(0, 20),
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 10,
    height: 300,
  },
};

export const LargeDataset: Story = {
  args: {
    data: [...mockFinancialData, ...mockFinancialData, ...mockFinancialData], // 60 records
    enableSorting: true,
    enablePagination: true,
    enableFiltering: true,
    enableColumnVisibility: true,
    enableSelection: true,
    enableExport: true,
    enableDensity: true,
    striped: true,
    pageSize: 15,
    height: 600,
  },
};
