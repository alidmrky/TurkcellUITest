import React from 'react';
import { Dropdown as AntDropdown, DropdownProps as AntDropdownProps, MenuProps } from 'antd';

interface DropdownMenuProps extends Omit<AntDropdownProps, 'menu'> {
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  items?: MenuProps['items'];
  children?: React.ReactNode;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ 
    trigger = ['click'], 
    items = [], 
    children,
    ...props 
  }, ref) => {
    const menuProps: MenuProps = {
      items,
    };

    return (
      <AntDropdown
        ref={ref}
        trigger={trigger}
        menu={menuProps}
        {...props}
      >
        {children}
      </AntDropdown>
    );
  }
);

DropdownMenu.displayName = 'AntDropdownMenu';

export { DropdownMenu };
