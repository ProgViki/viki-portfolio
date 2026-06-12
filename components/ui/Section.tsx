import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        py-24
        lg:py-36
        ${className}
      `}
    >
      {children}
    </section>
  );
}