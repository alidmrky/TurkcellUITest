import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../src/components/antd/Table';
import { Button } from '../../src/components/antd/Button';

const meta: Meta<typeof Table> = {
  title: 'Ant Design/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
    bordered: {
      control: { type: 'boolean' },
    },
    striped: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    status: 'Inactive',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    status: 'Active',
  },
  {
    key: '4',
    name: 'Jane Doe',
    age: 28,
    address: 'Paris No. 1 Lake Park',
    status: 'Pending',
  },
];

const columns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => (
      <span style={{ 
        color: status === 'Active' ? 'green' : 
              status === 'Inactive' ? 'red' : 'orange' 
      }}>
        {status}
      </span>
    ),
    filters: [
      { text: 'Active', value: 'Active' },
      { text: 'Inactive', value: 'Inactive' },
      { text: 'Pending', value: 'Pending' },
    ],
    onFilter: (value: string, record: any) => record.status === value,
  },
  {
    key: 'actions',
    title: 'Actions',
    render: () => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="link" size="small">Edit</Button>
        <Button type="link" size="small" danger>Delete</Button>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: sampleData,
    columns,
    loading: true,
  },
};

export const Small: Story = {
  args: {
    data: sampleData,
    columns,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    data: sampleData,
    columns,
    size: 'large',
  },
};

export const Bordered: Story = {
  args: {
    data: sampleData,
    columns,
    bordered: true,
  },
};

export const Striped: Story = {
  args: {
    data: sampleData,
    columns,
    striped: true,
  },
};

export const NoPagination: Story = {
  args: {
    data: sampleData,
    columns,
    pagination: false,
  },
};

export const CustomPagination: Story = {
  args: {
    data: sampleData,
    columns,
    pagination: {
      pageSize: 2,
      showSizeChanger: true,
      showQuickJumper: true,
    },
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleData,
    columns,
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      },
    },
  },
};

export const Expandable: Story = {
  args: {
    data: sampleData,
    columns,
    expandable: {
      expandedRowRender: (record: any) => (
        <div style={{ padding: '16px', background: '#f5f5f5' }}>
          <p><strong>Full Address:</strong> {record.address}</p>
          <p><strong>Additional Info:</strong> This is expanded content for {record.name}</p>
        </div>
      ),
    },
  },
};
