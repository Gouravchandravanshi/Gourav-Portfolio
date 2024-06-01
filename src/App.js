import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <HeroSection ></HeroSection>
      <Projects></Projects>
      <TechStack></TechStack>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
      
    
  );
}

export default App;
