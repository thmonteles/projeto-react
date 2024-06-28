import React from 'react';
import Nav from './components/Nav';
import Container from './components/Container';
import ProductList from './components/ProductList';
import ProductItens from './components/ProductsItens';
import ProductModal from './components/ProductModal';
import Group from './components/group';

import './styles/App.scss';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='static-top'>
          <p className='p-app'>Compra <span className='active'>100% segura</span></p>
          <p className='p-app'><span className='active'>Frete grátis</span> acima de R$ 200</p>
          <p className='p-app'><span className='active'>Parcele</span> suas compras</p>
        </div>
        <Nav />
      </header>
      <main>
        <Container />
        <ProductItens />
        <ProductList />
        <Group />
        <Footer />
      </main>
    </div>
  );
};

export default App;
