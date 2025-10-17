import React from 'react';
import {
  DataGrid as MuiDataGrid,
  GridColDef,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridRowSelectionModel,
  GridRowParams,
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import {
  Box,
  Chip,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  MoreVert,
  Visibility,
  Edit,
  Delete,
  AccountBalance,
  TrendingUp,
  CreditCard,
  Business,
  Savings,
} from '@mui/icons-material';
import { FinancialAccount } from '@/src/data/mockFinancialData';

interface DataGridProps {
  data: FinancialAccount[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableFiltering?: boolean;
  enableColumnVisibility?: boolean;
  enableSelection?: boolean;
  enableExport?: boolean;
  enableDensity?: boolean;
  pageSize?: number;
  height?: number;
  striped?: boolean;
  onRowClick?: (params: GridRowParams) => void;
  onSelectionChange?: (selectionModel: GridRowSelectionModel) => void;
}

const getAccountTypeIcon = (type: string) => {
  switch (type) {
    case 'checking':
      return <AccountBalance />;
    case 'savings':
      return <Savings />;
    case 'credit':
      return <CreditCard />;
    case 'investment':
      return <TrendingUp />;
    case 'business':
      return <Business />;
    default:
      return <AccountBalance />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'success';
    case 'inactive':
      return 'default';
    case 'suspended':
      return 'error';
    case 'pending':
      return 'warning';
    default:
      return 'default';
  }
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(amount);
};

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

export const DataGrid: React.FC<DataGridProps> = ({
  data,
  enableSorting = true,
  enablePagination = true,
  enableFiltering = true,
  enableColumnVisibility = true,
  enableSelection = false,
  enableExport = true,
  enableDensity = true,
  pageSize = 10,
  height = 400,
  striped = false,
  onRowClick,
  onSelectionChange,
}) => {
  const [selectionModel, setSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const handleSelectionChange = (newSelectionModel: GridRowSelectionModel) => {
    setSelectionModel(newSelectionModel);
    onSelectionChange?.(newSelectionModel);
  };

  const handleRowClick = (params: GridRowParams) => {
    onRowClick?.(params);
  };

  const columns: GridColDef[] = [
    {
      field: 'accountNumber',
      headerName: 'Account Number',
      width: 200,
      sortable: enableSorting,
      filterable: enableFiltering,
    },
    {
      field: 'accountHolder',
      headerName: 'Account Holder',
      width: 180,
      sortable: enableSorting,
      filterable: enableFiltering,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      width: 150,
      sortable: enableSorting,
      filterable: enableFiltering,
      renderCell: (params) => (
        <Typography
          color={params.value >= 0 ? 'success.main' : 'error.main'}
          fontWeight="medium"
        >
          {formatCurrency(params.value)}
        </Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      sortable: enableSorting,
      filterable: enableFiltering,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={getStatusColor(params.value) as any}
          size="small"
        />
      ),
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 120,
      sortable: enableSorting,
      filterable: enableFiltering,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {getAccountTypeIcon(params.value)}
          <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
            {params.value}
          </Typography>
        </Box>
      ),
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 100,
      sortable: enableSorting,
      filterable: enableFiltering,
    },
    {
      field: 'transactionDate',
      headerName: 'Last Transaction',
      width: 150,
      sortable: enableSorting,
      filterable: enableFiltering,
      renderCell: (params) => (
        <Typography variant="body2">
          {new Date(params.value).toLocaleDateString('tr-TR')}
        </Typography>
      ),
    },
    {
      field: 'branch',
      headerName: 'Branch',
      width: 150,
      sortable: enableSorting,
      filterable: enableFiltering,
    },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 150,
      sortable: enableSorting,
      filterable: enableFiltering,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Visibility />}
          label="View"
          onClick={() => console.log('View', params.id)}
        />,
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          onClick={() => console.log('Edit', params.id)}
        />,
        <GridActionsCellItem
          icon={<Delete />}
          label="Delete"
          onClick={() => console.log('Delete', params.id)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height, width: '100%' }}>
      <MuiDataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection={enableSelection}
        disableRowSelectionOnClick={!enableSelection}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleSelectionChange}
        onRowClick={handleRowClick}
        slots={{
          toolbar: enableColumnVisibility || enableFiltering || enableDensity || enableExport ? CustomToolbar : undefined,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: enableFiltering,
          },
        }}
        sx={{
          '& .MuiDataGrid-row:nth-of-type(even)': striped ? {
            backgroundColor: 'action.hover',
          } : {},
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'action.selected',
          },
        }}
        disableColumnMenu={!enableColumnVisibility}
        disableColumnFilter={!enableFiltering}
        disableColumnSelector={!enableColumnVisibility}
        disableDensitySelector={!enableDensity}
        disableExport={!enableExport}
        sortingOrder={enableSorting ? ['asc', 'desc'] : []}
        disableSorting={!enableSorting}
        density="comfortable"
        autoHeight={false}
      />
    </Box>
  );
};
