import type { Meta, StoryObj } from '@storybook/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/radix/Button';
import styles from '@/components/radix/Header.module.css';

const meta: Meta<typeof DropdownMenu.Root> = {
  title: 'radix/DropdownMenu',
  component: DropdownMenu.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.dropdownLabel}>
            My Account
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Billing
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Team
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Subscription
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Settings</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.dropdownLabel}>
            Settings
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>👤</span>
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>⚙️</span>
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>🔔</span>
            Notifications
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>🚪</span>
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" className={styles.avatarButton}>
          <div className={styles.avatar}>
            <div className={styles.avatarFallback}>A</div>
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5} align="end">
          <DropdownMenu.Label className={styles.dropdownLabel}>
            <div className={styles.userInfo}>
              <p className={styles.userName}>Ahmet Yılmaz</p>
              <p className={styles.userEmail}>ahmet@example.com</p>
            </div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Billing
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const ActionsMenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.dropdownLabel}>
            Actions
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>📝</span>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>📋</span>
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>🔗</span>
            Share
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem} style={{ color: '#dc2626' }}>
            <span style={{ marginRight: '8px' }}>🗑️</span>
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const NavigationMenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost">Navigation</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.dropdownLabel}>
            Navigate
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>🏠</span>
            Home
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>📊</span>
            Dashboard
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>📈</span>
            Analytics
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>⚙️</span>
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            <span style={{ marginRight: '8px' }}>❓</span>
            Help
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Menu with Disabled Items</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
          <DropdownMenu.Label className={styles.dropdownLabel}>
            Options
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem}>
            Available Option
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem} disabled>
            Disabled Option
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.dropdownItem}>
            Another Available Option
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownSeparator} />
          <DropdownMenu.Item className={styles.dropdownItem} disabled>
            Disabled Action
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};
