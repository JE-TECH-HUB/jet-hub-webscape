
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: "web-development-trends-2023",
      title: "Top Web Development Trends in 2023",
      excerpt: "Explore the latest technologies and frameworks shaping the future of web development this year.",
      date: "August 15, 2023",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: "John Edmond"
    },
    {
      id: "choosing-right-laptop",
      title: "How to Choose the Right Laptop for Your Needs",
      excerpt: "A comprehensive guide to selecting the perfect laptop based on your specific requirements and budget.",
      date: "July 22, 2023",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      author: "Michael Ibrahim"
    },
    {
      id: "success-story-sarah",
      title: "From Student to Senior Developer: Sarah's Success Story",
      excerpt: "Read about how our Web Development graduate Sarah went from complete beginner to senior developer in just two years.",
      date: "June 30, 2023",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      author: "Amina Yusuf"
    },
    {
      id: "data-analysis-beginners",
      title: "Data Analysis for Beginners: Where to Start",
      excerpt: "An introduction to the world of data analysis, including essential tools and resources for beginners.",
      date: "June 12, 2023",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      author: "David Wilson"
    },
    {
      id: "common-smartphone-problems",
      title: "5 Common Smartphone Problems and How to Fix Them",
      excerpt: "Troubleshooting tips for the most frequent issues smartphone users encounter.",
      date: "May 28, 2023",
      category: "Repairs",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
      author: "Michael Ibrahim"
    },
    {
      id: "ui-ux-principles",
      title: "Essential UI/UX Design Principles Every Designer Should Know",
      excerpt: "A guide to the fundamental principles that lead to intuitive and effective user interfaces.",
      date: "May 15, 2023",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      author: "Sarah Adamu"
    }
  ];

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">JE Tech Hub Blog</h1>
            <p className="text-xl text-white/80">
              Tech insights, tutorials, news, and success stories from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories Section */}
      <section className="py-8 md:py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <Button variant="outline" size="sm" className="rounded-full">All</Button>
              <Button variant="outline" size="sm" className="rounded-full">Web Development</Button>
              <Button variant="outline" size="sm" className="rounded-full">UI/UX Design</Button>
              <Button variant="outline" size="sm" className="rounded-full">Data Analysis</Button>
              <Button variant="outline" size="sm" className="rounded-full">Gadgets</Button>
              <Button variant="outline" size="sm" className="rounded-full">Success Stories</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-brand-orange transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        By <span className="font-medium">{post.author}</span>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="group">
                        <Link to={`/blog/${post.id}`} className="flex items-center text-brand-blue hover:text-brand-blue-dark">
                          Read More 
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any articles matching your search criteria.
              </p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Story</h2>
            <p className="text-gray-600">
              Read our latest success story from one of our graduates.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67" 
                  alt="Success Story" 
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-medium inline-block mb-4 w-fit">
                  Success Story
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  How Our Web Development Program Helped Peter Launch His Startup
                </h3>
                <p className="text-gray-700 mb-6">
                  "Before joining JE Tech Hub, I had a business idea but lacked the technical skills to bring it to life. 
                  The Web Development program gave me the knowledge and confidence to build my own platform. 
                  Today, my startup has thousands of users and recently secured its first round of funding."
                </p>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Peter Okafor" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Peter Okafor</div>
                    <div className="text-sm text-gray-600">Founder, TechNaija</div>
                  </div>
                </div>
                <Button asChild className="bg-brand-orange hover:bg-brand-orange-light w-fit">
                  <Link to="/blog/peter-success-story" className="flex items-center">
                    Read Peter's Story 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Get the latest tech news, tutorials, and updates from JE Tech Hub delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-brand-orange hover:bg-brand-orange-light whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
