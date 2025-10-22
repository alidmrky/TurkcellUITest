import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../../src/components/antd/DropdownMenu';
import { Button } from '../../src/components/antd/Button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Ant Design/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'check' },
      options: ['click', 'hover', 'contextMenu'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  {
    key: '1',
    label: 'Option 1',
  },
  {
    key: '2',
    label: 'Option 2',
  },
  {
    key: '3',
    label: 'Option 3',
  },
];

const menuItemsWithIcons = [
  {
    key: '1',
    label: 'Edit',
    icon: <span>✏️</span>,
  },
  {
    key: '2',
    label: 'Copy',
    icon: <span>📋</span>,
  },
  {
    key: '3',
    label: 'Delete',
    icon: <span>🗑️</span>,
    danger: true,
  },
];

const menuItemsWithDivider = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'Settings',
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: 'Logout',
    danger: true,
  },
];

export const Default: Story = {
  args: {
    items: menuItems,
    children: <Button>Click me</Button>,
  },
};

export const WithIcons: Story = {
  args: {
    items: menuItemsWithIcons,
    children: <Button>Actions</Button>,
  },
};

export const WithDivider: Story = {
  args: {
    items: menuItemsWithDivider,
    children: <Button>User Menu</Button>,
  },
};

export const HoverTrigger: Story = {
  args: {
    trigger: ['hover'],
    items: menuItems,
    children: <Button>Hover me</Button>,
  },
};

export const ContextMenu: Story = {
  args: {
    trigger: ['contextMenu'],
    items: menuItems,
    children: (
      <div style={{ 
        padding: '20px', 
        border: '1px dashed #ccc', 
        textAlign: 'center',
        cursor: 'context-menu'
      }}>
        Right-click me
      </div>
    ),
  },
};

export const MultipleTriggers: Story = {
  args: {
    trigger: ['click', 'hover'],
    items: menuItems,
    children: <Button>Click or Hover</Button>,
  },
};

export const DisabledItems: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Enabled Item',
      },
      {
        key: '2',
        label: 'Disabled Item',
        disabled: true,
      },
      {
        key: '3',
        label: 'Another Enabled Item',
      },
    ],
    children: <Button>Menu with Disabled Items</Button>,
  },
};

export const NestedMenu: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'File',
        children: [
          {
            key: '1-1',
            label: 'New',
          },
          {
            key: '1-2',
            label: 'Open',
          },
          {
            key: '1-3',
            label: 'Save',
          },
        ],
      },
      {
        key: '2',
        label: 'Edit',
        children: [
          {
            key: '2-1',
            label: 'Cut',
          },
          {
            key: '2-2',
            label: 'Copy',
          },
          {
            key: '2-3',
            label: 'Paste',
          },
        ],
      },
    ],
    children: <Button>Nested Menu</Button>,
  },
};
