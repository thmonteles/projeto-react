import React from 'react';
import '../styles/Modal.scss';

interface QuantityButtonProps {
  quantity: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <div className="quantity-button">
      <button className="quantity-control" onClick={decreaseQuantity}>
        -
      </button>
      <p>{quantity}</p>
      <button className="quantity-control" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
