import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  variant?: 'default' | 'outlined' | 'filled';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'default', size = 'middle', variant = 'default', ...props }, ref) => {
    return (
      <AntButton
        ref={ref}
        type={type}
        size={size}
        {...props}
      />
    );
  }
);

Button.displayName = 'AntButton';

export { Button };
