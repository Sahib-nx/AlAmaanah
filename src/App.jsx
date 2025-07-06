
import './App.css'
import AboutSection from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Service';

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Services/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App;
