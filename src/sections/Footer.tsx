import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  ArrowUpRight,
  BookOpen,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Send,
} from 'lucide-react';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'About Me', href: '/about' },
      { label: 'Published Books', href: '/published-books' },
      { label: 'Blog Posts', href: '/blog-posts' },
      { label: 'Contact Me', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Rafiat_Onize', label: 'Twitter' },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/rafiat_onize?igsh=ZTg1dWs4dnhlOGQ=',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rafiat-o-abdulazeez-2536a91a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/19ZKeYDCpR/',
      label: 'Facebook',
    },
  ];

  return (
    <footer
      ref={ref}
      className={cn(
        'w-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 lg:py-24',
        isHomePage ? 'hidden' : 'block',
      )}
    >
      <div className='container-large px-6 lg:px-12'>
        <div className='grid lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Brand Column */}
          <div
            className={cn(
              'lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6',
            )}
          >
            <Link to='/' className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center'>
                <BookOpen className='w-6 h-6 text-white' />
              </div>
              <span className='text-2xl font-header tracking-tight'>
                Rafiat Abdulazeez
              </span>
            </Link>

            <p className='text-sm text-purple-200 max-w-sm leading-relaxed'>
              Author, nonfiction book coach, and personal development
              enthusiast. Inspiring readers worldwide to unlock their full
              potential through the power of words.
            </p>

            {/* Social Links */}
            <div className='flex gap-3 pt-2'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-all duration-300'
                  aria-label={social.label}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div
            className={cn(
              'lg:col-span-2 transition-all duration-800 ease-out-quart',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6',
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className='text-xs font-semibold uppercase tracking-widest text-purple-300 mb-4'>
              Navigation
            </h4>
            <ul className='space-y-3'>
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className='text-sm text-purple-200 hover:text-white transition-colors inline-flex items-center gap-1 group'
                  >
                    {link.label}
                    <ArrowUpRight className='w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          {/* <div
            className={cn(
              'lg:col-span-2 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-purple-200 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter Column */}
          <div
            className={cn(
              'lg:col-span-4 transition-all duration-800 ease-out-quart',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6',
            )}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className='text-xs font-semibold uppercase tracking-widest text-purple-300 mb-4'>
              Stay Inspired
            </h4>
            <p className='text-sm text-purple-200 mb-4'>
              Subscribe to my newsletter for weekly insights on writing,
              personal growth, and exclusive content.
            </p>

            <form onSubmit={handleSubscribe} className='space-y-3'>
              <div className='relative'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-purple-300 focus:outline-none focus:border-orange-400 transition-colors pr-14'
                />
                <button
                  type='submit'
                  className='absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors'
                >
                  <Send className='w-4 h-4' />
                </button>
              </div>

              {isSubscribed && (
                <p className='text-sm text-green-400 animate-fade-in'>
                  Thank you for subscribing! Check your inbox soon.
                </p>
              )}
            </form>

            <p className='mt-4 text-xs text-purple-300'>
              Join 50,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div
          className={cn(
            'mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-800 ease-out-quart',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-sm text-purple-300 flex items-center gap-1">
            © 2025 Rafiat Abdulazeez. Made with <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> for dreamers.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-purple-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
}
