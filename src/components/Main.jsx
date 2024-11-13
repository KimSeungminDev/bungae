// src/Main.jsx
import React from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';

const Main = () => {
  return (
    <main>
      <div style={{ backgroundColor: "white" }}>
        <Banner />
        <div style={{ backgroundColor: "white" }}>
          <div className='under-banner-div'>
            <img alt="앱 다운로드 QR코드를 포함한 배너 이미지 "
              src="/번개장터다운로드.png"
              className="under-banner-img" />
          </div>
          <selection className="main-list">
            <h2>오늘의 상품추천</h2>
            <div className='main-list-div' >
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </selection>
        </div>
      </div>
    </main>
  );
};

export default Main;
