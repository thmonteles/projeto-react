import React from 'react';
import "../styles/Nav.scss"

const Nav: React.FC = () => {
  return (
    <>
      <div className='Container'>
        <div id='header-search-container'>
          <input
            type="text"
            placeholder='O que você está buscando?'
          />
          <span className='search-icon'> <img src={process.env.PUBLIC_URL + '/search-icon.png'} alt="Search-icon" width={"28px"} height={"28px"} /></span>
        </div>
        <div className="content-group">
          <div className='header-logo'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
            <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
            <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
            <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
          </div>
          <div className='header-search-container'>
            <input
              type="text"
              placeholder='O que você está buscando?'
            />
            <span className='search-icon'> <img src={process.env.PUBLIC_URL + '/search-icon.png'} alt="Search-icon" width={"28px"} height={"28px"} /></span>
          </div>
          <div className='optimize-category'>
            <a href=""> <img src={process.env.PUBLIC_URL + '/icons/Vector.png'} alt="Vector" width={"24px"} height={"24px"} /></a>
            <a href=""> <img src={process.env.PUBLIC_URL + '/icons/Heart.png'} alt="Heart" width={"26px"} height={"28px"} /></a>
            <a href=""> <img src={process.env.PUBLIC_URL + '/icons/UserCircle.png'} alt="User" width={"28px"} height={"28px"} /></a>
            <a href=""> <img src={process.env.PUBLIC_URL + '/icons/ShoppingCart.png'} alt="ShoppingCart" width={"27px"} height={"26px"} /></a>
          </div>
        </div>
      </div>
      <nav className='header-optimize'>
        <button className='header-optimize-link'>TODAS AS CATEGORIAS</button>
        <button className='header-optimize-link'>SUPERMERCADO</button>
        <button className='header-optimize-link'>LIVROS</button>
        <button className='header-optimize-link'>MODA</button>
        <button className='header-optimize-link'>LANÇAMENTOS</button>
        <button className='header-optimize-link' id='nav-link-active'>OFERTAS DO DIA</button>
        <button className='header-optimize-link'>ASSINATURAS</button>
      </nav>
    </>
  );
};

export default Nav;
