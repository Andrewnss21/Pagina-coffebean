import React from 'react';
import Header from './componentes/header';
import Hero from './componentes/hero-section';
import About from './componentes/about';
import Shop from './componentes/shop';
import Contact from './componentes/contacto';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Shop />
      <Contact />
    </div>
  );
};

export default App;
