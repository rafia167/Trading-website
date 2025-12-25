// src/components/MarketInsights.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Phone, Mail as MailIcon, Linkedin, Twitter, Facebook, Instagram, Youtube, Search, Eye, Heart } from 'lucide-react';

function MarketInsights() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
      firstName: '', lastName: '', email: '', phone: '', message: ''
    });
    const [contactErrors, setContactErrors] = useState({});
    const [contactSuccess, setContactSuccess] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredInsights = [
    {
      id: 1,
      title: 'The Next Shockwave in Crude Pricing',
      excerpt: 'As energy markets evolve, staying ahead requires more than just data — it demands perspective. In this spotlight feature...',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
      category: 'Oil',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      title: 'Energy Trade at the Crossroads',
      excerpt: 'As energy markets grow increasingly complex, geopolitical shifts and supply chain uncertainty are reshaping the map of global trade...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      category: 'Gas',
      date: 'Dec 12, 2024'
    },
    {
      id: 3,
      title: 'Gas Demand in an Electrifying World',
      excerpt: 'As economies embrace electrification, where does natural gas fit into the transition? This piece breaks down new demand hubs...',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      category: 'Gas',
      date: 'Dec 10, 2024'
    }
  ];

  const allPosts = [
    {
      id: 4,
      title: 'The Next Shockwave in Crude Pricing',
      excerpt: 'Shifting global alliances and evolving OPEC+ production policies are reshaping crude price...',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      category: 'Oil',
      views: 88,
      likes: 68,
      date: 'Dec 15, 2024'
    },
    {
      id: 5,
      title: 'Gas Trade Routes: The New Silk Road?',
      excerpt: 'With emerging pipelines through Asia and the Eastern Mediterranean, natural gas is reshaping trade...',
      image: 'https://images.unsplash.com/photo-1673871811808-29f1be0ec4de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMGFuZCUyMGdhcyUyMHRyYWRlJTIwcm91dGVzfGVufDB8fDB8fHww',
      category: 'Gas',
      views: 88,
      likes: 68,
      date: 'Dec 14, 2024'
    },
    {
      id: 6,
      title: 'Storage Capacity as a Strategic',
      excerpt: 'Amid supply volatility, storage is becoming a core trade asset. Learn how optimized storage...',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      category: 'Logistics',
      views: 88,
      likes: 68,
      date: 'Dec 13, 2024'
    },
    {
      id: 7,
      title: 'The Refinery Pivot: Adapting to Green',
      excerpt: 'Refineries are shifting output to cleaner fuels in response to policy pressures...',
      image: 'https://plus.unsplash.com/premium_photo-1678177202541-b2fd87fe8c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9pbCUyMGFuZCUyMGdhcyUyMGdyZWVuZXJ5fGVufDB8fDB8fHww',
      category: 'Refined',
      views: 68,
      likes: 50,
      date: 'Dec 12, 2024'
    },
    {
      id: 8,
      title: 'Africa\'s Role in the New Oil Supply Chain',
      excerpt: 'As exploration and partnerships expand across West and East Africa...',
      image: 'https://images.unsplash.com/photo-1673115810074-8944eba483f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsJTIwYW5kJTIwZ2FzJTIwc3VwcGx1JTIwY2hhaW58ZW58MHx8MHx8fDA%3D',
      category: 'Oil',
      views: 88,
      likes: 68,
      date: 'Dec 11, 2024'
    },
    {
      id: 9,
      title: 'Marine Logistics Under Pressure',
      excerpt: 'With tightening emissions rules and global disruptions, marine fuel supply chains are under scrutiny...',
      image: 'https://media.istockphoto.com/id/2155593440/photo/tank-ship-loading-unloading-oil-and-gasoline-at-commercial-dock-in-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=xdouFwgjtToyXAv4rQbEzUT40wNqC5GLvmZsmOkDidI=',
      category: 'Logistics',
      views: 88,
      likes: 68,
      date: 'Dec 10, 2024'
    },
    {
      id: 10,
      title: 'LNG Export Terminals: The Next Wave',
      excerpt: 'New LNG terminals in the US and Qatar are set to reshape global gas flows...',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      category: 'Gas',
      views: 92,
      likes: 71,
      date: 'Dec 9, 2024'
    },
    {
      id: 11,
      title: 'Carbon Credits in Energy Trading',
      excerpt: 'How carbon markets are being integrated into traditional energy contracts...',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop',
      category: 'Oil',
      views: 76,
      likes: 55,
      date: 'Dec 8, 2024'
    },
    {
      id: 12,
      title: 'Strategic Petroleum Reserves: A Buffer',
      excerpt: 'Governments are rethinking strategic reserves amid volatile markets...',
      image: 'https://images.unsplash.com/photo-1545262810-77515befe149?w=400&h=300&fit=crop',
      category: 'Oil',
      views: 85,
      likes: 63,
      date: 'Dec 7, 2024'
    },
    {
      id: 13,
      title: 'Hydrogen: The Future Fuel?',
      excerpt: 'Green hydrogen is emerging as a key player in the energy transition...',
      image: 'https://plus.unsplash.com/premium_photo-1764694829689-01f6d0ef3f11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9pbCUyMGFuZCUyMGdhcyUyMGh5ZHJvamVuJTIwZnV0dXJlJTIwZnVlbHxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Gas',
      views: 94,
      likes: 78,
      date: 'Dec 6, 2024'
    },
    {
      id: 14,
      title: 'Digital Trading Platforms Revolution',
      excerpt: 'How blockchain and AI are transforming energy commodity trading...',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop',
      category: 'Logistics',
      views: 89,
      likes: 72,
      date: 'Dec 5, 2024'
    },
    {
      id: 15,
      title: 'Winter Energy Demand Surge',
      excerpt: 'European markets brace for peak winter demand and supply constraints...',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=300&fit=crop',
      category: 'Gas',
      views: 91,
      likes: 68,
      date: 'Dec 4, 2024'
    }
  ];

  const categories = ['All', 'Oil', 'Gas', 'Refined', 'Logistics'];

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!contactData.firstName.trim()) errors.firstName = 'First name is required';
    if (!contactData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!contactData.email.trim()) errors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactData.email)) errors.email = 'Invalid email';
    if (!contactData.phone.trim()) errors.phone = 'Phone is required';
    else if (!/^[0-9+\-\s()]+$/.test(contactData.phone)) errors.phone = 'Invalid phone number';
    if (!contactData.message.trim()) errors.message = 'Message is required';
    setContactErrors(errors);

    if (Object.keys(errors).length === 0) {
      setContactSuccess('Thank you for contacting us! We will get back to you soon.');
      setContactData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setContactSuccess(''), 5000);
    }
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
      <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="text-sm font-bold">
                <div className="text-orange-500">EUROPEAN FUEL</div>
                <div className={`${scrolled ? 'text-gray-700' : 'text-gray-300'} text-xs`}>CONSULTANTS</div>
              </div>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Home</Link>
              <Link to="/about" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>About Us</Link>
              <Link to="/what-we-trade" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>What We Trade</Link>
              <Link to="/market-insights" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm border-b-2 border-orange-500 pb-1`}>Market Insights</Link>
              <Link to="/contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Contact</Link>
              <Link to="/legal-compliance" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Legal & Compliance</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/login">
             <button  className={`border ${scrolled ? 'border-gray-700 text-gray-700  hover:text-white hover:bg-gray-700'  : 'border-white text-white hover:bg-white hover:text-gray-900 '} px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all text-sm`}>
                Login
              </button>
              </Link>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors`}>
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
              <Link to="/market-insights" className="block text-orange-500 font-medium">Market Insights</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</Link>
              <Link to="/legal-compliance" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Legal & Compliance</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" 
      alt="Oil and Gas Industrial" 
      className="w-full h-full object-cover" 
    />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full py-32">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      MARKET INSIGHTS
    </h1>
    
    <p className="text-xl text-white/90 mb-8 max-w-2xl">
      Stay informed with key updates, reports, and expert views across global energy markets.
    </p>
    <Link to="/contact">
    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2">
      <span>Disscuss a Trade</span>
      <ArrowRight size={20} />
    </button>
    </Link>
  </div>
