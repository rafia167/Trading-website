// src/components/About.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Phone, Mail as MailIcon, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSuccess, setContactSuccess] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const teamMembers = [
    {
      name: 'Alex Mercer',
      role: 'FOUNDER & CEO',
      description: 'Alex has 20+ years in international trade and built the firm\'s strategic.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
    },
    {
      name: 'Jordan Blake',
      role: 'DIRECTOR',
      description: 'Jane has over 20 years of experience leading operations and aligning global compliance strategies.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop'
    }
  ];

  const trustPillars = [
    {
      icon: '🔒',
      title: 'Licensed & Registered',
      description: 'We operate under verified government and international trading licenses, ensuring compliance in every jurisdiction.'
    },
    {
      icon: '🔄',
      title: 'Global Trade Compliance',
      description: 'Our processes meet stringent regulatory standards, including INCOTERMS and cross-border trading laws.'
    },
    {
      icon: '🤝',
      title: 'Strategic Partnerships',
      description: 'We collaborate with vetted logistics, infrastructure, and trading partners to expand reach and reliability.'
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
              <Link to="/about" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm border-b-2 border-orange-500 pb-1`}>About Us</Link>
              <Link to="/what-we-trade" className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">What We Trade</Link>
              <Link to="/market-insights" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium text-sm`}>Market Insights</Link>
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
              <Link to="/about" className="block text-orange-500 font-medium">About Us</Link>
              <Link to="/what-we-trade" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">What We Trade</Link>
              <Link to="/market-insights" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">Market Insights</Link>
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
      src="https://images.unsplash.com/photo-1691864441093-65d463f2bf1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG9pbCUyMGFuZCUyMGdhcyUyMHRyYWRpbmclMjBieSUyMHNoaXB8ZW58MHx8MHx8fDA%3D" 
      alt="Oil and Gas Industrial" 
      className="w-full h-full object-cover" 
    />
  </div>
  
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full py-32">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      WHO<br />WE ARE
    </h1>
    
    <p className="text-xl text-white/90 mb-8 max-w-2xl">
      Driving energy trade through trust,<br/>
      transparency, and global standards.
    </p>
    
    <Link to="/contact">
      <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2">
        <span>Discuss a Trade</span>
        <ArrowRight size={20} />
      </button>
    </Link>

    <div className="mt-16 text-white/80 text-sm max-w-3xl leading-relaxed">
      Founded by seasoned professionals in global commodities trading, we specialize in structuring complex deals across crude oil, natural gas, refined products, and logistics infrastructure. With a strong commitment to compliance and international trade standards, we deliver secure, efficient, and scalable energy solutions.
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
          <p className="text-gray-700 text-lg mb-16 max-w-4xl leading-relaxed">
            We exist to power global energy trade through trust, efficiency, and compliance. By specializing in high-demand commodities and the infrastructure that moves them, we aim to be the most reliable and forward-thinking partner in the oil, gas, and logistics sectors.
          </p>

          {/* Our Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 pt-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We exist to power global energy trade through trust, efficiency, and compliance. By specializing in high-demand commodities and the infrastructure that moves them, we aim to be the most reliable and forward-thinking partner in the oil, gas, and logistics sectors.
              </p>
               <Link to="/contact">
              <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2">
                <span>Start Your Trade With Us</span>
                <ArrowRight size={20} />
              </button>
              </Link>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-90">
              <img src="https://plus.unsplash.com/premium_photo-1681823079012-47f780f9de7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG9pbCUyMGFuZCUyMGdhc3xlbnwwfHwwfHx8MA%3D%3D" alt="Mission" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-2xl shadow-2xl h-90">
              <img src="https://plus.unsplash.com/premium_photo-1682148782647-d6565344ecce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxvaWwlMjBhbmQlMjBnYXN8ZW58MHx8MHx8fDA%3D" alt="Vision" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="order-1 lg:order-2 pt-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 ">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To lead the global movement of high-demand energy commodities and infrastructure by building a trusted ecosystem of compliant, cross-border energy trade—empowering economies and energizing the world.
              </p>
               <Link to="/contact">
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2">
                <span>Start Your Trade With Us</span>
                <ArrowRight size={20} />
                             
                            </button>
                          </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16">Meet the<br />Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-3 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex justify-center space-x-3">
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

      {/* Building Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16">Building Trust<br />Through Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
                       <Link to="/contact">
                                    <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-lg inline-flex items-center space-x-2">
  
                                      <span>Discuss a Trade</span>
                                      <ArrowRight size={20} />
                                    </button>
                                  </Link>
                    </div>
        </div>
      </section>

      {/* Have Questions Section */}
          <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Have questions?</h2>
              <p className="text-gray-700 mb-4">Or want to explore a potential partnership?</p>

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

            <div className="relative h-96  min-h-[500px]" pt-10>
              <img
                src="https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG9pbCUyMGFuZCUyMGdhc3xlbnwwfHwwfHx8MA%3D%3D"
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
          <p className="mb-4">© 2025 Trampexpert Inc.</p>
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
export default About;