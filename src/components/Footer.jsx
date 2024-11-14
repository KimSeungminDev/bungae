// src/components/Footer.jsx
import React from 'react';
import '../footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div1">
        <div className="footer-top">
          <a className="footer-top-a" href="#">회사소개</a>|
          <a className="footer-top-a" href="#">이용약관</a>|
          <a className="footer-top-a" href="#">운영정책</a>|
          <a href="#" className="active footer-top-a">개인정보처리방침</a>|
          <a className="footer-top-a" href="#">청소년보호정책</a>|
          <a className="footer-top-a" href="#">광고제휴</a>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-info">
          <h4>번개장터(주) 사업자정보</h4>
          <p>대표이사 : 최재화, 강승현 | 개인정보보호책임자 : 박병성</p>
          <p>사업자등록번호 : 113-86-45836 | 통신판매업신고 : 2019-서울서초-1126</p>
          <p>호스팅서비스 제공자 : Amazon Web Services (AWS)</p>
          <p>EMAIL : help@bunjang.co.kr | FAX : 02-598-8241</p>
          <p>주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층(서초동, 마제스타시티, 힐스테이트 서리풀)</p>
          <a href="#">사업자정보 확인</a>
        </div>
        <div className="footer-center">
          <h4>고객센터</h4>
          <p><strong>1670-2910</strong></p>
          <p>운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)</p>
          <a href="#">공지사항</a> | <a href="#">1:1 문의하기</a> | <a href="#">자주 묻는 질문</a>
          <h4 style={{marginTop:"30px"}}>우리은행 채무지급보증 안내</h4>
          <p>번개장터(주)는 회사가 직접 판매하는 상품에 한하여, 고객님의 현금 결제 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
          <a href="#">서비스 가입사실 확인</a>
          <p>© Bungeajangter. Inc All rights reserved.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-certification">
          <p>[인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은 물리적 인프라 제외)</p>
          <p>[유효기간] 2024.05.18 ~ 2027.05.17</p>
        </div>
        <p>번개장터(주)는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령 및 번개장터(주)의 약관에 따라 상품, 상품정보, 거래에 관한 책임은 개별 판매자에게 귀속하고, 번개장터(주)는 원칙적으로 회원간 거래에 대하여 책임을 지지 않습니다. 다만, 번개장터(주)가 직접 판매하는 상품에 대한 책임은 번개장터(주)에게 귀속합니다.</p>
      </div>
    </footer>

  );
};

export default Footer;
