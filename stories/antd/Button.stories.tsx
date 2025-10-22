import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/antd/Button';

const meta: Meta<typeof Button> = {
  title: 'Ant Design/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'default', 'dashed', 'text', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="primary" icon={<span>+</span>}>
        Add Item
      </Button>
      <Button type="default" icon={<span>→</span>}>
        Continue
      </Button>
      <Button type="dashed" icon={<span>📁</span>}>
        Upload
      </Button>
    </div>
  ),
};

export const Danger: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="primary" danger>Danger Primary</Button>
      <Button type="default" danger>Danger Default</Button>
      <Button type="text" danger>Danger Text</Button>
    </div>
  ),
};
