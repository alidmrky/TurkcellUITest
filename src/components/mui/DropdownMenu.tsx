import React from 'react';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuProps
} from '@mui/material';
import {
  Person,
  Settings,
  ExitToApp,
  Edit,
  Delete,
  MoreVert,
  Add,
  Share
} from '@mui/icons-material';

interface DropdownMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

interface DropdownMenuProps extends Omit<MenuProps, 'anchorEl'> {
  items: DropdownMenuItem[];
  trigger?: React.ReactNode;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ items, trigger, anchorEl, onClose, ...props }, ref) => {
    const [localAnchorEl, setLocalAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl || localAnchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setLocalAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setLocalAnchorEl(null);
      onClose?.();
    };

    const handleItemClick = (item: DropdownMenuItem) => {
      item.onClick?.();
      handleClose();
    };

    return (
      <>
        {trigger && (
          <div onClick={handleClick}>
            {trigger}
          </div>
        )}
        <Menu
          ref={ref}
          anchorEl={anchorEl || localAnchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider && <Divider />}
              <MenuItem
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.icon && (
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText>{item.label}</ListItemText>
              </MenuItem>
            </React.Fragment>
          ))}
        </Menu>
      </>
    );
  }
);

DropdownMenu.displayName = 'MuiDropdownMenu';

export { DropdownMenu };
