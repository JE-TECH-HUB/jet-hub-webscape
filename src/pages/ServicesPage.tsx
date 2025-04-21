
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage = () => {
  const trainingPrograms = [
    {
      id: "web-development",
      title: "Web Development",
      description: [
        "Our comprehensive Web Development program equips you with the skills to build modern, responsive websites and web applications. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks and databases, you'll learn the full stack of web development skills in demand by employers worldwide.",
        "The hands-on curriculum focuses on real-world projects, giving you a portfolio of work to showcase to potential employers. Our experienced instructors provide personalized guidance to ensure you grasp concepts thoroughly and can apply them independently."
      ],
      icon: "/placeholder.svg"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: [
        "Transform your creative vision into user-friendly digital experiences with our UI/UX Design program. You'll learn the principles of user interface and user experience design, including wireframing, prototyping, user research, and testing methodologies that drive engagement and satisfaction.",
        "Throughout the course, you'll work on real design briefs, building a professional portfolio that demonstrates your ability to create intuitive, accessible, and visually appealing interfaces. Our industry-experienced instructors will guide you through the latest design tools and techniques used by top companies."
      ],
      icon: "/placeholder.svg"
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: [
        "In our Data Analysis program, you'll develop the technical skills to transform raw data into actionable insights. You'll master tools like Excel, SQL, Python, and visualization platforms such as Power BI and Tableau to analyze complex datasets and communicate your findings effectively.",
        "The curriculum covers statistical analysis, data cleaning, visualization, and reporting techniques essential for making data-driven decisions. By completing real-world data projects, you'll be prepared to pursue opportunities in this high-demand field across various industries."
      ],
      icon: "/placeholder.svg"
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      description: [
        "Unleash your creative potential with our Graphics Design program, where you'll learn to create compelling visual content for print and digital media. Master industry-standard tools like Adobe Photoshop, Illustrator, and InDesign to design logos, marketing materials, social media graphics, and more.",
        "Our project-based approach ensures you'll graduate with a diverse portfolio showcasing your technical skills and creative vision. You'll receive personal feedback from experienced designers who will help you develop your unique style while adhering to professional design principles."
      ],
      icon: "/placeholder.svg"
    },
    {
      id: "forex-trading",
      title: "Forex Trading",
      description: [
        "Our Forex Trading program provides a comprehensive introduction to the foreign exchange market, teaching you how to analyze currency pairs, identify profitable trading opportunities, and manage risk effectively. You'll learn both technical and fundamental analysis methods to make informed trading decisions.",
        "The course covers trading psychology, strategy development, and portfolio management techniques essential for consistent success in forex markets. Our experienced traders will mentor you through live trading sessions, ensuring you develop the discipline and skills needed to navigate this dynamic market."
      ],
      icon: "/placeholder.svg"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: [
        "In our Video Editing program, you'll master the art and technology of post-production to create compelling visual stories. Learn to use professional software like Adobe Premiere Pro and After Effects to edit footage, add effects, optimize audio, and deliver polished videos for various platforms.",
        "The curriculum includes color grading, motion graphics, audio mixing, and storytelling techniques that will elevate your productions. Through hands-on projects, you'll build a diverse portfolio demonstrating your technical abilities and creative approach to video content creation."
      ],
      icon: "/placeholder.svg"
    }
  ];

  const gadgets = [
    {
      id: "laptop-hp",
      name: "HP ProBook",
      price: "₦350,000",
      description: "Core i5, 8GB RAM, 512GB SSD, Windows 11",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"
    },
    {
      id: "laptop-dell",
      name: "Dell Latitude",
      price: "₦420,000",
      description: "Core i7, 16GB RAM, 1TB SSD, Windows 11",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },
    {
      id: "smartphone-samsung",
      name: "Samsung Galaxy S22",
      price: "₦550,000",
      description: "8GB RAM, 256GB Storage, 108MP Camera",
      image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3"
    },
    {
      id: "accessories-headphones",
      name: "Sony Noise Cancelling Headphones",
      price: "₦95,000",
      description: "Wireless, 30hr Battery, Bluetooth 5.0",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    },
    {
      id: "accessories-keyboard",
      name: "Mechanical Gaming Keyboard",
      price: "₦35,000",
      description: "RGB Backlit, Blue Switches, Full Size",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212"
    },
    {
      id: "accessories-mouse",
      name: "Logitech Wireless Mouse",
      price: "₦15,000",
      description: "Ergonomic Design, Long Battery Life",
      image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3"
    }
  ];

  const repairServices = [
    {
      title: "Screen Replacement",
      description: "Expert replacement for cracked or damaged screens on laptops and smartphones.",
      price: "From ₦15,000"
    },
    {
      title: "Battery Replacement",
      description: "Restore your device's battery life with a high-quality replacement.",
      price: "From ₦8,000"
    },
    {
      title: "Data Recovery",
      description: "Professional recovery of lost or deleted data from hard drives and memory cards.",
      price: "From ₦20,000"
    },
    {
      title: "Virus Removal",
      description: "Comprehensive malware removal and system optimization.",
      price: "From ₦10,000"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive tech training and gadget solutions to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="training" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Training Programs</h2>
            <p className="text-gray-600">
              Enhance your skills with our comprehensive, hands-on training programs led by industry experts.
            </p>
          </div>

          <div className="space-y-16">
            {trainingPrograms.map((program, index) => (
              <div 
                key={program.id} 
                id={program.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="md:w-1/3">
                  <div className={`bg-brand-orange/10 p-6 rounded-lg ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                    <img 
                      src={program.icon} 
                      alt={program.title} 
                      className="w-full h-48 object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  {program.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                  <Button className="bg-brand-orange hover:bg-brand-orange-light mt-2">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gadgets Section */}
      <section id="gadgets" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gadgets & Accessories</h2>
            <p className="text-gray-600">
              Explore our selection of quality tech gadgets and accessories at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gadgets.map((gadget) => (
              <Card key={gadget.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={gadget.image} 
                    alt={gadget.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{gadget.name}</CardTitle>
                  <CardDescription className="text-brand-orange font-medium text-lg">
                    {gadget.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{gadget.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Details</Button>
                  <Button className="bg-brand-blue hover:bg-brand-blue-dark">Buy Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section id="repairs" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Repair Services</h2>
            <p className="text-gray-600">
              Fast, reliable repairs for laptops, smartphones, and other electronic devices.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue/20 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1588702547919-26089e690ecc" 
                  alt="Device repair" 
                  className="rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-orange/20 rounded-full"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Expert Device Repairs</h3>
              <p className="text-gray-700 mb-6">
                At JE Tech Hub, our certified technicians provide professional repair services 
                for a wide range of electronic devices. We use high-quality parts and offer 
                warranty on all our repairs.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Quick diagnostics and transparent pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Same-day repairs for most issues</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>30-day warranty on parts and labor</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-dark">
                <Link to="/contact">Book a Repair</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {repairServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-brand-orange font-medium">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8 text-lg">
            Whether you want to register for a training program, purchase a gadget, or book a repair, 
            we're here to help you with all your tech needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
