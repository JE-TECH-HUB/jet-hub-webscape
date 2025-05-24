
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-brand-blue-dark">
               <span className="text-brand-orange">JE Tech Hub</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-base font-medium hover:text-brand-orange transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-base font-medium hover:text-brand-orange transition-colors">
              About Us
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-base font-medium hover:text-brand-orange transition-colors"
                onClick={toggleSubmenu}
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSubmenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link
                    to="/services#training"
                    className="block px-4 py-2 text-sm hover:bg-brand-orange-light hover:text-white transition-colors"
                  >
                    Training Programs
                  </Link>
                  <Link
                    to="/services#gadgets"
                    className="block px-4 py-2 text-sm hover:bg-brand-orange-light hover:text-white transition-colors"
                  >
                    Gadgets & Repairs
                  </Link>
                </div>
              )}
            </div>
            <Link to="/blog" className="text-base font-medium hover:text-brand-orange transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-base font-medium hover:text-brand-orange transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-light">
              <Link to="/services#training">Register Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-base font-medium hover:text-brand-orange transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium hover:text-brand-orange transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <div className="space-y-2">
              <button
                className="flex items-center text-base font-medium hover:text-brand-orange transition-colors"
                onClick={toggleSubmenu}
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSubmenuOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/services#training"
                    className="block text-sm hover:text-brand-orange transition-colors"
                    onClick={toggleMenu}
                  >
                    Training Programs
                  </Link>
                  <Link
                    to="/services#gadgets"
                    className="block text-sm hover:text-brand-orange transition-colors"
                    onClick={toggleMenu}
                  >
                    Gadgets & Repairs
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/blog"
              className="text-base font-medium hover:text-brand-orange transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium hover:text-brand-orange transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-light w-full">
              <Link to="/services#training" onClick={toggleMenu}>Register Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
