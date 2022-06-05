import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Study from './components/Study';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Study/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
