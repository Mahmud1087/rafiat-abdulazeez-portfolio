import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Home = () => {
  const navButtons = [
    { label: 'About Me', href: '/about' },
    { label: 'Published Books', href: '/published-books' },
    { label: 'Blog Posts', href: '/blog-posts' },
    {
      label: 'Find Me on Upwork',
      href: 'https://www.upwork.com/freelancers/~01931f18e92b140a8c?mp_source=share',
    },
    { label: 'Contact Me', href: '/contact' },
  ];

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
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/images/library-bg.jpg)',
        }}
      >
        {/* Purple overlay for branding */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-orange-900/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex min-h-screen items-center justify-center px-4 py-20'>
        <div className='glass-card w-full max-w-lg rounded-3xl p-8 md:p-12 text-center shadow-2xl animate-fade-in'>
          {/* Author Name */}
          <h1 className='text-h3 mb-3 text-[#7C3AED]'>Rafiat Abdulazeez</h1>

          {/* Subtitle */}
          <p className='text-body text-gray-700 mb-8 font-medium'>
            Author • Nonfiction Book Coach • Personal Development Enthusiast
          </p>

          {/* Navigation Buttons */}
          <div className='space-y-4 mb-8'>
            {navButtons.map((button, index) => (
              <Link
                key={button.label}
                to={button.href}
                // target='_blank'
                className='block w-full py-2.5 px-6 rounded-full text-white font-semibold text-body transition-all duration-300 hover:scale-105 hover:shadow-lg'
                style={{
                  backgroundColor: '#F97316',
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EA580C';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 30px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F97316';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {button.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className='flex justify-center gap-5'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full transition-all duration-300 hover:scale-110'
                style={{
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: '#7C3AED',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7C3AED';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(124, 58, 237, 0.1)';
                  e.currentTarget.style.color = '#7C3AED';
                }}
                aria-label={social.label}
              >
                <social.icon size={22} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
