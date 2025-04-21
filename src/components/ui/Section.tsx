
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "white" | "gray" | "orange" | "blue" | "blue-dark";
}

const Section = ({ id, className, children, background = "white" }: SectionProps) => {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-50",
    orange: "bg-brand-orange text-white",
    blue: "bg-brand-blue text-white",
    "blue-dark": "bg-brand-blue-dark text-white",
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24",
        bgColors[background],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
