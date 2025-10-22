import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../../src/components/antd/Dialog';
import { Button } from '../../src/components/antd/Button';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Ant Design/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'number' },
    },
    centered: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Basic Dialog',
    description: 'This is a basic dialog with title and description.',
    children: 'Dialog content goes here.',
  },
};

export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Dialog with Trigger"
          description="This dialog is opened by clicking the button."
        >
          <p>This is the dialog content.</p>
          <p>You can close it by clicking OK, Cancel, or the X button.</p>
        </Dialog>
      </>
    );
  },
};

export const LargeDialog: Story = {
  args: {
    open: true,
    title: 'Large Dialog',
    width: 800,
    children: (
      <div>
        <p>This is a large dialog with custom width.</p>
        <p>It can contain more content and has a wider layout.</p>
        <div style={{ height: '200px', background: '#f5f5f5', padding: '16px', margin: '16px 0' }}>
          <p>This is a content area with background color.</p>
        </div>
      </div>
    ),
  },
};

export const CenteredDialog: Story = {
  args: {
    open: true,
    title: 'Centered Dialog',
    centered: true,
    children: 'This dialog is centered on the screen.',
  },
};

export const NoTitle: Story = {
  args: {
    open: true,
    children: 'This dialog has no title.',
  },
};

export const CustomFooter: Story = {
  args: {
    open: true,
    title: 'Dialog with Custom Footer',
    children: 'This dialog has custom footer buttons.',
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Button>Custom Button 1</Button>
        <Button type="primary">Custom Button 2</Button>
      </div>
    ),
  },
};

export const ConfirmDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button type="primary" danger onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Confirm Delete"
          description="Are you sure you want to delete this item? This action cannot be undone."
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ danger: true }}
        >
          <p>This action will permanently delete the selected item.</p>
        </Dialog>
      </>
    );
  },
};
