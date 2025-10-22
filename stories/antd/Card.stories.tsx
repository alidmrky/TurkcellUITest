import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../src/components/antd/Card';
import { Button } from '../../src/components/antd/Button';

const meta: Meta<typeof Card> = {
  title: 'Ant Design/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    hoverable: {
      control: { type: 'boolean' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the content of the card.',
  },
};

export const WithExtra: Story = {
  args: {
    title: 'Card with Extra',
    extra: <Button type="link">More</Button>,
    children: 'This card has an extra action button in the header.',
  },
};

export const WithCover: Story = {
  args: {
    title: 'Card with Cover',
    cover: (
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
    ),
    children: 'This card has a cover image.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    actions: [
      <Button key="edit" type="link">Edit</Button>,
      <Button key="delete" type="link" danger>Delete</Button>,
    ],
    children: 'This card has action buttons at the bottom.',
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    children: 'This content will not be visible while loading.',
  },
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: 'Hover over this card to see the effect.',
  },
};

export const NoBorder: Story = {
  args: {
    title: 'Card without Border',
    bordered: false,
    children: 'This card has no border.',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Card',
    size: 'small',
    children: 'This is a small card.',
  },
};
