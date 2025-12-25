// src/components/LegalCompliance.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Phone, Mail as MailIcon, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

function LegalCompliance() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
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

  const complianceSections = [
    {
      title: 'Licensing & Registration',
      subtitle: 'Licensed to Operate, Empowered to Trade',
      description: 'We hold verified trading licenses and regulatory approvals across major jurisdictions, including the U.S., EU, MENA, and Asia-Pacific. These registrations reflect our credibility and ensure we facilitate cross-border energy deals with legally-backed confidence.'
    },
    {
      title: 'Risk Disclosure',
      subtitle: 'We Help You Trade with Eyes Wide Open',
      description: 'Commodity markets carry risk—price volatility, supply disruptions, and geopolitical shifts. We believe in proactive transparency, ensuring every client is informed, protected, and positioned for success in changing conditions.'
    },
    {
      title: 'Ethical Trade Initiative',
      subtitle: 'Built on Ethics, Backed by Accountability',
      description: 'Our commitment to sustainable and ethical energy trade is more than a statement—it\'s a standard. We support global frameworks like the UN Global Compact and industry watchdogs that prioritize fair practices, anti-corruption, and social responsibility.'
    }
  ];
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
              <Link to="/market-insights" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Market Insights</Link>
              <Link to="/contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Contact</Link>
              <Link to="/legal-compliance" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm border-b-2 border-orange-500 pb-1`}>Legal & Compliance</Link>
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
              <Link to="/market-insights" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Market Insights</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</Link>
              <Link to="/legal-compliance" className="block text-orange-500 font-medium">Legal & Compliance</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1602056820935-316884c035f8?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" 
      alt="Oil and Gas Industrial" 
      className="w-full h-full object-cover" 
    />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full py-32">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      LEGAL<br />& COMPLIANCE
    </h1>
    
    <p className="text-xl text-white/90 mb-8 max-w-2xl">
      Stay informed with key updates, reports, and expert views across global energy markets.
    </p>
  </div>
</section>

      {/* Our Commitment Section */}
      <section className="py-20  bg-gray-50  shadow-xl">
        <div className="max-w-7xl mx-auto bg-white rounded-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-6 pt-10">Our Commitment to Compliance</h2>
          <p className="text-xl text-gray-700 font-semibold mb-4">Global Standards, Local Integrity.</p>
          <p className="text-gray-600 text-lg leading-relaxed  max-w-4xl">
            Our operations comply with the highest levels of regulatory oversight across every region we serve. From sanctions screening to transaction due diligence, we embed compliance into every stage of trade—protecting your reputation, assets, and competitive edge.
          </p>
        </div>
      </section>

      {/* Compliance Sections */}
      {complianceSections.map((section, idx) => (
        <section key={idx} className={` py-10 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl ">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-xl text-gray-700 font-semibold mb-6">{section.subtitle}</p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              {section.description}
            </p>
          </div>
        </section>
      ))}

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

export default LegalCompliance;