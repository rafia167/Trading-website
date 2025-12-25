import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WhatWeTrade from  './components/WhatWeTrade';
import MarketInsights from './components/MarketInsights';
import Crudepricing from './components/Crudepricing';
import LegalCompliance from './components/LegalCompliance';
import Contact from './components/Contact';
import EnergyTradeCrossroads from './components/EnergyTradeCrossroads';
import GasDemandElectrifying from './components/GasDemandElectrifying';
import TradeExperts from './components/TradeExperts';
import NewsInsights from './components/NewsInsights';
import NewsDetail from './components/NewsDetail';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
                 <Route path="/news-insights" element={<NewsInsights />} />
                 <Route path="/news-insights/:id" element={<NewsDetail />} />
                 
        <Route path="/about" element={<About />} />
        <Route path="/what-we-trade" element={<WhatWeTrade />} />
                <Route path="/trade-experts" element={<TradeExperts />} />
         <Route path="/market-insights" element={<MarketInsights />} />
                <Route path="/market-insights/crude-pricing" element={<Crudepricing />} />
                <Route path="/market-insights/energy-trade" element={<EnergyTradeCrossroads />} />
                <Route path="/market-insights/gas-demand" element={<GasDemandElectrifying />} />
          <Route path="/legal-compliance" element={<LegalCompliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
