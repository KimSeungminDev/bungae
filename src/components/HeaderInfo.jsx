import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 상태
  const [isAlramVisible, setIsAlramVisible] = useState(false);
  const [isShopMenuVisible, setIsShopMenuVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const handleMouseEnterAlram = () => {
    setIsAlramVisible(true);
  };

  const handleMouseLeaveAlram = () => {
    setIsAlramVisible(false);
  };

  const handleMouseEnterShop = () => {
    setIsShopMenuVisible(true);
  };

  const handleMouseLeaveShop = () => {
    setIsShopMenuVisible(false);
  };

  const handleBookmark = () => {
    alert("브라우저에서 이 페이지를 즐겨찾기에 추가하려면 Ctrl + D 또는 Cmd + D를 누르세요.");
  };

  const handleLogoutClick = () => {
    setIsLogoutModalVisible(true);
  };

  const handleCloseModal = (event) => {
    if (event.target.className.includes('header-logout-modal-overlay')) {
      setIsLogoutModalVisible(false);
      setIsLoginModalVisible(false);
    }
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalVisible(false);
    console.log("로그아웃 실행");
    setIsLoggedIn(false); // 로그아웃 시 로그인 상태를 false로 변경
    // 실제 로그아웃 로직 추가
  };

  const handleLoginClick = () => {
    setIsLoginModalVisible(true);
  };

  const handleConfirmLogin = () => {
    setIsLoginModalVisible(false);
    console.log("로그인 실행");
    setIsLoggedIn(true); // 로그인 성공 시 상태 변경
    // 실제 로그인 로직 추가
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
          {isLoggedIn ? (
            <button className="header-info-loginout" onClick={handleLogoutClick}>
              로그아웃
            </button>
          ) : (
            <button className="header-info-loginout" onClick={handleLoginClick}>
              로그인/회원가입
            </button>
          )}

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
              <Link to="/store" className="header-info-r_menu-text">
                내 상점
              </Link>
              <div className={isShopMenuVisible ? 'header-info-menu-div-on' : 'header-info-menu-div-off'}>
                <a className="header-info-menu-a" href="/shop/84105621/products">내 상품</a>
                <a className="header-info-menu-a" href="/shop/84105621/favorites">찜한상품</a>
                <a className="header-info-menu-a" href="/settings">계정설정</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 로그아웃 모달 */}
      {isLogoutModalVisible && (
        <div className="header-logout-modal-overlay" onClick={handleCloseModal}>
          <div className="header-logout-modal">
            <h2>로그아웃</h2>
            <p>로그아웃 하시겠습니까?</p>
            <div className="header-logout-modal-buttons">
              <button className="header-logout-confirm" onClick={handleConfirmLogout}>
                확인
              </button>
              <button className="header-logout-cancel" onClick={() => setIsLogoutModalVisible(false)}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 로그인 모달 */}
      {isLoginModalVisible && (
        <div className="header-login-modal-overlay" onClick={handleCloseModal}>
          <div className="header-login-modal">
            <button className='modal-close'>
              <img src="/닫기버튼.png" width="24" height="24" alt="로그인 모달 닫기 버튼 아이콘" />
            </button>
            <div className='login-modal'>
              <img src="/조금더큰로고.svg" width="30" height="34" className="login-modal-logo" onClick={handleCloseModal} />
              <div className="login-modal-text1">번개장터로 중고거래 시작하기</div>
              <div className="login-modal-text2">간편하게 가입하고 상품을 확인하세요</div>
              <div className='login-modal-btns'>
                <button className='login-modal-kakao'>
                  <div className='btn-kakao'></div>
                  카카오로 이용하기
                </button>
                <button className='login-modal-facebook'>
                <div className='btn-facebook'></div>
                페이스북으로 이용하기
                </button>
                <button className='login-modal-naver'>
                <div className='btn-naver'></div>
                네이버로 이용하기
                </button>
                <a className='login-modal-join'>
                <div className='btn-join'></div>
                본인인증으로 이용하기
                </a>
              </div>
              <div className='login-modal-info'>
                <p>
                  도움이 필요하면&nbsp;
                  <a href="mailto:help@bunjang.co.kr">이메일</a>
                  &nbsp;또는 고객센터
                  <b>1670-2910</b>로 문의 바랍니다.
                  <br />
                  고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderInfo;
