
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube, Eye, Heart, Share2, Calendar } from 'lucide-react';

function Crudepricing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = {
    id: parseInt(id),
    title: 'The Next Shockwave in Crude Pricing',
    date: 'December 15, 2024',
    author: 'Sarah Mitchell',
    category: 'Oil',
    views: 1245,
    likes: 892,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    content: `
      <h2>The Global Energy Landscape is Shifting</h2>
      <p>As energy markets evolve, staying ahead requires more than just data—it demands perspective. In this spotlight feature, we dive deep into the forces reshaping crude oil pricing across global markets.</p>
      
      <h3>Key Market Drivers</h3>
      <p>Shifting global alliances and evolving OPEC+ production policies are reshaping crude price dynamics. The interplay between geopolitical tensions and production quotas has created unprecedented volatility in the market.</p>
      
      <h3>Supply Chain Disruptions</h3>
      <p>Recent disruptions in key shipping routes and production facilities have amplified price fluctuations. Understanding these patterns is crucial for traders and investors navigating today's complex energy landscape.</p>
      
      <h3>Future Outlook</h3>
      <p>Looking ahead, several factors will continue to influence crude pricing: renewable energy adoption, emerging market demand, and technological innovations in extraction and refining processes.</p>
      
      <p>Our analysis suggests that market participants should remain vigilant and adaptive, leveraging both traditional indicators and emerging data sources to make informed decisions.</p>
    `
  };

  const relatedPosts = [
    {
      id: 5,
      title: 'Gas Trade Routes: The New Silk Road?',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'Gas'
    },
    {
      id: 8,
      title: 'Africa\'s Role in the New Oil Supply Chain',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      category: 'Oil'
    },
    {
      id: 10,
      title: 'LNG Export Terminals: The Next Wave',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      category: 'Gas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
       <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between items-center py-4">
                 <div className="flex items-center space-x-8">
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                     <div className="text-sm font-bold text-gray-900">
                       <div className="text-orange-500">EUROPEAN FUEL</div>
                       <div className="text-gray-700 text-xs">CONSULTANTS</div>
                     </div>
                   </div>
                 </div>
                 
                 <nav className="hidden lg:flex items-center space-x-8">
                   <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Home</Link>
                   <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">About Us</Link>
                   <Link to="/what-we-trade" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">What We Trade</Link>
                   <Link to="/market-insights" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Market Insights</Link>
                   <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Contact</Link>
                   <Link to="/legal-compliance" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Legal & Compliance</Link>
                 </nav>
     
                 <div className="flex items-center space-x-4">
                   <Link to="/login">
                    <button  className={`border ${scrolled ? 'border-gray-700 text-gray-700  hover:text-white hover:bg-gray-700'  : 'border-white text-white hover:bg-white hover:text-gray-900 '} px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all text-sm`}>
                Login
              </button>
                   </Link>
                   <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors">
                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                   </button>
                 </div>
               </div>
             </div>
     
             {isMenuOpen && (
               <div className="lg:hidden bg-white border-t border-gray-200">
                 <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                   <Link to="/" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</Link>
                   <Link to="/about" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">About Us</Link>
                   <Link to="/what-we-trade" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">What We Trade</Link>
                   <Link to="/market-insights" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Market Insights</Link>
                   <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</Link>
                   <Link to="/legal-compliance" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Legal & Compliance</Link>
                 </nav>
               </div>
             )}
           </header>

      {/* Content */}
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/market-insights')}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Market Insights</span>
          </button>

          {/* Post Header */}
          <div className="mb-8">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{post.category}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Eye size={16} />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart size={16} />
                  <span>{post.likes}</span>
                </div>
                <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigate(`/market-insights/${relatedPost.id}`)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <span className="text-orange-500 text-xs font-semibold">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{relatedPost.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
       <footer className="bg-gray-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="text-sm font-bold">
                        <div className="text-orange-500">EUROPEAN FUEL</div>
                        <div className="text-gray-400 text-xs">CONSULTANTS</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-start space-x-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                        <span>Gwadar Lane 62, Ex-488 Westside, Palaro.</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="flex-shrink-0" />
                        <span>+11 234 555 7890</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MailIcon size={16} className="flex-shrink-0" />
                        <span>name@email.com</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                     <ul className="space-y-2 text-sm text-gray-300">
                                    <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                                    <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                                    <li><Link to="/what-we-trade" className="hover:text-orange-500 transition-colors">What We Trade</Link></li>
                                    <li><Link to="/market-insights" className="hover:text-orange-500 transition-colors">Market Insights</Link></li>
                                    <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                                    <li><Link to="/legal-compliance" className="hover:text-orange-500 transition-colors">Legal & Compliance</Link></li>
                                  </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                      <li><Link to="/legal-compliance" className="hover:text-orange-500 transition-colors">Legal & Compliance</Link></li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p className="mb-4">© 2025 Trampexpert Inc.</p>
                    <div className="flex space-x-4">
                      <button className="hover:text-orange-500 transition-colors">
                        <Twitter size={18} />
                      </button>
                      <button className="hover:text-orange-500 transition-colors">
                        <Facebook size={18} />
                      </button>
                      <button className="hover:text-orange-500 transition-colors">
                        <Instagram size={18} />
                      </button>
                      <button className="hover:text-orange-500 transition-colors">
                        <Youtube size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  );
}

export default Crudepricing;
