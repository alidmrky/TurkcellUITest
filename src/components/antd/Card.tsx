import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';

interface CardProps extends AntCardProps {
  title?: string;
  extra?: React.ReactNode;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
  loading?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    title, 
    extra, 
    cover, 
    actions, 
    loading = false, 
    hoverable = false, 
    bordered = true,
    children,
    ...props 
  }, ref) => {
    return (
      <AntCard
        ref={ref}
        title={title}
        extra={extra}
        cover={cover}
        actions={actions}
        loading={loading}
        hoverable={hoverable}
        bordered={bordered}
        {...props}
      >
        {children}
      </AntCard>
    );
  }
);

Card.displayName = 'AntCard';

export { Card };
