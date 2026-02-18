import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Eye, TrendingUp, Sparkles, BookOpen, Heart, MessageCircle, Share2, ArrowRight, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  views: string;
  likes: number;
  comments: number;
  trending?: boolean;
  featured?: boolean;
}

const BlogPosts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Art of Storytelling: How to Captivate Your Readers',
      excerpt: 'Discover the secrets behind compelling narratives and learn how to weave stories that resonate deeply with your audience. From character development to plot twists, master the craft of storytelling.',
      image: '/images/blog-1.jpg',
      category: 'Writing Tips',
      date: 'Feb 10, 2025',
      readTime: '8 min read',
      views: '12.5K',
      likes: 847,
      comments: 56,
      trending: true,
      featured: true,
    },
    {
      id: 2,
      title: 'Unlocking Your Potential: A Guide to Personal Growth',
      excerpt: 'Embark on a transformative journey of self-discovery. Learn practical strategies to overcome limiting beliefs and unlock the limitless potential within you.',
      image: '/images/blog-2.jpg',
      category: 'Personal Growth',
      date: 'Feb 8, 2025',
      readTime: '6 min read',
      views: '9.2K',
      likes: 623,
      comments: 42,
      trending: true,
    },
    {
      id: 3,
      title: 'Must-Read Books for Every Aspiring Author',
      excerpt: 'A curated list of essential reads that will inspire, educate, and transform your writing journey. From classics to contemporary masterpieces.',
      image: '/images/blog-3.jpg',
      category: 'Book Reviews',
      date: 'Feb 5, 2025',
      readTime: '10 min read',
      views: '7.8K',
      likes: 512,
      comments: 38,
    },
    {
      id: 4,
      title: 'Mindfulness Practices for Creative Minds',
      excerpt: 'Explore the connection between mindfulness and creativity. Discover daily practices that will help you stay focused, inspired, and productive.',
      image: '/images/blog-4.jpg',
      category: 'Mindfulness',
      date: 'Feb 3, 2025',
      readTime: '5 min read',
      views: '6.5K',
      likes: 445,
      comments: 29,
    },
    {
      id: 5,
      title: 'Building Resilience: Lessons from My Writing Journey',
      excerpt: 'Sharing my personal experiences with rejection, perseverance, and eventual success. Learn how to build the resilience needed to thrive as a creative.',
      image: '/images/blog-2.jpg',
      category: 'Personal Growth',
      date: 'Jan 28, 2025',
      readTime: '7 min read',
      views: '8.1K',
      likes: 678,
      comments: 71,
      trending: true,
    },
    {
      id: 6,
      title: 'The Power of Morning Routines for Writers',
      excerpt: 'How starting your day right can transform your writing practice. Practical tips and proven strategies to maximize your creative output.',
      image: '/images/blog-1.jpg',
      category: 'Writing Tips',
      date: 'Jan 25, 2025',
      readTime: '4 min read',
      views: '5.3K',
      likes: 389,
      comments: 24,
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Posts', icon: BookOpen },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: Sparkles },
  ];

  const categories = ['All', 'Writing Tips', 'Personal Growth', 'Book Reviews', 'Mindfulness'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    if (activeTab === 'trending') return post.trending;
    if (activeTab === 'recent') return true; // Sort by date in real app
    if (activeCategory !== 'All') return post.category === activeCategory;
    return true;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white via-purple-50/10 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600" />
        <div className="absolute inset-0 bg-[url('/images/library-bg.jpg')] bg-cover bg-center opacity-15" />
        
        <div className="container-large relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="anim-hidden max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Insights & Inspiration
            </span>
            <h1 className="text-h1 text-white mb-6">
              Blog Posts
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Explore articles on writing, personal growth, mindfulness, and the creative journey. 
              Find inspiration for your own path.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <p className="font-header text-3xl">150+</p>
                <p className="text-sm">Articles</p>
              </div>
              <div className="text-center">
                <p className="font-header text-3xl">100K+</p>
                <p className="text-sm">Readers</p>
              </div>
              <div className="text-center">
                <p className="font-header text-3xl">50K+</p>
                <p className="text-sm">Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeTab === 'all' && activeCategory === 'All' && (
        <section className="py-16 lg:py-24">
          <div className="container-large px-4 sm:px-6 lg:px-8">
            <div className="anim-hidden">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Featured Post
              </span>
              
              <div 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(featuredPost)}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent" />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        Trending
                      </span>
                    </div>
                    
                    <h2 className="font-header text-3xl lg:text-4xl text-purple-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-body text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views} views
                      </span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-orange-600 font-semibold group/btn">
                      Read Article
                      <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tabs & Filter Section */}
      <section className="py-8 sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Tabs */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border-none outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="anim-hidden group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(post)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Trending Badge */}
                  {post.trending && (
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        TRENDING
                      </span>
                    </div>
                  )}
                  
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-header text-xl text-purple-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-body text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="container-large px-4 sm:px-6 lg:px-8">
          <div className="anim-hidden max-w-2xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-h2 text-white mb-4">
              Never Miss a Post
            </h2>
            <p className="text-purple-200 mb-8">
              Subscribe to my newsletter and get weekly insights on writing, personal growth, 
              and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-purple-300 border border-white/20 focus:outline-none focus:border-orange-400"
              />
              <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                Subscribe Now
              </button>
            </div>
            <p className="mt-4 text-purple-300 text-sm">
              Join 50,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-72">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-t-3xl" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors text-2xl"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {selectedPost.category}
                </span>
                <h2 className="font-header text-2xl text-white mt-3">{selectedPost.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {selectedPost.views} views
                </span>
              </div>

              <p className="text-body text-gray-700 leading-relaxed mb-6">
                {selectedPost.excerpt}
              </p>

              <p className="text-body text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="text-body text-gray-700 leading-relaxed mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Engagement */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    {selectedPost.likes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {selectedPost.comments}
                  </button>
                </div>
                <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
