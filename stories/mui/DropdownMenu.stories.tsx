import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../../src/components/mui/DropdownMenu';
import { Button } from '../../src/components/mui/Button';
import { useState } from 'react';
import {
  Person,
  Settings,
  ExitToApp,
  Edit,
  Delete,
  MoreVert,
  Add,
  Share
} from '@mui/icons-material';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Material-UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Profile', icon: <Person />, onClick: () => alert('Profile clicked') },
      { label: 'Settings', icon: <Settings />, onClick: () => alert('Settings clicked') },
      { label: 'Logout', icon: <ExitToApp />, onClick: () => alert('Logout clicked') },
    ],
    trigger: <Button>Open Menu</Button>,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Add Item', icon: <Add />, onClick: () => alert('Add clicked') },
      { label: 'Edit', icon: <Edit />, onClick: () => alert('Edit clicked') },
      { label: 'Share', icon: <Share />, onClick: () => alert('Share clicked') },
      { label: 'Delete', icon: <Delete />, onClick: () => alert('Delete clicked') },
    ],
    trigger: <Button variant="outlined">Actions</Button>,
  },
};

export const UserMenu: Story = {
  args: {
    items: [
      { label: 'My Profile', icon: <Person />, onClick: () => alert('Profile clicked') },
      { label: 'Account Settings', icon: <Settings />, onClick: () => alert('Settings clicked') },
      { divider: true },
      { label: 'Sign Out', icon: <ExitToApp />, onClick: () => alert('Sign out clicked') },
    ],
    trigger: (
      <Button variant="contained" startIcon={<Person />>
        User Menu
      </Button>
    ),
  },
};

export const ActionsMenu: Story = {
  args: {
    items: [
      { label: 'Create New', icon: <Add />, onClick: () => alert('Create clicked') },
      { label: 'Edit Selected', icon: <Edit />, onClick: () => alert('Edit clicked') },
      { label: 'Share', icon: <Share />, onClick: () => alert('Share clicked') },
      { divider: true },
      { label: 'Delete', icon: <Delete />, onClick: () => alert('Delete clicked'), disabled: true },
    ],
    trigger: (
      <Button variant="outlined" endIcon={<MoreVert />}>
        More Actions
      </Button>
    ),
  },
};

export const NavigationMenu: Story = {
  args: {
    items: [
      { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
      { label: 'Analytics', onClick: () => alert('Analytics clicked') },
      { label: 'Reports', onClick: () => alert('Reports clicked') },
      { divider: true },
      { label: 'Settings', icon: <Settings />, onClick: () => alert('Settings clicked') },
      { label: 'Help & Support', onClick: () => alert('Help clicked') },
    ],
    trigger: <Button>Navigation</Button>,
  },
};

export const DisabledItems: Story = {
  args: {
    items: [
      { label: 'Available Action', onClick: () => alert('Available clicked') },
      { label: 'Disabled Action', disabled: true, onClick: () => alert('This should not show') },
      { label: 'Another Available', onClick: () => alert('Another clicked') },
      { divider: true },
      { label: 'Disabled at Bottom', disabled: true, onClick: () => alert('This should not show') },
    ],
    trigger: <Button variant="contained">Mixed Menu</Button>,
  },
};

export const InteractiveMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <div>
        <Button onClick={handleClick}>
          Interactive Menu
        </Button>
        <DropdownMenu
          items={[
            { label: 'Option 1', onClick: () => alert('Option 1 clicked') },
            { label: 'Option 2', onClick: () => alert('Option 2 clicked') },
            { label: 'Option 3', onClick: () => alert('Option 3 clicked') },
          ]}
          anchorEl={anchorEl}
          onClose={handleClose}
        />
      </div>
    );
  },
};
