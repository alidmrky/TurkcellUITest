import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/radix/Header';

const meta: Meta<typeof Header> = {
  title: 'radix/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showLogin: {
      control: { type: 'boolean' },
    },
    showUserMenu: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-bold text-gray-900">Financell</span>
      </div>
    ),
  },
};

export const WithLogin: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-bold text-gray-900">Financell</span>
      </div>
    ),
    showLogin: true,
  },
};

export const WithUserMenu: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-bold text-gray-900">Financell</span>
      </div>
    ),
    showUserMenu: true,
    user: {
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
  },
};

export const WithNavigation: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <span className="text-xl font-bold text-gray-900">Acme</span>
      </div>
    ),
    navigation: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Hizmetler', href: '/services' },
      { label: 'İletişim', href: '/contact' },
    ],
    showUserMenu: true,
    user: {
      name: 'Fatma Demir',
      email: 'fatma@example.com',
    },
  },
};

export const CompleteHeader: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <span className="text-xl font-bold text-gray-900">E-commerce</span>
      </div>
    ),
    navigation: [
      { label: 'Ürünler', href: '/products' },
      { label: 'Kategoriler', href: '/categories' },
      { label: 'Kampanyalar', href: '/campaigns' },
      { label: 'Destek', href: '/support' },
    ],
    showUserMenu: true,
    user: {
      name: 'Mehmet Kaya',
      email: 'mehmet@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    },
  },
};

export const MinimalHeader: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">M</span>
        </div>
        <span className="text-lg font-semibold text-gray-800">Minimal</span>
      </div>
    ),
    showLogin: true,
  },
};

export const DarkTheme: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-sm">D</span>
        </div>
        <span className="text-xl font-bold text-white">Dark App</span>
      </div>
    ),
    showUserMenu: true,
    user: {
      name: 'Ayşe Özkan',
      email: 'ayse@example.com',
    },
    className: 'bg-gray-900 border-gray-700',
  },
};

export const CorporateHeader: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <div>
          <span className="text-xl font-bold text-gray-900 block">Corporate</span>
          <span className="text-sm text-gray-500">Business Solutions</span>
        </div>
      </div>
    ),
    navigation: [
      { label: 'Çözümler', href: '/solutions' },
      { label: 'Ürünler', href: '/products' },
      { label: 'Müşteriler', href: '/customers' },
      { label: 'Kaynaklar', href: '/resources' },
      { label: 'İletişim', href: '/contact' },
    ],
    showUserMenu: true,
    user: {
      name: 'Dr. Ali Veli',
      email: 'ali.veli@corporate.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=32&h=32&fit=crop&crop=face',
    },
  },
};
