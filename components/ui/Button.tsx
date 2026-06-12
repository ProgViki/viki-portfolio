import { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
      inline-flex
      items-center
      justify-center
      rounded-2xl
      px-7
      py-4
      font-medium
      text-white
      bg-gradient-to-r
      from-sky-500
      to-emerald-500
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
      shadow-sky-500/20
      ${className}
    `}
    >
      {children}
    </button>
  );
}