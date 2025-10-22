import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

interface DialogProps extends Omit<AntModalProps, 'open'> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ 
    open = false, 
    onOpenChange, 
    title, 
    description,
    children,
    onCancel,
    onOk,
    ...props 
  }, ref) => {
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
      onCancel?.(e);
      onOpenChange?.(false);
    };

    const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
      onOk?.(e);
      onOpenChange?.(false);
    };

    return (
      <AntModal
        ref={ref}
        open={open}
        title={title}
        onCancel={handleCancel}
        onOk={handleOk}
        {...props}
      >
        {description && <p>{description}</p>}
        {children}
      </AntModal>
    );
  }
);

Dialog.displayName = 'AntDialog';

export { Dialog };
