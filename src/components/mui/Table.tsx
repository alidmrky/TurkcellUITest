import React, { useState } from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  Checkbox,
  Chip,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  TableProps,
  TableContainerProps,
} from '@mui/material';
import {
  Search,
  FilterList,
  MoreVert,
} from '@mui/icons-material';
import { FinancialAccount } from '@/src/data/mockFinancialData';

interface DataTableProps {
  data: FinancialAccount[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableFiltering?: boolean;
  enableSelection?: boolean;
  striped?: boolean;
  dense?: boolean;
  searchPlaceholder?: string;
  pageSize?: number;
}

type SortDirection = 'asc' | 'desc';

interface SortConfig {
  key: keyof FinancialAccount;
  direction: SortDirection;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  enableSorting = true,
  enablePagination = true,
  enableFiltering = true,
  enableSelection = false,
  striped = false,
  dense = false,
  searchPlaceholder = 'Search...',
  pageSize = 10,
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  // Filter data based on search term
  const filteredData = React.useMemo(() => {
    if (!searchTerm) return data;
    
    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = React.useMemo(() => {
    if (!enablePagination) return sortedData;
    
    const startIndex = page * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, page, rowsPerPage, enablePagination]);

  const handleSort = (key: keyof FinancialAccount) => {
    if (!enableSorting) return;
    
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = paginatedData.map((item) => item.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    if (!enableSelection) return;
    
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(amount);
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

  return (
    <Box sx={{ width: '100%' }}>
      {/* Search Bar */}
      {enableFiltering && (
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <TextField
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 300 }}
          />
        </Box>
      )}

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <MuiTable 
          stickyHeader
          size={dense ? 'small' : 'medium'}
          sx={{ 
            '& .MuiTableRow-root:nth-of-type(even)': striped ? {
              backgroundColor: 'action.hover',
            } : {},
          }}
        >
          <TableHead>
            <TableRow>
              {enableSelection && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < paginatedData.length}
                    checked={paginatedData.length > 0 && selected.length === paginatedData.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
              )}
              <TableCell>
                {enableSorting ? (
                  <TableSortLabel
                    active={sortConfig?.key === 'accountNumber'}
                    direction={sortConfig?.key === 'accountNumber' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('accountNumber')}
                  >
                    Account Number
                  </TableSortLabel>
                ) : (
                  'Account Number'
                )}
              </TableCell>
              <TableCell>
                {enableSorting ? (
                  <TableSortLabel
                    active={sortConfig?.key === 'accountHolder'}
                    direction={sortConfig?.key === 'accountHolder' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('accountHolder')}
                  >
                    Account Holder
                  </TableSortLabel>
                ) : (
                  'Account Holder'
                )}
              </TableCell>
              <TableCell align="right">
                {enableSorting ? (
                  <TableSortLabel
                    active={sortConfig?.key === 'balance'}
                    direction={sortConfig?.key === 'balance' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('balance')}
                  >
                    Balance
                  </TableSortLabel>
                ) : (
                  'Balance'
                )}
              </TableCell>
              <TableCell>
                {enableSorting ? (
                  <TableSortLabel
                    active={sortConfig?.key === 'status'}
                    direction={sortConfig?.key === 'status' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('status')}
                  >
                    Status
                  </TableSortLabel>
                ) : (
                  'Status'
                )}
              </TableCell>
              <TableCell>
                {enableSorting ? (
                  <TableSortLabel
                    active={sortConfig?.key === 'type'}
                    direction={sortConfig?.key === 'type' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('type')}
                  >
                    Type
                  </TableSortLabel>
                ) : (
                  'Type'
                )}
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                  key={row.id}
                >
                  {enableSelection && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                  )}
                  <TableCell component="th" id={labelId} scope="row">
                    {row.accountNumber}
                  </TableCell>
                  <TableCell>{row.accountHolder}</TableCell>
                  <TableCell align="right">
                    <Typography
                      color={row.balance >= 0 ? 'success.main' : 'error.main'}
                      fontWeight="medium"
                    >
                      {formatCurrency(row.balance)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      color={getStatusColor(row.status) as any}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={enableSelection ? 7 : 6} align="center">
                  <Typography variant="body2" color="text.secondary">
                    No results found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {/* Pagination */}
      {enablePagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Box>
  );
};
