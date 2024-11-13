// src/components/Banner.jsx
import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    infinite: true, // 무한 반복
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 속도 (밀리초)
    arrows: true, // 좌우 화살표 버튼 표시
    fade: true,
    prevArrow: <CustomPrevArrow />, // 커스텀 왼쪽 화살표
    nextArrow: <CustomNextArrow />, // 커스텀 오른쪽 화살표
  };

  return (
    <div className="banner-slider" style={{backgroundColor:"white"}}>
      <Slider {...settings}>
        {/* 슬라이드 1 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-image">
              <img src="/카드혜택.webp" alt="배너 이미지 1" />
            </div>
          </div>
        </div>

        {/* 슬라이드 2 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-image">
              <img src="/택배비.webp" alt="배너 이미지 2" />
            </div>
          </div>
        </div>

        {/* 슬라이드 3 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-image">
              <img src="/검수이용료.webp" alt="배너 이미지 3" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// 커스텀 왼쪽 화살표 버튼
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev" onClick={onClick}>
      &lt;
    </button>
  );
};

// 커스텀 오른쪽 화살표 버튼
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next" onClick={onClick}>
      &gt;
    </button>
  );
};

export default Banner;
