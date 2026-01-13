import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white' | 'dark';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold transition-all duration-300 rounded-none transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-dark shadow-md border border-transparent", 
    dark: "bg-brand-dark text-white hover:bg-brand-primary shadow-md border border-transparent",
    white: "bg-white text-brand-dark hover:bg-brand-surface border border-brand-border shadow-sm",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white", 
    text: "text-brand-primary hover:text-brand-dark hover:bg-brand-surface/50 px-4 normal-case tracking-normal"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};