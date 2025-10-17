import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { Button } from './Button';
import styles from './Header.module.css';

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
    <header className={`${styles.header} ${className}`}>
      {/* Logo */}
      <div className={styles.logoSection}>
        {logo || (
          <div className={styles.defaultLogo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>L</span>
            </div>
            <span className={styles.logoLabel}>Logo</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      {navigation.length > 0 && (
        <nav className={styles.navigation}>
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Right side actions */}
      <div className={styles.actions}>
        {showLogin && !user && (
          <div className={styles.loginButtons}>
            <Button variant="ghost" size="sm">
              Giriş Yap
            </Button>
            <Button size="sm">
              Kayıt Ol
            </Button>
          </div>
        )}

        {showUserMenu && user && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost" className={styles.avatarButton}>
                <Avatar.Root className={styles.avatar}>
                  <Avatar.Image 
                    src={user.avatar} 
                    alt={user.name}
                    className={styles.avatarImage}
                  />
                  <Avatar.Fallback className={styles.avatarFallback}>
                    {user.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
                <DropdownMenu.Label className={styles.dropdownLabel}>
                  <div className={styles.userInfo}>
                    <p className={styles.userName}>{user.name}</p>
                    <p className={styles.userEmail}>{user.email}</p>
                  </div>
                </DropdownMenu.Label>
                <DropdownMenu.Separator className={styles.dropdownSeparator} />
                <DropdownMenu.Item className={styles.dropdownItem}>
                  Profil
                </DropdownMenu.Item>
                <DropdownMenu.Item className={styles.dropdownItem}>
                  Ayarlar
                </DropdownMenu.Item>
                <DropdownMenu.Item className={styles.dropdownItem}>
                  Faturalar
                </DropdownMenu.Item>
                <DropdownMenu.Separator className={styles.dropdownSeparator} />
                <DropdownMenu.Item className={styles.dropdownItem}>
                  Çıkış Yap
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        )}
      </div>
    </header>
  );
};
