import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../../src/components/mui/Dialog';
import { Button } from '../../src/components/mui/Button';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Material-UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    showTitle: {
      control: { type: 'boolean' },
    },
    showActions: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Dialog Title',
    children: 'This is a simple dialog with title and content.',
  },
};

export const WithoutTitle: Story = {
  args: {
    open: true,
    showTitle: false,
    children: 'This dialog has no title.',
  },
};

export const WithoutActions: Story = {
  args: {
    open: true,
    title: 'No Actions Dialog',
    showActions: false,
    children: 'This dialog has no action buttons.',
  },
};

export const CustomActions: Story = {
  args: {
    open: true,
    title: 'Custom Actions',
    children: 'This dialog has custom action buttons.',
    actions: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outlined">Maybe</Button>
        <Button variant="contained" color="error">Delete</Button>
      </div>
    ),
  },
};

export const InteractiveDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Interactive Dialog"
          onConfirm={() => {
            alert('Confirmed!');
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        >
          <p>This is an interactive dialog. Click the buttons to interact.</p>
          <p>You can also click outside the dialog or press Escape to close it.</p>
        </Dialog>
      </div>
    );
  },
};

export const FormDialog: Story = {
  args: {
    open: true,
    title: 'User Information',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <div>
          <label>Name:</label>
          <input type="text" style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
        </div>
        <div>
          <label>Message:</label>
          <textarea style={{ width: '100%', padding: '8px', marginTop: '4px', minHeight: '80px' }} />
        </div>
      </div>
    ),
    confirmText: 'Submit',
    cancelText: 'Cancel',
  },
};
