import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  AppBarProps,
  ToolbarProps
} from '@mui/material';
import {
  AccountCircle,
  Menu as MenuIcon,
  Notifications,
  Search
} from '@mui/icons-material';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface HeaderProps extends AppBarProps {
  logo?: React.ReactNode;
  title?: string;
  showLogin?: boolean;
  showUserMenu?: boolean;
  showNavigation?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  user?: User;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
  onUserMenuClick?: (action: string) => void;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({
    logo,
    title = 'App',
    showLogin = false,
    showUserMenu = false,
    showNavigation = false,
    showSearch = false,
    showNotifications = false,
    user,
    navigationItems = [],
    onLogin,
    onSignup,
    onLogout,
    onUserMenuClick,
    ...props
  }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
      setAnchorEl(null);
    };

    const handleUserAction = (action: string) => {
      onUserMenuClick?.(action);
      handleUserMenuClose();
    };

    return (
      <AppBar ref={ref} position="static" {...props}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            {logo}
          </Box>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          {/* Navigation */}
          {showNavigation && navigationItems.length > 0 && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  href={item.href}
                  sx={{ mx: 1 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Search */}
          {showSearch && (
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <Search />
            </IconButton>
          )}

          {/* Notifications */}
          {showNotifications && (
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <Notifications />
            </IconButton>
          )}

          {/* User Menu */}
          {showUserMenu && user ? (
            <>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleUserMenuClick}
                color="inherit"
              >
                {user.avatar ? (
                  <Avatar src={user.avatar} sx={{ width: 32, height: 32 }} />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={() => handleUserAction('profile')}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => handleUserAction('settings')}>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => handleUserAction('logout')}>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : showLogin ? (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit" onClick={onLogin}>
                Login
              </Button>
              <Button color="inherit" variant="outlined" onClick={onSignup}>
                Sign Up
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
);

Header.displayName = 'MuiHeader';

export { Header };
