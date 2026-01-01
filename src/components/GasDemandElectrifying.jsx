// src/components/posts/GasDemandElectrifying.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube, Eye, Heart, Share2, Calendar } from 'lucide-react';

function GasDemandElectrifying() {
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
    id: 3,
    title: 'Gas Demand in an Electrifying World',
    date: 'December 10, 2024',
    author: 'Emily Chen',
    category: 'Gas',
    views: 1892,
    likes: 1345,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
    content: `
      <h2>The Role of Natural Gas in Energy Transition</h2>
      <p>As economies embrace electrification, where does natural gas fit into the transition? This piece breaks down new demand hubs, shifting consumption patterns, and the evolving role of gas in a carbon-conscious world.</p>
      
      <h3>Electrification Trends</h3>
      <p>The global push toward electrification is reshaping energy consumption patterns. From electric vehicles to industrial processes, electricity is increasingly becoming the energy carrier of choice. However, this transition doesn't spell the end for natural gas—rather, it's creating new and unexpected demand centers.</p>
      
      <h3>Natural Gas as a Bridge Fuel</h3>
      <p>Natural gas continues to play a crucial role as a bridge fuel in the energy transition. Its lower carbon footprint compared to coal makes it an attractive option for countries seeking to reduce emissions while maintaining energy security. Power generation, heating, and industrial applications all contribute to sustained demand.</p>
      
      <h3>Emerging Demand Centers</h3>
      <p>New demand hubs are emerging in unexpected locations. Asia-Pacific regions are seeing significant growth in LNG imports, while Europe is diversifying its gas supply sources. The development of gas-fired power plants as backup for renewable energy is creating consistent baseload demand.</p>
      
      <h3>Technology and Efficiency</h3>
      <p>Advances in gas turbine technology and combined-cycle power plants are improving efficiency and reducing emissions. Carbon capture and storage (CCS) technologies are making natural gas an even more viable long-term energy solution. These innovations are helping gas maintain its relevance in a decarbonizing world.</p>
      
      <h3>Market Dynamics</h3>
      <p>Price volatility, geopolitical factors, and infrastructure investments are all shaping the natural gas market. Understanding these dynamics is crucial for traders and investors looking to capitalize on opportunities in this evolving landscape.</p>
      
      <p>The future of natural gas is intertwined with the broader energy transition. As the world electrifies, gas will continue to play a vital role—though its applications and demand patterns will continue to evolve.</p>
    `
  };

  const relatedPosts = [
    {
      id: 1,
      title: 'The Next Shockwave in Crude Pricing',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      category: 'Oil'
    },
    {
      id: 2,
      title: 'Energy Trade at the Crossroads',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      category: 'Gas'
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
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{post.category}</span>
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
                  onClick={() => {
                    if (relatedPost.id === 1) navigate('/market-insights/crude-pricing');
                    else if (relatedPost.id === 2) navigate('/market-insights/energy-trade');
                    else navigate(`/market-insights/${relatedPost.id}`);
                  }}
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

export default GasDemandElectrifying;