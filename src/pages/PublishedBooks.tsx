import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Star, BookOpen, ArrowRight, Check } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  bestseller?: boolean;
  features: string[];
}

const PublishedBooks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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

  const books: Book[] = [
    {
      id: 1,
      title: 'Finding Your Inner Light',
      subtitle: 'A Journey to Purpose, Peace, and Potential',
      description: 'Discover the path to self-discovery and unlock your true potential. This transformative guide will help you find clarity, purpose, and inner peace.',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/images/book-1.jpg',
      rating: 4.9,
      reviews: 2847,
      category: 'Self-Help',
      bestseller: true,
      features: ['300+ pages of transformative content', 'Practical exercises and worksheets', 'Audio companion included'],
    },
    {
      id: 2,
      title: 'Rise Above',
      subtitle: 'Unleash Your Potential, Conquer All Obstacles',
      description: 'Learn how to overcome challenges and rise above any obstacle. A powerful guide to resilience and personal growth.',
      price: '$22.99',
      image: '/images/book-2.jpg',
      rating: 4.8,
      reviews: 1923,
      category: 'Motivation',
      features: ['Real-life success stories', 'Actionable strategies', '30-day challenge included'],
    },
    {
      id: 3,
      title: 'The Art of Connection',
      subtitle: 'A Guide to Deeper Relationships & Meaningful Communication',
      description: 'Master the art of building meaningful connections and transform your relationships with proven communication techniques.',
      price: '$19.99',
      originalPrice: '$27.99',
      image: '/images/book-3.jpg',
      rating: 4.7,
      reviews: 1567,
      category: 'Relationships',
      features: ['Communication frameworks', 'Conflict resolution guide', 'Relationship assessment tools'],
    },
    {
      id: 4,
      title: 'Unlock Your Potential',
      subtitle: 'The Key to Career Success and Personal Fulfillment',
      description: 'Unlock the secrets to career success and personal fulfillment. This book provides the roadmap to achieving your professional dreams.',
      price: '$26.99',
      image: '/images/book-4.jpg',
      rating: 4.9,
      reviews: 2156,
      category: 'Career',
      bestseller: true,
      features: ['Career planning templates', 'Interview preparation guide', 'Networking strategies'],
    },
    {
      id: 5,
      title: 'Peace Within',
      subtitle: 'A Guide to Mindfulness & Meditation',
      description: 'Find inner peace and tranquility through the practice of mindfulness and meditation. Your journey to a calmer mind starts here.',
      price: '$18.99',
      originalPrice: '$24.99',
      image: '/images/book-5.jpg',
      rating: 4.8,
      reviews: 1834,
      category: 'Mindfulness',
      features: ['Guided meditations', 'Breathing exercises', 'Daily mindfulness practices'],
    },
    {
      id: 6,
      title: 'Lead with Heart',
      subtitle: 'Empower • Motivate • Innovate',
      description: 'Transform your leadership style and inspire those around you. Learn to lead with empathy, vision, and purpose.',
      price: '$28.99',
      image: '/images/book-6.jpg',
      rating: 4.9,
      reviews: 1245,
      category: 'Leadership',
      features: ['Leadership assessments', 'Team building exercises', 'Case studies from top CEOs'],
    },
  ];

  const categories = ['All', 'Self-Help', 'Motivation', 'Relationships', 'Career', 'Mindfulness', 'Leadership'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBooks = activeCategory === 'All' 
    ? books 
    : books.filter(book => book.category === activeCategory);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600" />
        <div className="absolute inset-0 bg-[url('/images/library-bg.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="container-large relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="anim-hidden max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Bestselling Collection
            </span>
            <h1 className="text-h1 text-white mb-6">
              Published Books
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Transform your life with my collection of bestselling books on personal development, 
              relationships, and professional growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <BookOpen className="w-5 h-5 text-orange-400" />
                <span>15+ Published Works</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <ShoppingCart className="w-5 h-5 text-orange-400" />
                <span>50K+ Copies Sold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="anim-hidden group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Bestseller Badge */}
                {book.bestseller && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      BESTSELLER
                    </span>
                  </div>
                )}

                {/* Book Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-100 to-orange-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick Action */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={() => setSelectedBook(book)}
                      className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      {book.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span className="text-sm text-gray-600">{book.rating}</span>
                      <span className="text-sm text-gray-400">({book.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-header text-xl text-purple-900 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{book.subtitle}</p>
                  <p className="text-body text-gray-600 mb-4 line-clamp-2">{book.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-header text-2xl text-orange-600">{book.price}</span>
                      {book.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{book.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedBook(book)}
                      className="p-3 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="anim-hidden max-w-4xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Get exclusive access to all my books with the Complete Collection bundle 
              and save 30% on your purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Get Complete Collection
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
            <p className="mt-6 text-purple-300 text-sm">
              ✓ Instant digital download ✓ 30-day money-back guarantee ✓ Lifetime updates
            </p>
          </div>
        </div>
      </section>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                  {selectedBook.category}
                </span>
                
                <h2 className="font-header text-3xl text-purple-900 mt-4 mb-2">{selectedBook.title}</h2>
                <p className="text-gray-500 mb-4">{selectedBook.subtitle}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                  <span className="font-semibold">{selectedBook.rating}</span>
                  <span className="text-gray-500">({selectedBook.reviews} reviews)</span>
                </div>

                <p className="text-body text-gray-600 mb-6">{selectedBook.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-purple-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {selectedBook.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="font-header text-3xl text-orange-600">{selectedBook.price}</span>
                    {selectedBook.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">{selectedBook.originalPrice}</span>
                    )}
                  </div>
                  <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedBooks;
