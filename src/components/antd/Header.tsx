import React from 'react';
import { Layout, Menu, Button, Avatar, Space } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  title?: string;
  logo?: React.ReactNode;
  user?: {
    name?: string;
    avatar?: string;
  };
  menuItems?: Array<{
    key: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  onMenuClick?: (key: string) => void;
  onUserAction?: (action: string) => void;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ 
    title = 'Turkcell UI Test',
    logo,
    user,
    menuItems = [],
    onMenuClick,
    onUserAction,
    ...props 
  }, ref) => {
    const handleMenuClick = ({ key }: { key: string }) => {
      onMenuClick?.(key);
    };

    const handleUserAction = (action: string) => {
      onUserAction?.(action);
    };

    return (
      <AntHeader
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
        }}
        {...props}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {logo && <div style={{ marginRight: 16 }}>{logo}</div>}
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{title}</h1>
        </div>
        
        {menuItems.length > 0 && (
          <Menu
            mode="horizontal"
            items={menuItems}
            onClick={handleMenuClick}
            style={{ flex: 1, justifyContent: 'center', border: 'none' }}
          />
        )}
        
        {user && (
          <Space>
            <Avatar 
              src={user.avatar} 
              icon={<UserOutlined />}
              size="small"
            />
            <span>{user.name || 'User'}</span>
            <Button 
              type="text" 
              icon={<SettingOutlined />}
              onClick={() => handleUserAction('settings')}
            />
            <Button 
              type="text" 
              icon={<LogoutOutlined />}
              onClick={() => handleUserAction('logout')}
            />
          </Space>
        )}
      </AntHeader>
    );
  }
);

Header.displayName = 'AntHeader';

export { Header };
