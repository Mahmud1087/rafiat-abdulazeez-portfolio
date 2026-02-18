import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BookOpen, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Published Books', href: '/published-books' },
    { label: 'Blog Posts', href: '/blog-posts' },
    { label: 'Contact Me', href: '/contact' },
  ];

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isScrolled) return 'text-purple-900';
    if (isHomePage) return 'text-white';
    return 'text-purple-900';
  };

  const getBgColor = () => {
    if (isScrolled) return 'bg-white/95 backdrop-blur-md shadow-lg';
    if (isHomePage) return 'bg-transparent';
    return 'bg-white/95 backdrop-blur-md shadow-lg';
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          getBgColor(),
          isHomePage ? 'hidden' : 'block',
        )}
      >
        <div className='w-full px-6 lg:px-12 py-4'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-2'>
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500',
                  isScrolled || !isHomePage ? 'bg-purple-600' : 'bg-orange-500',
                )}
              >
                <BookOpen className='w-5 h-5 text-white' />
              </div>
              <span
                className={cn(
                  'text-xl md:text-2xl font-header tracking-tight transition-colors duration-500',
                  getTextColor(),
                )}
              >
                Rafiat Abdulazeez
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'font-semibold transition-colors duration-300 relative group',
                    getTextColor(),
                    'hover:text-orange-500',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full',
                      isScrolled || !isHomePage
                        ? 'bg-orange-500'
                        : 'bg-orange-400',
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className='hidden lg:block'>
              <Link
                to='/contact'
                className={cn(
                  'px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105',
                  isScrolled || !isHomePage
                    ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm',
                )}
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                isScrolled || !isHomePage
                  ? 'bg-purple-100 text-purple-900'
                  : 'bg-white/20 text-white',
              )}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden',
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none',
        )}
      >
        <div className='flex flex-col items-center justify-center h-full gap-6 pt-20'>
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                'text-2xl font-header text-purple-900 transition-all duration-500',
                isMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8',
              )}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to='/contact'
            className={cn(
              'mt-4 px-8 py-4 bg-orange-500 text-white rounded-full font-semibold transition-all duration-500',
              isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
            style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
