import React from 'react';
import { 
  Card as MuiCard, 
  CardContent, 
  CardActions, 
  CardHeader,
  CardProps as MuiCardProps,
  CardContentProps,
  CardActionsProps,
  CardHeaderProps
} from '@mui/material';

interface CardProps extends MuiCardProps {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  showHeader?: boolean;
  showActions?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    title, 
    subtitle, 
    content, 
    actions, 
    showHeader = false, 
    showActions = false,
    children,
    ...props 
  }, ref) => {
    return (
      <MuiCard ref={ref} {...props}>
        {showHeader && (title || subtitle) && (
          <CardHeader
            title={title}
            subheader={subtitle}
          />
        )}
        <CardContent>
          {content || children}
        </CardContent>
        {showActions && actions && (
          <CardActions>
            {actions}
          </CardActions>
        )}
      </MuiCard>
    );
  }
);

Card.displayName = 'MuiCard';

export { Card };
