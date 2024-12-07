// src/components/StoreDashboard.jsx

import React, { useState } from 'react'; // useState를 import
import '../Store.css';

const Store = () => {
  const [activeTab, setActiveTab] = useState("상품");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="store-container">
      <div className="store-header">
        <div className="store-image">
          <img src="/내 상점/기본상점사진.svg" alt="상점 이미지" />
          <button className="store-manage-button">내 상점 관리</button>
        </div>
        <div className="store-details">
          <div className="store-name">
            <h2>상점84105621호</h2>
            <button className="store-edit-button">상점명 수정</button>
          </div>
          <p>
            <img src="/내 상점/상점오픈일.png" alt="상점오픈일 이미지" />
            상점오픈일: 12일 전 | 상점방문수: 0명 | 상품판매: 0회
          </p>
          <p>TEST</p>
          <button className="store-description-button">소개글 수정</button>
        </div>
      </div>
      <div className="store-tabs">
        <button
          className={`tab-button ${activeTab === "상품" ? "active" : ""}`}
          onClick={() => handleTabClick("상품")}
        >
          상품 0
        </button>
        <button
          className={`tab-button ${activeTab === "상점후기" ? "active" : ""}`}
          onClick={() => handleTabClick("상점후기")}
        >
          상점후기 0
        </button>
        <button
          className={`tab-button ${activeTab === "찜" ? "active" : ""}`}
          onClick={() => handleTabClick("찜")}
        >
          찜 0
        </button>
        <button
          className={`tab-button ${activeTab === "팔로잉" ? "active" : ""}`}
          onClick={() => handleTabClick("팔로잉")}
        >
          팔로잉 0
        </button>
        <button
          className={`tab-button ${activeTab === "팔로워" ? "active" : ""}`}
          onClick={() => handleTabClick("팔로워")}
        >
          팔로워 0
        </button>
      </div>
      <div className="store-content">
        {activeTab === "상품" && <p>등록된 상품이 없습니다.</p>}
        {activeTab === "상점후기" && <p>상점후기가 없습니다.</p>}
        {activeTab === "찜" && <p>찜한 상품이 없습니다.</p>}
        {activeTab === "팔로잉" && <p>팔로잉이 없습니다.</p>}
        {activeTab === "팔로워" && <p>팔로워가 없습니다.</p>}
      </div>
    </div>
  );
};

export default Store;
