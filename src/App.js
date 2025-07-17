import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TechnicalSkill from './components/TechnicalSkill';
import ContactMe from './components/ContactMe';
import W_appIcon from './components/W_appIcon';
import BackBtn from './components/BackBtn';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <About/>
     <TechnicalSkill/>
     <ContactMe/>
     <W_appIcon/>
     <BackBtn/>

    </div>
  );
}

export default App;
