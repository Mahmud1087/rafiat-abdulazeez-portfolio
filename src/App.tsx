import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageOverlay } from '@/components/PageOverlay';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import PublishedBooks from '@/pages/PublishedBooks';
import BlogPosts from '@/pages/BlogPosts';
import Contact from '@/pages/Contact';

const App = () => {
  const { showOverlay } = usePageLoad(500);

  return (
    <Router>
      <div className='min-h-screen bg-white'>
        {/* Page Load Overlay */}
        <PageOverlay isVisible={showOverlay} />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/published-books' element={<PublishedBooks />} />
            <Route path='/blog-posts' element={<BlogPosts />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
