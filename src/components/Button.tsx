import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => (
  <button
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D9D9D9] hover:bg-gray-50 duration-200 ease-out active:bg-gray-100 text-[#4D4D4D] ${className}`}
    {...props}
  >
    {leftIcon && <span>{leftIcon}</span>}
    {children}
    {rightIcon && <span>{rightIcon}</span>}
  </button>
);

export default Button;
