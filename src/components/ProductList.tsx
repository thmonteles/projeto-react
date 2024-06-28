import React, { useEffect, useState } from 'react';
import Product, { getProductsFromURI, PRODUCTS_URI } from '../services/product-service';
import ProductModal from './ProductModal';
import "../styles/ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProductsFromURI(PRODUCTS_URI)
      .then(res => setProducts(res))
  }, []);

  const nextGroup = () => {
    const newIndex = currentIndex + 1;
    if (newIndex * 4 < products.length) {
      setCurrentIndex(newIndex);
    }
  };

  const prevGroup = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className='carousel-container'>
      <div className='dynamic-access-cards'>
        <div className='cards-content'>
          {products.slice(currentIndex * 4, currentIndex * 4 + 4).map((product, index) => (
            <div className='product-item' key={index} onClick={() => handleCardClick(product)}>
              <img src={product.photo} alt={product.productName} width={"140px"} height={"140px"} />
              <div className='content-body'>
                <h3 className='product-title'>{product.productName}</h3>
                <p className='p-title'>{product.descriptionShort}</p>
                <p className='value'>Preço: R$ {product.price.toFixed(2)}</p>
                <button className='button-product'>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='carousel-controls'>
        <button onClick={prevGroup} disabled={currentIndex === 0}>Voltar</button>
        <button onClick={nextGroup} disabled={(currentIndex + 1) * 4 >= products.length}>Avançar</button>
      </div>
      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductList;
