import React from 'react';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="/강백호.png" alt="Product" />
      </div>
      <div className="product-info">
        <h3 className="product-title">강백호 국가대표 유니폼</h3>
        <div className="product-price-date">
          <span className="product-price">350,000 원</span>
          <span className="product-date">2일 전</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
