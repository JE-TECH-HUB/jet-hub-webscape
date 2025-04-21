
import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Edmond",
      role: "CEO & Founder",
      bio: "With over 10 years in the tech industry, John founded JE Tech Hub to empower youth in Nigeria with valuable tech skills.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sarah Adamu",
      role: "Lead Instructor",
      bio: "A seasoned web developer and educator, Sarah leads our training programs with a focus on practical, hands-on learning.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      name: "Michael Ibrahim",
      role: "Technical Director",
      bio: "Michael oversees all technical operations, including gadget repairs and hardware training programs.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
    },
    {
      name: "Amina Yusuf",
      role: "Client Relations",
      bio: "Amina ensures client satisfaction through excellent communication and service delivery.",
      image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4",
    },
  ];

  const testimonials = [
    {
      name: "David Wilson",
      role: "Graphics Design Graduate",
      testimonial: "The skills I acquired at JE Tech Hub have been invaluable for my career. The instructors are patient and very knowledgeable.",
    },
    {
      name: "Esther Abiola",
      role: "Web Development Student",
      testimonial: "Learning at JE Tech Hub has been a transformative experience. The practical approach to teaching makes complex concepts easy to understand.",
    },
    {
      name: "Peter Okafor",
      role: "Business Owner",
      testimonial: "JE Tech Hub repaired my business laptops quickly and professionally. Their service is reliable and cost-effective.",
    },
    {
      name: "Fatima Hassan",
      role: "Data Analysis Graduate",
      testimonial: "I landed a job just two weeks after completing my data analysis course. The curriculum is up-to-date with industry standards.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JE Tech Hub</h1>
            <p className="text-xl text-white/80">
              Empowering the next generation of tech professionals through quality education and services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                JE Tech Hub was founded in 2018 with a clear mission: to bridge the digital skills gap in Nigeria 
                by providing accessible, quality tech education and services. What began as a small training center 
                in Gwagwalada has grown into a comprehensive tech hub serving hundreds of students and clients annually.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, John Edmond, recognized the untapped potential of Nigerian youth and the growing 
                demand for tech skills in the global marketplace. He established JE Tech Hub to create opportunities 
                for young people to develop marketable skills and connect with employment opportunities in the tech industry.
              </p>
              <p className="text-gray-700">
                Today, JE Tech Hub stands as a testament to our commitment to excellence in tech education, 
                gadget sales, and repair services. We continue to evolve and expand our offerings to meet 
                the changing needs of our community.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-orange/20 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="JE Tech Hub training session" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-gray-600">
              At JE Tech Hub, we're guided by a clear mission and strong values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Our Mission</h3>
              <p className="text-gray-700">
                To empower individuals with the technical skills, knowledge, and resources they need to thrive 
                in the digital economy, while providing reliable tech services to our community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-orange">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading tech education and service provider in Nigeria, recognized for the quality 
                of our graduates and the excellence of our services.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in all our programs and services, ensuring the highest quality education and support.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Community</h4>
              <p className="text-gray-600">
                We build a supportive learning community where collaboration and shared growth are encouraged.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-gray-600">
                We embrace innovation and stay current with emerging technologies and teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600">
              Our dedicated team of professionals is committed to providing the best tech education and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-orange font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our students and clients have to say about JE Tech Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the JE Tech Hub Community</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8 text-lg">
            Whether you're looking to learn new skills or need tech services, we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-light text-white">
              <Link to="/services#training">Explore Our Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
