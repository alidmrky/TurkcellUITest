import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../src/components/mui/Card';
import { Button } from '../../src/components/mui/Button';

const meta: Meta<typeof Card> = {
  title: 'Material-UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showHeader: {
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
    children: 'This is a simple card with some content.',
  },
};

export const WithHeader: Story = {
  args: {
    showHeader: true,
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: 'This card has a header with title and subtitle.',
  },
};

export const WithActions: Story = {
  args: {
    showHeader: true,
    showActions: true,
    title: 'Card with Actions',
    children: 'This card includes action buttons.',
    actions: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">Save</Button>
      </div>
    ),
  },
};

export const CompleteCard: Story = {
  args: {
    showHeader: true,
    showActions: true,
    title: 'Complete Card',
    subtitle: 'With all features',
    children: 'This is a complete card with header, content, and actions.',
    actions: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="small" variant="outlined">Edit</Button>
        <Button size="small" variant="contained">Save</Button>
      </div>
    ),
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card style={{ width: '300px' }}>
        <h3>Simple Card</h3>
        <p>This is a simple card without header or actions.</p>
      </Card>
      <Card 
        style={{ width: '300px' }}
        showHeader={true}
        title="Featured Card"
        subtitle="With header"
      >
        <p>This card has a header section.</p>
      </Card>
      <Card 
        style={{ width: '300px' }}
        showHeader={true}
        showActions={true}
        title="Action Card"
        subtitle="With buttons"
        actions={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="small">Cancel</Button>
            <Button size="small" variant="contained">OK</Button>
          </div>
        }
      >
        <p>This card includes action buttons.</p>
      </Card>
    </div>
  ),
};
