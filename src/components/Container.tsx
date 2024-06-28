import React from 'react';
import "../styles/Container.scss"

function Container() {
  return (
    <div className="container-section">
      <div className='container'>
        <h1 className='text-h1'>Venha conhecer nossas promoções</h1>
        <h2 className='text-h2'>50% Off nos produtos </h2>
        <button className='first-button'>Ver produto</button>
      </div>
    </div>
  );
};

export default Container;
