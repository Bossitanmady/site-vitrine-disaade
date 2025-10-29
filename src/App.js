import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Features />
      <Applications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
