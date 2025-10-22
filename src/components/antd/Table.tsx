import React from 'react';
import { Table as AntTable, TableProps as AntTableProps } from 'antd';

interface TableProps<T = any> extends Omit<AntTableProps<T>, 'dataSource' | 'columns'> {
  data?: T[];
  columns?: Array<{
    key: string;
    title: string;
    dataIndex?: string;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    sorter?: boolean | ((a: T, b: T) => number);
    filters?: Array<{ text: string; value: any }>;
    onFilter?: (value: any, record: T) => boolean;
  }>;
  loading?: boolean;
  pagination?: boolean | object;
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  striped?: boolean;
}

const Table = React.forwardRef<HTMLDivElement, TableProps>(
  ({ 
    data = [], 
    columns = [], 
    loading = false,
    pagination = true,
    size = 'middle',
    bordered = false,
    striped = false,
    ...props 
  }, ref) => {
    const tableProps: AntTableProps = {
      dataSource: data,
      columns,
      loading,
      pagination,
      size,
      bordered,
      ...props,
    };

    if (striped) {
      tableProps.rowClassName = (_, index) => 
        index % 2 === 0 ? 'ant-table-row-striped' : '';
    }

    return (
      <AntTable
        ref={ref}
        {...tableProps}
      />
    );
  }
);

Table.displayName = 'AntTable';

export { Table };
