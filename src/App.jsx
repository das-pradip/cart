import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import ReviewsSection from './components/ReviewSection.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ReviewsSection />
      <TrustSection />
      <Footer />
     </div>
    </>
  )
}

export default App
