// src/components/WhatWeTrade.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail as MailIcon,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Droplet,
  Flame,
  Fuel,
  Warehouse,
} from "lucide-react";

function WhatWeTrade() {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tradeCategories = [
    {
      icon: Droplet,
      title: "Crude Oil",
      description:
        "Crude oil remains the foundation of the global energy economy—fueling industries, transportation, and power generation. We deliver large-volume, quality-assured streams sourced through our network of trusted producers and compliant international channels.",
      image:
        "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww",
      
    },
    {
      icon: Flame,
      title: "Natural Gas",
      description:
        "Natural gas is a cornerstone of clean energy evolution. Our operations bridge conventional pipeline infrastructure with LNG (liquefied natural gas) solutions, ensuring timely, secure, and versatile trades between buyers and sellers across key global markets.",
      image:
        "data:image/jpeg;base64,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",
      
    },
    {
      icon: Fuel,
      title: "Refined Products",
      description:
        "We handle a wide range of refined products—from aviation fuel to industrial-grade diesel—calibrated to the needs of modern commerce. Every trade aligns with global specifications, safety protocols, and market expectations.",
      image:
        "https://media.istockphoto.com/id/1609593868/photo/professionals-planning-over-laptop-while-standing-against-oil-pump-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=E-NLHhNG0v2O5QQo9OO_P0IpZnndBM-sRrYrA9bBY4s=",
      
    },
    {
      icon: Warehouse,
      title: "Logistics & Storage",
      description:
        "Our logistics and storage services complete the trade cycle—ensuring timely, secure, and flexible delivery. With access to terminals, pipelines, and marine infrastructure, we streamline transit-point-to-destination.",
      image:
        "https://plus.unsplash.com/premium_photo-1661964102274-592ca3e1a1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxvaWwlMjBhbmQlMjBnYXMlMjB3YXJlaG91c2UlMjBzdG9ja3xlbnwwfHwwfHx8MA%3D%3D",
      
    },
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
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="text-sm font-bold">
                <div className="text-orange-500">EUROPEAN FUEL</div>
                <div
                  className={`${
                    scrolled ? "text-gray-700" : "text-gray-300"
                  } text-xs`}
                >
                  CONSULTANTS
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm`}
              >
                About Us
              </Link>
              <Link
                to="/what-we-trade"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm border-b-2 border-orange-500 pb-1`}
              >
                What We Trade
              </Link>
              <Link
                to="/market-insights"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm`}
              >
                Market Insights
              </Link>
              <Link
                to="/contact"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm`}
              >
                Contact
              </Link>
              <Link
                to="/legal-compliance"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors font-medium text-sm`}
              >
                Legal & Compliance
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/login">
              <button  className={`border ${scrolled ? 'border-gray-700 text-gray-700  hover:text-white hover:bg-gray-700'  : 'border-white text-white hover:bg-white hover:text-gray-900 '} px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all text-sm`}>
                Login
              </button>
                             </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden ${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-orange-500 transition-colors`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/what-we-trade"
                className="block text-orange-500 font-medium"
              >
                What We Trade
              </Link>
              <Link
                to="/market-insights"
                className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Market Insights
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                to="/legal-compliance"
                className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Legal & Compliance
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1633704296129-ccdad889109e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxvaWwlMjBhbmQlMjBnYXMlMjB0cmFkaW5nfGVufDB8fDB8fHww" 
      alt="Oil and Gas Industrial" 
      className="w-full h-full object-cover" 
    />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full py-32">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      WHAT
      <br />
      WE TRADE
    </h1>

    <p className="text-xl text-white/90 mb-8 max-w-2xl">
      Driving energy trade through trust, transparency, and global
      standards.
    </p>
    
    <Link to="/contact">
      <button
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2"
      >
        <span>Discuss a Trade</span>
        <ArrowRight size={20} />
      </button>
    </Link>

    <div className="mt-16 text-white/80 text-sm max-w-3xl leading-relaxed">
      Our core focus is delivering energy products with efficiency,
      reliability, and trust. We specialize in high-demand
      commodities—crude oil, natural gas, refined fuels—and the
      infrastructure that powers their movement across borders.
    </div>
  </div>
</section>

      {/* Trade Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trade Categories
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-4xl leading-relaxed">
            We exist to power global energy trade through trust, efficiency, and
            compliance. By specializing in high-demand commodities and the
            infrastructure that moves them, we aim to be the most reliable and
            forward-thinking partner in the oil, gas, and logistics sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradeCategories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-80`}
                    ></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-gray-900 rounded-full p-4 mb-3">
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {category.description}
                    </p>
                    <Link to="/trade-experts">
  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2">
    <span>Talk to a Trade Expert</span>
    <ArrowRight size={18} />
  </button>
</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Explore Section */}
     <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">
                READY TO
                <br />
                EXPLORE A TRADE?
              </h2>
              <p className="text-gray-600 mb-8">
                or partner on infrastructure delivery?
              </p>

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

            <div className="relative h-96 min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1657694421496-36ddc9d8f12a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxvaWwlMjBhbmQlMjBnYXMlMjB0cmFkaW5nJTIwc2hpcCUyMHN0b2NrJTIwd2l0aCUyMGxpZ2h0aW5nfGVufDB8fDB8fHww"
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
              <h4 className="font-bold text-lg mb-4 text-white">
                Looking to initiate your next trade or expand into new markets?
              </h4>

              <Link to="/contact">
              <button
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2 text-sm"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </button>
              </Link>
            </div>

            <div className="text-sm text-gray-300">
              <p className="mb-4">© 2024 Trampexpert Inc.</p>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Terms
                </a>
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
export default WhatWeTrade;
