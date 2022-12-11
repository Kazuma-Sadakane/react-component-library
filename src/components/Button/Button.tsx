import React, {HTMLAttributes, ReactNode} from 'react';

type Variant = 'text' | 'outlined' | 'contained';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button button-variant-${variant} button-size-${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
