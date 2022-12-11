import React, {HTMLAttributes, ReactNode} from 'react';

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
  const style = [
    'focus:ring-4',
    'focus:ring-gray-200',
    'dark:focus:ring-gray-700',
  ];
  if (variant === 'contained') {
    if (!className.includes('bg')) {
      style.push(
        ...[
          'bg-gray-50',
          `hover:bg-gray-100`,
          `dark:bg-gray-600`,
          `dark:hover:bg-gray-700`,
          'text-black',
          'dark:text-white',
        ]
      );
    }
  } else if (variant === 'outlined') {
    style.push(
      ...[
        'border',
        'border-gray-200',
        `hover:border-gray-300`,
        `dark:border-gray-600`,
        `dark:hover:border-gray-700`,
        'text-black',
      ]
    );
  } else if (variant === 'text') {
    style.push(...[]);
  }

  if (size === 'medium') {
    style.push(...['py-2.5', 'px-5', 'text-sm', 'font-medium']);
  } else if (size === 'small') {
    style.push(...['py-2', 'px-3', 'text-sm', 'font-medium']);
  } else if (size === 'large') {
    style.push(...['py-3', 'px-5', 'text-base', 'font-medium']);
  }

  className = className.concat(` ${style.join(' ')}`);
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
