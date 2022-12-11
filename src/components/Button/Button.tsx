import React, {HTMLAttributes, ReactNode} from 'react';
import {ButtonDefaultStyle} from './Button.default.style';

type Variant = 'text' | 'outlined' | 'contained';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${ButtonDefaultStyle.variant[variant]} ${ButtonDefaultStyle.size[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
