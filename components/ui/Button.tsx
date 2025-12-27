
import React from 'react';
import { cn } from '../../utils/cn';

// Fix: Explicitly defined className and children in ButtonProps to resolve destructuring errors
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button = React.memo(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-[#002B5B] text-white hover:opacity-90 shadow-lg shadow-[#002B5B]/10',
    secondary: 'bg-[#F7941D] text-white hover:opacity-90 shadow-lg shadow-[#F7941D]/10',
    outline: 'bg-white text-[#002B5B] border border-gray-200 hover:bg-gray-50 shadow-sm',
    ghost: 'bg-transparent text-gray-500 hover:text-[#002B5B] hover:bg-gray-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <button
      className={cn(
        'rounded-full font-black flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';