</section>
      {/* Featured Insight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Featured Insight</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-4xl leading-relaxed">
            At the forefront of global energy trade, our insights dive deep into the market forces shaping oil, gas, and logistics today. We spotlight trends, strategies, and shifts that empower informed decisions—backed by our expertise in high-demand commodities and the infrastructure that fuels them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer" onClick={() => {
        // YE LINES UPDATE KARO
        if (insight.id === 1) navigate('/market-insights/crude-pricing');
        else if (insight.id === 2) navigate('/market-insights/energy-trade');
        else if (insight.id === 3) navigate('/market-insights/gas-demand');
      }}
    >
                <img src={insight.image} alt={insight.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{insight.excerpt}</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2 text-sm">
                    <span>Read Full Insight</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Market Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Latest Market Insights</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
              Stay ahead of the curve with our continuously updated stream of energy trade intelligence. From crude supply trends and LNG contracts to geopolitical risk and infrastructure updates, our insight feed equips you with actionable knowledge tailored for the oil, gas, and logistics sectors.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by keyword or region"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer flex" onClick={() => navigate(`/market-insights/${post.id}`)}>
<img src={post.image} alt={post.title} className="w-40 h-full object-cover flex-shrink-0" />
<div className="p-6 flex flex-col justify-between flex-grow">
<div>
<h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
<p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
</div>
<div className="flex items-center space-x-4 text-sm text-gray-500">
<div className="flex items-center space-x-1">
<Eye size={16} />
<span>{post.views}</span>
</div>
<div className="flex items-center space-x-1">
<Heart size={16} />
<span>{post.likes}</span>
</div>
</div>
</div>
</div>
))}
</div>

{/* See All Button */}
      {visiblePosts < filteredPosts.length && (
        <div className="text-center">
          <button
            onClick={() => setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length))}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2"
          >
            <span>See All</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No insights found matching your search.</p>
        </div>
      )}
    </div>
  </section>

  {/* Ready to Explore Section */}
 <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">READY TO<br />EXPLORE A TRADE?</h2>
          <p className="text-gray-600 mb-8">Or start a conversation around energy infrastructure and logistics?</p>

              {contactSuccess && <p className="text-green-600 font-medium mb-4">{contactSuccess}</p>}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={contactData.firstName}
                    onChange={(e) => setContactData({...contactData, firstName: e.target.value})}
                    className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${contactErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    value={contactData.lastName}
                    onChange={(e) => setContactData({...contactData, lastName: e.target.value})}
                    className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${contactErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email *"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${contactErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${contactErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                </div>
                <textarea
                  placeholder="Message *"
                  rows="4"
                  value={contactData.message}
                  onChange={(e) => setContactData({...contactData, message: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none ${contactErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg">
                  Get In Touch
                </button>
              </form>
            </div>

            <div className="relative h-96 lg:h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
                alt="Container Port"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
          <h4 className="font-bold text-lg mb-4 text-white">Looking to initiate your next trade or expand into new markets?</h4>
           <Link to="/contact">
                          <button  className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2 text-sm">
                            <span>Get In Touch</span>
                            <ArrowRight size={16} />
                          </button>
                        </Link>
        </div>
        
        <div className="text-sm text-gray-300">
          <p className="mb-4">© 2024 Trampexpert Inc.</p>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
          </div>
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
export default MarketInsights;