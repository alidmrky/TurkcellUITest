export interface FinancialAccount {
  id: string;
  accountNumber: string;
  accountHolder: string;
  balance: number;
  currency: string;
  transactionDate: string;
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  type: 'checking' | 'savings' | 'credit' | 'investment' | 'business';
  lastTransactionAmount?: number;
  branch?: string;
  manager?: string;
}

export const mockFinancialData: FinancialAccount[] = [
  {
    id: '1',
    accountNumber: 'TR1234567890123456789012',
    accountHolder: 'Ahmet Yılmaz',
    balance: 125000.50,
    currency: 'TRY',
    transactionDate: '2024-01-15',
    status: 'active',
    type: 'checking',
    lastTransactionAmount: 2500.00,
    branch: 'Kadıköy Şubesi',
    manager: 'Fatma Demir'
  },
  {
    id: '2',
    accountNumber: 'TR9876543210987654321098',
    accountHolder: 'Ayşe Kaya',
    balance: 87500.25,
    currency: 'TRY',
    transactionDate: '2024-01-14',
    status: 'active',
    type: 'savings',
    lastTransactionAmount: -1500.00,
    branch: 'Beşiktaş Şubesi',
    manager: 'Mehmet Özkan'
  },
  {
    id: '3',
    accountNumber: 'TR4567890123456789012345',
    accountHolder: 'Mehmet Demir',
    balance: -2500.00,
    currency: 'TRY',
    transactionDate: '2024-01-13',
    status: 'active',
    type: 'credit',
    lastTransactionAmount: 750.00,
    branch: 'Şişli Şubesi',
    manager: 'Zeynep Aktaş'
  },
  {
    id: '4',
    accountNumber: 'TR7890123456789012345678',
    accountHolder: 'Fatma Özkan',
    balance: 450000.75,
    currency: 'TRY',
    transactionDate: '2024-01-12',
    status: 'active',
    type: 'investment',
    lastTransactionAmount: 10000.00,
    branch: 'Levent Şubesi',
    manager: 'Ali Veli'
  },
  {
    id: '5',
    accountNumber: 'TR3210987654321098765432',
    accountHolder: 'Ali Veli',
    balance: 25000.00,
    currency: 'TRY',
    transactionDate: '2024-01-11',
    status: 'inactive',
    type: 'business',
    lastTransactionAmount: 0.00,
    branch: 'Beyoğlu Şubesi',
    manager: 'Selin Yıldız'
  },
  {
    id: '6',
    accountNumber: 'TR6543210987654321098765',
    accountHolder: 'Zeynep Aktaş',
    balance: 75000.00,
    currency: 'TRY',
    transactionDate: '2024-01-10',
    status: 'active',
    type: 'checking',
    lastTransactionAmount: -2000.00,
    branch: 'Kadıköy Şubesi',
    manager: 'Fatma Demir'
  },
  {
    id: '7',
    accountNumber: 'TR1472583691472583691472',
    accountHolder: 'Can Yılmaz',
    balance: 150000.00,
    currency: 'TRY',
    transactionDate: '2024-01-09',
    status: 'active',
    type: 'savings',
    lastTransactionAmount: 5000.00,
    branch: 'Beşiktaş Şubesi',
    manager: 'Mehmet Özkan'
  },
  {
    id: '8',
    accountNumber: 'TR9638527419638527419638',
    accountHolder: 'Elif Kaya',
    balance: -5000.00,
    currency: 'TRY',
    transactionDate: '2024-01-08',
    status: 'suspended',
    type: 'credit',
    lastTransactionAmount: 1000.00,
    branch: 'Şişli Şubesi',
    manager: 'Zeynep Aktaş'
  },
  {
    id: '9',
    accountNumber: 'TR7418529637418529637418',
    accountHolder: 'Burak Demir',
    balance: 300000.00,
    currency: 'TRY',
    transactionDate: '2024-01-07',
    status: 'active',
    type: 'investment',
    lastTransactionAmount: 15000.00,
    branch: 'Levent Şubesi',
    manager: 'Ali Veli'
  },
  {
    id: '10',
    accountNumber: 'TR8529637418529637418529',
    accountHolder: 'Selin Özkan',
    balance: 50000.00,
    currency: 'TRY',
    transactionDate: '2024-01-06',
    status: 'pending',
    type: 'business',
    lastTransactionAmount: 0.00,
    branch: 'Beyoğlu Şubesi',
    manager: 'Selin Yıldız'
  },
  {
    id: '11',
    accountNumber: 'TR1597534862159753486215',
    accountHolder: 'Okan Yılmaz',
    balance: 95000.50,
    currency: 'TRY',
    transactionDate: '2024-01-05',
    status: 'active',
    type: 'checking',
    lastTransactionAmount: 3000.00,
    branch: 'Kadıköy Şubesi',
    manager: 'Fatma Demir'
  },
  {
    id: '12',
    accountNumber: 'TR3579514862357951486235',
    accountHolder: 'Gül Aktaş',
    balance: 200000.00,
    currency: 'TRY',
    transactionDate: '2024-01-04',
    status: 'active',
    type: 'savings',
    lastTransactionAmount: 8000.00,
    branch: 'Beşiktaş Şubesi',
    manager: 'Mehmet Özkan'
  },
  {
    id: '13',
    accountNumber: 'TR4681357924681357924681',
    accountHolder: 'Deniz Kaya',
    balance: -1500.00,
    currency: 'TRY',
    transactionDate: '2024-01-03',
    status: 'active',
    type: 'credit',
    lastTransactionAmount: 500.00,
    branch: 'Şişli Şubesi',
    manager: 'Zeynep Aktaş'
  },
  {
    id: '14',
    accountNumber: 'TR5792468135792468135792',
    accountHolder: 'İrem Demir',
    balance: 600000.00,
    currency: 'TRY',
    transactionDate: '2024-01-02',
    status: 'active',
    type: 'investment',
    lastTransactionAmount: 25000.00,
    branch: 'Levent Şubesi',
    manager: 'Ali Veli'
  },
  {
    id: '15',
    accountNumber: 'TR6803579246803579246803',
    accountHolder: 'Kemal Özkan',
    balance: 75000.00,
    currency: 'TRY',
    transactionDate: '2024-01-01',
    status: 'active',
    type: 'business',
    lastTransactionAmount: 5000.00,
    branch: 'Beyoğlu Şubesi',
    manager: 'Selin Yıldız'
  },
  {
    id: '16',
    accountNumber: 'TR7914680357914680357914',
    accountHolder: 'Pınar Yılmaz',
    balance: 125000.00,
    currency: 'TRY',
    transactionDate: '2023-12-31',
    status: 'active',
    type: 'checking',
    lastTransactionAmount: -1000.00,
    branch: 'Kadıköy Şubesi',
    manager: 'Fatma Demir'
  },
  {
    id: '17',
    accountNumber: 'TR8025791468025791468025',
    accountHolder: 'Murat Aktaş',
    balance: 350000.00,
    currency: 'TRY',
    transactionDate: '2023-12-30',
    status: 'active',
    type: 'savings',
    lastTransactionAmount: 12000.00,
    branch: 'Beşiktaş Şubesi',
    manager: 'Mehmet Özkan'
  },
  {
    id: '18',
    accountNumber: 'TR9136802579136802579136',
    accountHolder: 'Sibel Kaya',
    balance: -3000.00,
    currency: 'TRY',
    transactionDate: '2023-12-29',
    status: 'active',
    type: 'credit',
    lastTransactionAmount: 800.00,
    branch: 'Şişli Şubesi',
    manager: 'Zeynep Aktaş'
  },
  {
    id: '19',
    accountNumber: 'TR0247913680247913680247',
    accountHolder: 'Tolga Demir',
    balance: 800000.00,
    currency: 'TRY',
    transactionDate: '2023-12-28',
    status: 'active',
    type: 'investment',
    lastTransactionAmount: 30000.00,
    branch: 'Levent Şubesi',
    manager: 'Ali Veli'
  },
  {
    id: '20',
    accountNumber: 'TR1358024691358024691358',
    accountHolder: 'Nur Özkan',
    balance: 100000.00,
    currency: 'TRY',
    transactionDate: '2023-12-27',
    status: 'active',
    type: 'business',
    lastTransactionAmount: 7000.00,
    branch: 'Beyoğlu Şubesi',
    manager: 'Selin Yıldız'
  }
];

// Ek yardımcı fonksiyonlar
export const getAccountsByStatus = (status: FinancialAccount['status']) => {
  return mockFinancialData.filter(account => account.status === status);
};

export const getAccountsByType = (type: FinancialAccount['type']) => {
  return mockFinancialData.filter(account => account.type === type);
};

export const getAccountsByBranch = (branch: string) => {
  return mockFinancialData.filter(account => account.branch === branch);
};

export const getTotalBalance = () => {
  return mockFinancialData.reduce((total, account) => total + account.balance, 0);
};

export const getActiveAccounts = () => {
  return mockFinancialData.filter(account => account.status === 'active');
};

export const getInactiveAccounts = () => {
  return mockFinancialData.filter(account => account.status === 'inactive');
};

export const getSuspendedAccounts = () => {
  return mockFinancialData.filter(account => account.status === 'suspended');
};

export const getPendingAccounts = () => {
  return mockFinancialData.filter(account => account.status === 'pending');
};
