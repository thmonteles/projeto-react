import React, { useState } from 'react';
import QuantityButton from './QuantityButton';
import '../styles/Modal.scss';

interface Product {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <img src={product.photo} alt={product.productName} width="140px" height="140px" />
      <div className="modal-dialog">
        <h1 className="modal-title">{product.productName}</h1>
        <p className='p-item'>R$ {product.price.toFixed(2)}</p>
        <p className='p-text-item'>{product.descriptionShort}</p>
        <p className='p-text-item'>Veja mais detalhes do produto</p>
        <div className="button-section">
          <QuantityButton
            quantity={quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
          <button className='button-footer'>COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
