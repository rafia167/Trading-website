// src/components/TradeExperts.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube, Linkedin, Award, Briefcase } from 'lucide-react';

function TradeExperts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tradeExperts = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'Senior Trade Specialist',
      expertise: 'Crude Oil & Natural Gas',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: 'Expert in global crude oil markets and LNG trading strategies.',
      bio: 'Sarah has been at the forefront of energy trading for over 15 years, specializing in crude oil and natural gas markets. Her expertise spans from contract negotiation to market analysis, helping clients navigate complex trading environments.',
      specializations: ['Crude Oil Trading', 'LNG Contracts', 'Market Analysis', 'Risk Management']
    },
    {
      id: 2,
      name: 'James Anderson',
      title: 'Director of Trading Operations',
      expertise: 'Refined Products & Logistics',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Specializes in refined products and supply chain optimization.',
      bio: 'With two decades of experience, James leads our trading operations with a focus on refined products. His deep understanding of logistics and supply chain management ensures seamless delivery and optimal trading outcomes.',
      specializations: ['Refined Products', 'Supply Chain', 'Logistics Optimization', 'Trading Operations']
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Trade Compliance Manager',
      expertise: 'International Trade Law',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Ensures all trades meet global compliance and regulatory standards.',
      bio: 'Emily brings extensive knowledge of international trade law and regulatory compliance. She ensures every transaction meets the highest standards of legal and ethical trading practices across all jurisdictions.',
      specializations: ['Trade Compliance', 'International Law', 'Regulatory Standards', 'Risk Assessment']
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      title: 'Logistics Coordinator',
      expertise: 'Storage & Transportation',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      description: 'Manages complex logistics networks and storage solutions.',
      bio: 'Michael oversees our global logistics operations, coordinating storage facilities and transportation networks. His expertise ensures efficient movement of energy commodities from source to destination.',
      specializations: ['Logistics Management', 'Storage Solutions', 'Transportation', 'Infrastructure']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Market Analyst',
      expertise: 'Energy Market Intelligence',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      description: 'Provides strategic insights on global energy market trends.',
      bio: 'Lisa delivers critical market intelligence and forecasting that drives trading decisions. Her analytical expertise helps clients stay ahead of market trends and capitalize on emerging opportunities.',
      specializations: ['Market Analysis', 'Forecasting', 'Strategic Planning', 'Data Analytics']
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Senior Gas Trader',
      expertise: 'Natural Gas Markets',
      experience: '16+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Specialist in natural gas trading and LNG operations.',
      bio: 'David specializes in natural gas markets with particular expertise in LNG trading. His extensive network and market knowledge make him invaluable for gas-related transactions.',
      specializations: ['Natural Gas Trading', 'LNG Operations', 'Pipeline Contracts', 'Gas Market Strategy']
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

  const ContactModal = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});

    const validateContact = () => {
      const newErrors = {};
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d+$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      return newErrors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validateContact();
      if (Object.keys(newErrors).length === 0) {
        alert(`Thank you! ${selectedExpert.name} will contact you soon.`);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setErrors({});
        setIsContactOpen(false);
        setSelectedExpert(null);
      } else {
        setErrors(newErrors);
      }
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setIsContactOpen(false)}>
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-slideUp max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
              {selectedExpert && (
                <p className="text-sm text-gray-600 mt-2">
                  Connecting with <strong className="text-orange-600">{selectedExpert.name}</strong>
                </p>
              )}
            </div>
            <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none`}
                placeholder="Tell us about your trading needs..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all shadow-lg">
              Send Message
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
              <Link to="/market-insights" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Market Insights</Link>
              <Link to="/contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Contact</Link>
              <Link to="/legal-compliance" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Legal & Compliance</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button  className={`border ${scrolled ? 'border-gray-700 text-gray-700  hover:text-white hover:bg-gray-700'  : 'border-white text-white hover:bg-white hover:text-gray-900 '} px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all text-sm`}>
                Login
              </button>
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
              <Link to="/market-insights" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Market Insights</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</Link>
              <Link to="/legal-compliance" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Legal & Compliance</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop" alt="Business Meeting" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            OUR TRADE EXPERTS
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with our seasoned professionals who bring decades of experience in global energy trading, compliance, and logistics.
          </p>
        </div>
      </section>

      {/* Experts Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Meet Our Experts</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our team of specialists brings unparalleled expertise across all aspects of energy trading. Each expert is dedicated to helping you navigate complex market dynamics and achieve your trading objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradeExperts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-3 transition-all duration-300 border border-gray-100">
                <img src={expert.image} alt={expert.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-4">{expert.title}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Award size={16} className="text-orange-500" />
                      <span><strong>Expertise:</strong> {expert.expertise}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Briefcase size={16} className="text-orange-500" />
                      <span><strong>Experience:</strong> {expert.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{expert.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {expert.specializations.map((spec, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedExpert(expert);
                      setIsContactOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg"
                  >
                    Let's Talk
                  </button>
                  
                  <div className="flex justify-center space-x-3 mt-4">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                      <Twitter size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our experts are standing by to discuss your energy trading needs and develop customized solutions.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight size={20} />
          </button>
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
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                <li><Link to="/legal-compliance" className="hover:text-orange-500 transition-colors">Legal & Compliance</Link></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="text-sm text-gray-400">
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
  {/* Modals */}
  {isLoginOpen && <LoginModal />}
  {isContactOpen && <ContactModal />}
</div>
);
}
export default TradeExperts;