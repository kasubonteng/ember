import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import React from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "back";
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  variant = "default",
  className = "",
}) => {
  const Arrow = variant === "back" ? ArrowLeft : ArrowRight;

  return (
    <Link href={href}>
      <span
        className={`group inline-flex items-center font-medium text-primary transition-colors duration-300 hover:text-primary ${className}`}
      >
        {variant === "back" && (
          <span className="relative mr-1 overflow-hidden">
            <Arrow className="h-5 w-0 transform transition-all duration-300 ease-out group-hover:w-5" />
            <Arrow className="absolute right-0 top-0 h-5 w-5 translate-x-full transform transition-all duration-300 ease-out group-hover:translate-x-0" />
          </span>
        )}
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        {variant === "default" && (
          <span className="relative ml-1 overflow-hidden">
            <Arrow className="h-5 w-0 transform transition-all duration-300 ease-out group-hover:w-5" />
            <Arrow className="absolute left-0 top-0 h-5 w-5 -translate-x-full transform transition-all duration-300 ease-out group-hover:translate-x-0" />
          </span>
        )}
      </span>
    </Link>
  );
};

export default CustomLink;
