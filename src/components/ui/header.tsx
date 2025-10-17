import React from 'react';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Separator } from './separator';

export interface HeaderProps {
  logo?: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  showLogin?: boolean;
  showUserMenu?: boolean;
  navigation?: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  user,
  showLogin = false,
  showUserMenu = false,
  navigation = [],
  className = '',
}) => {
  return (
    <header className={`flex items-center justify-between px-6 py-4 bg-white border-b ${className}`}>
      {/* Logo */}
      <div className="flex items-center space-x-4">
        {logo || (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Logo</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      {navigation.length > 0 && (
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {showLogin && !user && (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Giriş Yap
            </Button>
            <Button size="sm">
              Kayıt Ol
            </Button>
          </div>
        )}

        {showUserMenu && user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profil
              </DropdownMenuItem>
              <DropdownMenuItem>
                Ayarlar
              </DropdownMenuItem>
              <DropdownMenuItem>
                Faturalar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Çıkış Yap
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};
