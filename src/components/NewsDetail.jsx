// src/components/NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube, Calendar, User, Share2, Clock } from 'lucide-react';

function NewsDetail() {
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

  const allBlogs = [
    {
      id: 1,
      title: 'Understanding Global Oil Markets',
      excerpt: 'An in-depth look at how global oil prices are determined and the factors that influence them.',
      content: `
        <h2>The Complex World of Oil Pricing</h2>
        <p>Global oil markets represent one of the most complex and interconnected systems in international trade. Understanding how prices are determined requires analyzing multiple factors that influence supply and demand dynamics.</p>
        
        <h3>Supply-Side Factors</h3>
        <p>OPEC+ production decisions, geopolitical tensions in key producing regions, and technological advances in extraction all play crucial roles in determining global supply levels. Recent years have seen significant shifts in production patterns, with shale oil revolution in the United States fundamentally altering market dynamics.</p>
        
        <h3>Demand Dynamics</h3>
        <p>Economic growth in emerging markets, particularly in Asia, continues to drive demand. However, the transition to renewable energy and electric vehicles is beginning to reshape long-term demand projections. Understanding these trends is essential for making informed trading decisions.</p>
        
        <h3>Market Mechanisms</h3>
        <p>Oil is traded on major exchanges including NYMEX, ICE, and regional platforms. Futures contracts, spot markets, and over-the-counter transactions all contribute to price discovery. The relationship between physical markets and financial instruments adds another layer of complexity.</p>
        
        <p>For traders and industry participants, staying informed about these factors is crucial for success in this dynamic market environment.</p>
      `,
      date: 'December 15, 2024',
      author: 'Sarah Mitchell',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=600&fit=crop',
      category: 'Market Insights'
    },
    {
      id: 2,
      title: 'The Future of Natural Gas Trading',
      excerpt: 'Exploring emerging trends in LNG markets and their impact on global energy security.',
      content: `
        <h2>LNG: The Future of Natural Gas</h2>
        <p>Liquefied Natural Gas (LNG) is rapidly transforming the global energy landscape. As countries seek cleaner alternatives to coal and diversify their energy sources, LNG has emerged as a critical component of the energy transition.</p>
        
        <h3>Infrastructure Expansion</h3>
        <p>New LNG terminals are being developed across Asia, Europe, and the Americas. These investments are creating more flexible and liquid global gas markets, allowing for greater price convergence and trading opportunities.</p>
        
        <h3>Geopolitical Implications</h3>
        <p>The rise of LNG is reshaping energy geopolitics. Countries that were previously dependent on pipeline gas now have alternatives, reducing the leverage of traditional suppliers. This shift is particularly significant in Europe following recent energy security concerns.</p>
        
        <h3>Trading Opportunities</h3>
        <p>The growing liquidity in LNG markets presents new trading opportunities. Spot markets are becoming more developed, and innovative contract structures are emerging to meet diverse buyer needs. Understanding these developments is crucial for market participants.</p>
        
        <p>As the LNG market continues to mature, traders who understand these dynamics will be well-positioned to capitalize on emerging opportunities.</p>
      `,
      date: 'December 10, 2024',
      author: 'James Anderson',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
      category: 'Industry Trends'
    },
    {
      id: 3,
      title: 'Compliance in Energy Trading',
      excerpt: 'How regulatory frameworks shape international commodities trading.',
      content: `
        <h2>Navigating the Regulatory Landscape</h2>
        <p>Energy trading operates within a complex web of international regulations, sanctions regimes, and compliance requirements. Understanding and adhering to these frameworks is essential for successful and sustainable trading operations.</p>
        
        <h3>Global Standards</h3>
        <p>International organizations and regulatory bodies have established frameworks governing energy trade. These include anti-money laundering requirements, sanctions compliance, and environmental regulations. Traders must navigate these requirements across multiple jurisdictions.</p>
        
        <h3>Know Your Customer (KYC)</h3>
        <p>Due diligence is fundamental to compliant trading. Thorough KYC processes help identify potential risks and ensure counterparties meet regulatory standards. This includes verifying beneficial ownership, screening against sanctions lists, and ongoing monitoring.</p>
        
        <h3>Technology Solutions</h3>
        <p>Modern compliance technology helps automate screening processes and maintain audit trails. These tools are becoming increasingly sophisticated, using artificial intelligence and machine learning to identify potential compliance issues before they become problems.</p>
        
        <h3>Best Practices</h3>
        <p>Leading companies invest in compliance culture, training, and robust internal controls. Regular audits, clear policies, and strong governance frameworks help ensure ongoing compliance and reduce regulatory risk.</p>
        
        <p>As regulations continue to evolve, staying ahead of compliance requirements will remain a critical success factor for energy traders.</p>
      `,
      date: 'December 5, 2024',
      author: 'Emily Chen',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
      category: 'Compliance'
    },
    {
      id: 4,
      title: 'Renewable Energy Integration',
      excerpt: 'How renewable energy sources are reshaping traditional energy markets and creating new opportunities.',
      content: `
        <h2>The Renewable Revolution</h2>
        <p>The integration of renewable energy sources is transforming global energy markets. Solar, wind, and other renewable technologies are no longer niche players but central to energy strategies worldwide.</p>
        
        <h3>Market Impact</h3>
        <p>Renewable energy is affecting traditional commodity markets in complex ways. While it may reduce demand for some fossil fuels in the long term, the transition creates new trading opportunities and requires flexible backup capacity.</p>
        
        <h3>Grid Integration Challenges</h3>
        <p>The intermittent nature of renewable energy requires sophisticated grid management and energy storage solutions. This creates opportunities for gas-fired power plants to provide flexible backup capacity.</p>
        
        <h3>Investment Trends</h3>
        <p>Capital is flowing into renewable energy projects and supporting infrastructure. Understanding these investment patterns helps traders anticipate future market dynamics and position themselves accordingly.</p>
      `,
      date: 'December 1, 2024',
      author: 'Michael Rodriguez',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
      category: 'Sustainability'
    },
    {
      id: 5,
      title: 'Digital Transformation in Trading',
      excerpt: 'Blockchain, AI, and other technologies are revolutionizing how energy commodities are traded.',
      content: `
        <h2>Technology Meets Trading</h2>
        <p>Digital transformation is reshaping energy trading, from execution to settlement. New technologies are improving efficiency, transparency, and risk management across the trading lifecycle.</p>
        
        <h3>Blockchain Applications</h3>
        <p>Blockchain technology promises to streamline trade documentation, improve transparency, and reduce settlement times. Several pilot projects are demonstrating the potential of distributed ledger technology in commodity trading.</p>
        
        <h3>Artificial Intelligence</h3>
        <p>AI and machine learning are being deployed for price forecasting, risk analytics, and automated trading. These tools can process vast amounts of data to identify patterns and opportunities that human traders might miss.</p>
        
        <h3>Data Analytics</h3>
        <p>Big data analytics enables traders to gain deeper insights into market dynamics. Real-time data processing and visualization tools are becoming essential for competitive advantage in fast-moving markets.</p>
      `,
      date: 'November 28, 2024',
      author: 'Lisa Thompson',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Asia-Pacific Energy Outlook',
      excerpt: 'Analyzing the rapidly growing energy markets in Asia and their global implications.',
      content: `
        <h2>The Asian Energy Boom</h2>
        <p>The Asia-Pacific region is becoming the center of gravity for global energy demand. Understanding these markets is crucial for anyone involved in international energy trading.</p>
        
        <h3>Demand Growth</h3>
        <p>Rapid economic development in countries like China, India, and Southeast Asian nations is driving unprecedented energy demand growth. This creates both challenges and opportunities for energy suppliers and traders.</p>
        
        <h3>Infrastructure Development</h3>
        <p>Massive investments in energy infrastructure are reshaping regional markets. New pipelines, LNG terminals, and storage facilities are creating more interconnected and liquid markets.</p>
        
        <h3>Policy Trends</h3>
        <p>Government policies on energy security, environmental protection, and economic development are shaping market dynamics. Understanding these policy trends is essential for strategic planning.</p>
      `,
      date: 'November 25, 2024',
      author: 'David Kim',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop',
      category: 'Regional Markets'
    }
  ];

  const blog = allBlogs.find(b => b.id === parseInt(id));

  const relatedBlogs = allBlogs
    .filter(b => b.id !== parseInt(id) && b.category === blog?.category)
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/news-insights" className="text-orange-500 hover:text-orange-600">
            Back to News & Insights
          </Link>
        </div>
      </div>
    );
  }

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
            onClick={() => navigate('/news-insights')}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to News & Insights</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{blog.category}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>By {blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
              <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: blog.content }} />

          {/* Author Box */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {blog.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{blog.author}</h3>
                <p className="text-gray-600 mb-4">Expert energy trader and market analyst with over 15 years of experience in global commodity markets.</p>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                    <Instagram size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    onClick={() => navigate(`/news-insights/${relatedBlog.id}`)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <img src={relatedBlog.image} alt={relatedBlog.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <span className="text-orange-500 text-xs font-semibold">{relatedBlog.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">{relatedBlog.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

export default NewsDetail;