
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { ArrowRight, Book, Briefcase } from "lucide-react";

const HomePage = () => {
  const trainings = [
    {
      title: "Web Development",
      description: "Learn to build responsive websites and web applications.",
      icon: "/placeholder.svg",
    },
    {
      title: "UI/UX Design",
      description: "Master the art of creating beautiful user interfaces.",
      icon: "/placeholder.svg",
    },
    {
      title: "Data Analysis",
      description: "Transform data into actionable insights using modern tools.",
      icon: "/placeholder.svg",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Web Development Graduate",
      testimonial: "The training I received at JE Tech Hub was exceptional. The instructors were knowledgeable and the hands-on approach helped me secure a job immediately after completing my course.",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Design Student",
      testimonial: "JE Tech Hub has the best learning environment in Abuja. The facilities are top-notch and the curriculum is industry-relevant. I highly recommend their programs.",
    },
    {
      name: "Michael Ibrahim",
      role: "Gadget Repair Client",
      testimonial: "I thought my laptop was beyond repair, but the technicians at JE Tech Hub fixed it within 24 hours. Professional service at an affordable price!",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue-dark to-brand-blue py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 grid-rows-10 gap-1 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="bg-white rounded-sm"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Unlock Your Tech Potential with JE Tech Hub
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/80">
                We offer quality tech training, gadget sales, and repair services in Gwagwalada, Abuja. 
                Join us to transform your passion into expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-light text-white">
                  <Link to="/services#training">Register Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/services#gadgets">Shop Gadgets</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-1 rounded-lg shadow-2xl rotate-3 transform transition-transform hover:rotate-0">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Tech training at JE Tech Hub" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Gain industry-relevant skills through our comprehensive training programs, 
              designed to prepare you for the modern tech workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <div className="mb-4 bg-brand-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <img src={training.icon} alt={training.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{training.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{training.description}</p>
                <Button asChild variant="outline" className="group">
                  <Link to={`/services#${training.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-light">
              <Link to="/services#training" className="flex items-center">
                <Book className="mr-2 h-5 w-5" />
                View All Training Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gadgets & Repairs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-orange/20 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Gadget repair service" 
                  className="rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gadgets & Repair Services</h2>
              <p className="text-gray-600 mb-6">
                We offer quality tech gadgets at affordable prices. Our expert technicians also 
                provide fast and reliable repair services for all types of devices.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Laptops, smartphones, and accessories sales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Screen replacements and repairs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Data recovery and software fixes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Quick turnaround and warranty service</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue-dark">
                <Link to="/services#gadgets" className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore Our Gadgets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our students and clients about their experiences with JE Tech Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                className={index === 1 ? "md:transform md:translate-y-8" : ""}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link to="/about#testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Tech Journey?</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8 text-lg">
            Join JE Tech Hub today and take the first step towards a successful career in technology. 
            Our expert instructors and hands-on approach will help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
              <Link to="/services#training">Register for Training</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
