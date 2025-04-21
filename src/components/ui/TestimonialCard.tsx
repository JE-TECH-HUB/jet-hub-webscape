
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-brand-blue-dark flex items-center justify-center text-white text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">"{testimonial}"</blockquote>
    </div>
  );
};

export default TestimonialCard;
