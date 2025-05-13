import { useState, useEffect } from 'react';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white z-50 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">Nomad Network</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#destinations" className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Destinations</a>
            <a href="#community" className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Community</a>
            <a href="#membership" className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Membership</a>
            <a href="#about" className="font-medium hover:text-[hsl(var(--primary))] transition-colors">About</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Login</a>
            <a href="#" className="bg-[hsl(var(--primary))] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">Join Now</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggle}
              className="text-nomad-black focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#destinations" onClick={close} className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Destinations</a>
            <a href="#community" onClick={close} className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Community</a>
            <a href="#membership" onClick={close} className="font-medium hover:text-[hsl(var(--primary))] transition-colors">Membership</a>
            <a href="#about" onClick={close} className="font-medium hover:text-[hsl(var(--primary))] transition-colors">About</a>
            <div className="pt-4 border-t border-gray-200">
              <a href="#" className="block font-medium hover:text-[hsl(var(--primary))] transition-colors mb-4">Login</a>
              <a href="#" className="block bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors text-center">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
