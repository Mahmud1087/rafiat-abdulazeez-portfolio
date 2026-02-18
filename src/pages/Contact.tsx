import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, Loader2, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.anim-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@rafiatabdulazeez.com',
      description: 'For general inquiries and collaborations',
      href: 'mailto:hello@rafiatabdulazeez.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available during business hours',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, USA',
      description: 'Available for in-person meetings',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-700' },
  ];

  const subjects = [
    'General Inquiry',
    'Book Collaboration',
    'Speaking Engagement',
    'Coaching Session',
    'Media Request',
    'Other',
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600" />
        <div className="absolute inset-0 bg-[url('/images/library-bg.jpg')] bg-cover bg-center opacity-15" />
        
        <div className="container-large relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="anim-hidden max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Get In Touch
            </span>
            <h1 className="text-h1 text-white mb-6">
              Contact Me
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Have a question, collaboration idea, or just want to say hello? 
              I'd love to hear from you. Let's connect and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                className="anim-hidden group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-header text-xl text-purple-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div className="anim-hidden">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                Send a Message
              </span>
              <h2 className="text-h2 text-purple-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-body text-gray-600 mb-8">
                Fill out the form below and I'll get back to you as soon as possible. 
                Your thoughts and ideas matter to me.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-purple-100 rounded-xl text-gray-800 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-purple-100 rounded-xl text-gray-800 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-purple-100 rounded-xl text-gray-800 focus:outline-none focus:border-orange-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white border-2 border-purple-100 rounded-xl text-gray-800 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    placeholder="Tell me about your project, question, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-green-100 text-green-700 rounded-xl animate-fade-in">
                    <CheckCircle className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Side Info */}
            <div className="anim-hidden" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl p-8 lg:p-12 text-white h-full">
                <h3 className="font-header text-2xl mb-6">Why Reach Out?</h3>
                
                <div className="space-y-6 mb-10">
                  {[
                    {
                      title: 'Book Collaborations',
                      description: 'Interested in co-authoring or have a publishing opportunity?',
                    },
                    {
                      title: 'Speaking Engagements',
                      description: 'Invite me to speak at your event, workshop, or conference.',
                    },
                    {
                      title: 'Coaching Sessions',
                      description: 'One-on-one guidance for aspiring authors and writers.',
                    },
                    {
                      title: 'Media & Interviews',
                      description: 'Press inquiries, podcast appearances, and interviews.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-purple-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h4 className="font-semibold mb-4">Response Time</h4>
                  <div className="flex items-center gap-3 text-purple-200">
                    <Clock className="w-5 h-5" />
                    <span>I typically respond within 24-48 hours</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8 mt-8">
                  <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="anim-hidden text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Common Questions
            </span>
            <h2 className="text-h2 text-purple-900">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How can I purchase your books?',
                answer: 'My books are available on Amazon, Barnes & Noble, and other major retailers. You can also purchase signed copies directly from my website.',
              },
              {
                question: 'Do you offer one-on-one coaching?',
                answer: 'Yes! I offer personalized coaching sessions for aspiring authors. Please reach out through the contact form to discuss availability and pricing.',
              },
              {
                question: 'Can I invite you to speak at my event?',
                answer: 'Absolutely! I love connecting with audiences. Send me details about your event through the contact form, and I\'ll get back to you promptly.',
              },
              {
                question: 'How long does it take to write a book?',
                answer: 'The timeline varies depending on the project. On average, my books take 6-12 months from concept to publication.',
              },
            ].map((faq, index) => (
              <div
                key={faq.question}
                className="anim-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-header text-lg text-purple-900 mb-3">{faq.question}</h3>
                <p className="text-body text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
