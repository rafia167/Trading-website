// src/components/NewsInsights.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube, Calendar, User } from 'lucide-react';

function NewsInsights() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogs = [
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
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop',
      category: 'Regional Markets'
    }
  ];

  const LoginModal = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const validateLogin = () => {
      const newErrors = {};
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      return newErrors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validateLogin();
      if (Object.keys(newErrors).length === 0) {
        alert('Login successful! (Demo)');
        setFormData({ email: '', password: '' });
        setErrors({});
        setIsLoginOpen(false);
      } else {
        setErrors(newErrors);
      }
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setIsLoginOpen(false)}>
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <button onClick={() => setIsLoginOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all shadow-lg">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
      `}</style>

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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 mt-16">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop" alt="News" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            LATEST INSIGHTS<br />& NEWS
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay informed with expert analysis, industry trends, and the latest developments in global energy markets.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div className="relative overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{blog.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{blog.excerpt}</p>
                  <button 
                    onClick={() => navigate(`/news-insights/${blog.id}`)}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <p className="mb-4">© 2024 Trampexpert Inc.</p>
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

      {/* Modals */}
      {isLoginOpen && <LoginModal />}
    </div>
  );
}

export default NewsInsights;