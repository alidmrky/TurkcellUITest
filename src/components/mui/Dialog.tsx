import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps as MuiDialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
  Button
} from '@mui/material';

interface DialogProps extends Omit<MuiDialogProps, 'title'> {
  title?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  showTitle?: boolean;
  showActions?: boolean;
  onClose?: () => void;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({
    title,
    content,
    actions,
    showTitle = true,
    showActions = true,
    onClose,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    children,
    ...props
  }, ref) => {
    const handleClose = () => {
      onClose?.();
    };

    const handleConfirm = () => {
      onConfirm?.();
      handleClose();
    };

    const handleCancel = () => {
      onCancel?.();
      handleClose();
    };

    return (
      <MuiDialog ref={ref} onClose={handleClose} {...props}>
        {showTitle && title && (
          <DialogTitle>
            {title}
          </DialogTitle>
        )}
        <DialogContent>
          {content || children}
        </DialogContent>
        {showActions && (
          <DialogActions>
            {actions || (
              <>
                <Button onClick={handleCancel} color="secondary">
                  {cancelText}
                </Button>
                <Button onClick={handleConfirm} variant="contained">
                  {confirmText}
                </Button>
              </>
            )}
          </DialogActions>
        )}
      </MuiDialog>
    );
  }
);

Dialog.displayName = 'MuiDialog';

export { Dialog };
