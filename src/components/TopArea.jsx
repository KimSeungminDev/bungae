// src/components/TopArea.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopArea = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top-area" style={{ width: '100%' }}>
      <div className="header">
        <div className="header-bar1">
          <Link className="header-logo" to="/">
            <img src="/번개장터.svg" alt="로고 이미지" />
          </Link>
          <div className="header-search" ref={searchRef}>
            <div className="header-search-in1">
              <input
                type="text"
                placeholder="상품명, 지역명, @상품명 입력"
                maxLength={40}
                className="header-search-input"
                onClick={() => setIsSearchOpen(true)}
              />
              <a className="header-search-a">
                <img src="/검색버튼.png" width={16} height={16} alt="검색 버튼 아이콘" />
              </a>
            </div>
            {isSearchOpen && (
              <div className="header-search-open">
                <div style={{ padding: "0px 15px" }}>
                  <div style={{ display: "flex" }}>
                    <a className="header-search-choice">최근검색어</a>
                    <a className="header-search-nochoice">인기검색어</a>
                  </div>
                  <div style={{ height: "360px", overflow: 'hidden' }}>
                    <div style={{ height: "100%" }}>
                      <div style={{ padding: "20px 0px" }}>
                        <div className="search-list">
                          <button type="button">테스트상품</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-search-delete">
                  <a
                    style={{ color: "rgb(179, 179, 179)" }}
                    onClick={() => setIsSearchOpen(false)}
                  >
                    닫기
                  </a>
                  <a style={{ fontSize: "13px", color: "rgb(179, 179, 179)" }}>
                    검색어 전체삭제
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="header-bar1-other">
            <button className="header-other-talk">
              <img src="/번개톡.png" width={23} height={24} alt="번개톡버튼 이미지" />
              <span style={{ lineHeight: '36px', fontSize: '14px', color: '#000' }}>번개톡</span>
            </button>
            <a className="header-other-a">
              <img src="내상점.png" width={23} height={24} alt="내상점버튼 이미지" />
              <span style={{ lineHeight: '36px', fontSize: '14px', color: '#000' }}>내상점</span>
            </a>
            <a className="header-other-a">
              <img src="판매하기.png" width={23} height={24} alt="내상점버튼 이미지" />
              <span style={{ lineHeight: '36px', fontSize: '14px', color: '#000' }}>판매하기</span>
            </a>
          </div>
        </div>
        <div className="header-bar2">
          <div className="header-bar2-buger">
            <img src="/메뉴아이콘.png" width={20} height={16} alt="메뉴 버튼 아이콘" />
          </div>
          <div className="header-bar2-sellercenter">
            <a href="" target="_blank" className="header-sellercenter-span">
              <b>번개장터 판매자센터</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArea;
