// src/components/HeaderInfo.jsx
import React, { useState } from 'react';

const HeaderInfo = () => {
  const [isAlramVisible, setIsAlramVisible] = useState(false);
  const [isShopMenuVisible, setIsShopMenuVisible] = useState(false);

  const handleMouseEnterAlram = () => {
    setIsAlramVisible(true);
    console.log("알림 메뉴 활성화");
  };

  const handleMouseLeaveAlram = () => {
    setIsAlramVisible(false);
    console.log("알림 메뉴 비활성화");
  };

  const handleMouseEnterShop = () => {
    setIsShopMenuVisible(true);
    console.log("내 상점 메뉴 활성화");
  };

  const handleMouseLeaveShop = () => {
    setIsShopMenuVisible(false);
    console.log("내 상점 메뉴 비활성화");
  };

  const handleBookmark = () => {
    alert("브라우저에서 이 페이지를 즐겨찾기에 추가하려면 Ctrl + D 또는 Cmd + D를 누르세요.");
  };

  return (
    <div className="header-info">
      <div className="header-info-in1">
        <div className="header-info-left">
          <a className="header-info-download" href="">
            <img src="로고.svg" width={16} height={17} alt="앱다운로드버튼 이미지" />
            앱다운로드
          </a>
          <button className="header-info-star" onClick={handleBookmark}>
            <img src="star.svg" width={16} height={17} alt="즐겨찾기버튼 이미지" />
            즐겨찾기
          </button>
        </div>
        <div className="header-info-right">
          <button className="header-info-logout">로그아웃</button>

          {/* 알림 메뉴 */}
          <div
            className="header-info-r_menu"
            onMouseEnter={handleMouseEnterAlram}
            onMouseLeave={handleMouseLeaveAlram}
          >
            <div className="header-info-r_menu-in">
              <a className="header-info-r_menu-text">알림</a>
              <div className={isAlramVisible ? 'r_menu-alram-on' : 'r_menu-alram-off'}>
                <div className="r_menu-alram-box">
                  <img src="/알람.png" width={20} height={23} alt="빈 알림 이미지" />
                  최근 알림이 없습니다.
                </div>
              </div>
            </div>
          </div>

          {/* 내 상점 메뉴 */}
          <div
            className="header-info-r_menu"
            onMouseEnter={handleMouseEnterShop}
            onMouseLeave={handleMouseLeaveShop}
          >
            <div className="header-info-r_menu-in">
              <a className="header-info-r_menu-text">내 상점</a>
              <div className={isShopMenuVisible ? 'header-info-menu-div-on' : 'header-info-menu-div-off'}>
                <a className="header-info-menu-a" href="/shop/84105621/products">내 상품</a>
                <a className="header-info-menu-a" href="/shop/84105621/favorites">찜한상품</a>
                <a className="header-info-menu-a" href="/settings">계정설정</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
