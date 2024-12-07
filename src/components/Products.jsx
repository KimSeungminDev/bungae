import React from "react";
import Slider from "react-slick";
import "./products.css";

const Products = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="products">
      <div className="products-area">
        <div className="products-main">
          <div className="products-top">
            {/* 이미지 슬라이더 */}
            <div className="products-t1">
              <Slider {...settings}>
                <div>
                  <img
                    src="/예시상품/아이폰1.jpg"
                    alt="상품 이미지 1"
                    className="products-image"
                  />
                </div>
                <div>
                  <img
                    src="/예시상품/아이폰2.jpg"
                    alt="상품 이미지 2"
                    className="products-image"
                  />
                </div>
                <div>
                  <img
                    src="/예시상품/아이폰3.jpg"
                    alt="상품 이미지 3"
                    className="products-image"
                  />
                </div>
              </Slider>
            </div>
            {/* 설명 영역 */}
            <div className="products-t2">
              <h1>[1] 프로젝트 GR 그레일즈 리버시블 후드 체크 셔츠 블랙</h1>
              <p className="products-price">400,000원</p>
              <ul>
                <li>상품상태: 새 상품</li>
                <li>사이즈: 1</li>
                <li>배송비: 일반 5,000원</li>
              </ul>
              <div>
                <button className="products-btn products-heart">찜 8</button>
                <button className="products-btn products-talk">번개톡</button>
                <button className="products-btn products-buy">바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 커스텀 화살표 컴포넌트
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      &lt;
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      &gt;
    </button>
  );
};

export default Products;
