import { useEffect, useRef } from 'react';
import { BookOpen, Award, Users, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible');
            entry.target.classList.remove('anim-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const elements = sectionRef.current?.querySelectorAll('.anim-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '3', label: 'Books Published', icon: BookOpen },
    { value: '5K+', label: 'Happy Readers', icon: Users },
    { value: '6+', label: 'Years Experience', icon: Award },
    // { value: '100+', label: 'Workshops Hosted', icon: Heart },
  ];

  const achievements = [
    'Published Books on Amazon and Selar',
    'Featured in Publications',
    'Co-Authored 5+ books',
    'Personal Development Coach',
    'Hosts Online Workshops',
  ];

  return (
    <div
      ref={sectionRef}
      className='min-h-screen bg-gradient-to-b from-white to-purple-50/30'
    >
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-100/50 to-orange-100/30' />

        <div className='container-large relative z-10 px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Image Column */}
            <div className='anim-hidden relative'>
              <div className='relative'>
                {/* Decorative elements */}
                <div className='absolute -top-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl' />
                <div className='absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl' />

                {/* Main Image */}
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  <img
                    src='https://images.unsplash.com/photo-1641464685213-c4a925b149e6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='Rafiat Abdulazeez'
                    className='w-full h-auto object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent' />
                </div>

                {/* Floating badge */}
                <div className='absolute -bottom-4 -right-12 bg-white rounded-2xl shadow-xl p-4 px-8 animate-fade-in'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center'>
                      <Award className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='font-header text-lg text-purple-900'>
                        Certified Author
                      </p>
                      <p className='text-sm text-gray-600'>Muslimah</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className='anim-hidden' style={{ transitionDelay: '0.2s' }}>
              <span className='inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6'>
                About Me
              </span>

              <h1 className='text-h2 text-purple-900 mb-6'>
                Hello, I'm Rafiat Abdulazeez
              </h1>

              <div className='space-y-4 text-body text-gray-700 leading-relaxed'>
                <p>
                  I'm a passionate author and nonfiction book coach dedicated to
                  helping people unlock their full potential through the power
                  of words. With over a decade of experience in personal
                  development writing, I've had the privilege of touching the
                  lives of thousands of readers worldwide.
                </p>
                <p>
                  My journey began with a simple belief: that everyone has a
                  story worth telling and the capacity to transform their lives.
                  Through my books, coaching sessions, and workshops, I guide
                  individuals on their path to self-discovery, empowerment, and
                  lasting change.
                </p>
                <p>
                  When I'm not writing or coaching, you'll find me exploring new
                  ideas, connecting with my readers, or enjoying a good book
                  with a cup of tea. I believe in the transformative power of
                  knowledge and the magic that happens when we commit to growth.
                </p>
              </div>

              {/* Achievements */}
              <div className='mt-8'>
                <h3 className='font-header text-xl text-purple-900 mb-4'>
                  Highlights
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className='px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 bg-purple-900'>
        <div className='container-large px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className='anim-hidden text-center'
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className='w-14 h-14 mx-auto mb-4 bg-orange-500 rounded-2xl flex items-center justify-center'>
                  <stat.icon className='w-8 h-8 text-white' />
                </div>
                <p className='font-header text-4xl text-white mb-2'>
                  {stat.value}
                </p>
                <p className='text-purple-200 text-sm'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className='py-20 lg:py-32'>
        <div className='container-large px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='anim-hidden'>
              <Quote className='w-16 h-16 text-orange-500 mx-auto mb-8' />
              <blockquote className='font-header text-3xl lg:text-4xl text-purple-900 mb-8 leading-tight'>
                "Words have the power to heal, inspire, and transform. My
                mission is to create content that empowers you to become the
                best version of yourself."
              </blockquote>
              <p className='text-body text-gray-600'>— Rafiat Abdulazeez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className='py-20 bg-gradient-to-b from-purple-50/50 to-white'>
        <div className='container-large px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 anim-hidden'>
            <span className='inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4'>
              My Journey
            </span>
            <h2 className='text-h2 text-purple-900'>The Path So Far</h2>
          </div>

          <div className='max-w-3xl mx-auto space-y-12'>
            {[
              {
                year: '2021',
                title: 'The Beginning',
                description:
                  "Published my first book, 'Dare To Thrive' and discovered my passion for helping others through writing.",
              },
              {
                year: '2022',
                title: 'Going Global',
                description:
                  'Reached international audiences through publishing on Amazon.',
              },
              {
                year: '2024',
                title: 'Coaching Journey',
                description:
                  'Started coaching aspiring authors and launched online workshops.',
              },
              {
                year: '2025',
                title: 'Co-authoring Success',
                description:
                  "Published and Launched 'The Boy Mama Code' with another author, inspiring parents worldwide.",
              },
            ].map((milestone, index) => (
              <div
                key={milestone.year}
                className='anim-hidden flex gap-6 items-start'
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className='flex-shrink-0 w-20 text-right'>
                  <span className='font-header text-2xl text-orange-500'>
                    {milestone.year}
                  </span>
                </div>
                <div className='flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-2 relative'>
                  <div className='absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-30' />
                </div>
                <div className='flex-1 pb-8 border-b border-purple-100'>
                  <h3 className='font-header text-xl text-purple-900 mb-2'>
                    {milestone.title}
                  </h3>
                  <p className='text-body text-gray-600'>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='mx-auto space-y-6 py-14 bg-orange-100 w-full'>
        <h3 className='text-center text-h4 font-header text-purple-900'>
          Have a Project in Mind?
        </h3>
        <p className='text-center text-base lg:text-lg text-gray-600 w-full md:w-4/5 lg:w-1/2 mx-auto'>
          You can reach out to me for coaching, collaborations, or just to say
          hi! I'm always excited to connect with fellow writers and readers.
        </p>
        <aside className='w-full flex flex-col md:flex-row md:justify-center items-center gap-3'>
          <Link
            to='/contact'
            className={cn(
              'px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg',
            )}
          >
            Get In Touch
          </Link>
          OR
          <Link
            className={cn(
              'px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 bg-purple-700 text-white hover:bg-purple-600 hover:shadow-lg',
            )}
            to={
              'https://www.upwork.com/freelancers/~01931f18e92b140a8c?mp_source=share'
            }
          >
            Hire Me on Upwork
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default About;
