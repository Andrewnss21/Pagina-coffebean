import React from 'react';
import Header from './componentes/header/header';
import Hero from './componentes/Hero/hero-section';
import About from './componentes/menu';
import Shop from './componentes/nosotros';
import Galery from './componentes/galeria';
import Footer from './componentes/footer/footer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Shop />
      <Galery />
      <Footer/>
    </div>
  );
};

export default App;
