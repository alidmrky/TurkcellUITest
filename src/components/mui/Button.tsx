import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', size = 'medium', color = 'primary', ...props }, ref) => {
    return (
      <MuiButton
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        {...props}
      />
    );
  }
);

Button.displayName = 'MuiButton';

export { Button };
